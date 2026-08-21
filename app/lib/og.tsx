import { ImageResponse } from "next/og";
import { BONE, INK, ORANGE } from "./palette";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Fetch a Google font as an ArrayBuffer Satori can parse (old UA forces TTF).
// Returns null on failure so the OG route degrades instead of breaking.
async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
    const css = await (
      await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36",
        },
        cache: "force-cache",
      })
    ).text();
    const match = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/);
    if (!match) return null;
    // Only follow the extracted URL if it is on Google's font CDN.
    if (!/^https:\/\/fonts\.gstatic\.com\//.test(match[1])) return null;
    return await (await fetch(match[1], { cache: "force-cache" })).arrayBuffer();
  } catch {
    return null;
  }
}

interface OgOptions {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Display size of the title; long post titles pass a smaller value. */
  titleSize?: number;
}

const Logo = ({ size = 56 }: { size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      border: `2px solid ${ORANGE}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: size * 0.38,
        height: size * 0.38,
        background: ORANGE,
        transform: "rotate(45deg)",
      }}
    />
  </div>
);

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  titleSize = 108,
}: OgOptions): Promise<ImageResponse> {
  const [display, mono] = await Promise.all([
    loadGoogleFont("Archivo", 500),
    loadGoogleFont("IBM+Plex+Mono", 400),
  ]);

  const fonts = [
    display && { name: "Archivo", data: display, weight: 500 as const, style: "normal" as const },
    mono && { name: "IBM Plex Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 500 | 400; style: "normal" }[];

  // If no font could be loaded (offline build), Satori cannot render text, so
  // fall back to a text-free branded card rather than throwing a 500.
  if (fonts.length === 0) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: INK,
          }}
        >
          <Logo size={160} />
        </div>
      ),
      OG_SIZE,
    );
  }

  const monoFamily = mono ? "IBM Plex Mono" : "Archivo";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px 56px",
          background: INK,
          color: BONE,
          fontFamily: "Archivo",
          position: "relative",
        }}
      >
        {/* Hairline frame */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: `1px solid rgba(255, 103, 55, 0.45)`,
          }}
        />

        <div
          style={{
            display: "flex",
            fontFamily: monoFamily,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: ORANGE,
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            lineHeight: 0.98,
            letterSpacing: titleSize > 80 ? -4 : -2,
            fontWeight: 500,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <div
            style={{
              display: "flex",
              fontFamily: monoFamily,
              fontSize: 24,
              lineHeight: 1.5,
              maxWidth: 880,
              color: BONE,
              opacity: 0.9,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              paddingTop: 28,
              borderTop: `1px solid rgba(255, 103, 55, 0.45)`,
            }}
          >
            <Logo size={44} />
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Constantin{" "}
              <span style={{ color: ORANGE, marginLeft: 12 }}>Chirila</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
