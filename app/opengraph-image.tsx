import { ImageResponse } from "next/og";

export const alt = "Constantin Chirila · Full-stack engineer & product partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A stylised monstera leaf drawn in ink, matching app/icon.svg.
const LEAF = `
<svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 64 64">
  <g fill="none" stroke="#2E4229" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 56 C32 52 32 50 32 47" stroke-width="2.4"/>
    <path d="M32 8 C42 9 51 16 52 27 C52.6 33 50 39 45 43 C39.5 47.3 35 47 32 47 C29 47 24.5 47.3 19 43 C14 39 11.4 33 12 27 C13 16 22 9 32 8 Z" fill="#2E4229" stroke-width="1.2"/>
    <path d="M32 45 L32 12" stroke="#F4EFE0" stroke-width="1.6"/>
    <path d="M32 20 L46 22" stroke="#F4EFE0" stroke-width="1.4"/>
    <path d="M32 20 L18 22" stroke="#F4EFE0" stroke-width="1.4"/>
    <path d="M32 30 L47 33" stroke="#F4EFE0" stroke-width="1.4"/>
    <path d="M32 30 L17 33" stroke="#F4EFE0" stroke-width="1.4"/>
    <path d="M32 39 L43 42" stroke="#F4EFE0" stroke-width="1.4"/>
    <path d="M32 39 L21 42" stroke="#F4EFE0" stroke-width="1.4"/>
  </g>
</svg>`;
const LEAF_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(LEAF).toString("base64")}`;

// Fetch a Google font as an ArrayBuffer that Satori can parse. Uses an old
// User-Agent so Google serves TTF rather than WOFF2. Returns null on failure so
// the OG route degrades gracefully rather than breaking the build.
async function loadGoogleFont(
  family: string,
  weight: number,
  italic: boolean,
): Promise<ArrayBuffer | null> {
  try {
    const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
    const url = `https://fonts.googleapis.com/css2?family=${family}:${axis}`;
    const css = await (
      await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36",
        },
      })
    ).text();
    const match = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/);
    if (!match) return null;
    return await (await fetch(match[1])).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [display, displayItalic, body] = await Promise.all([
    loadGoogleFont("Cormorant+Garamond", 500, false),
    loadGoogleFont("Cormorant+Garamond", 500, true),
    loadGoogleFont("EB+Garamond", 500, false),
  ]);

  const fonts = [
    display && { name: "Cormorant", data: display, weight: 500 as const, style: "normal" as const },
    displayItalic && { name: "Cormorant", data: displayItalic, weight: 500 as const, style: "italic" as const },
    body && { name: "EB Garamond", data: body, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 500; style: "normal" | "italic" }[];

  const hasSerif = Boolean(display);
  const headFamily = hasSerif ? "Cormorant" : "serif";
  const bodyFamily = body ? "EB Garamond" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "#F4EFE0",
          fontFamily: bodyFamily,
          position: "relative",
        }}
      >
        {/* watercolour splotch accents */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 460,
            height: 380,
            borderRadius: "48% 52% 61% 39% / 44% 57% 43% 56%",
            background:
              "radial-gradient(closest-side, rgba(193,96,122,0.42), rgba(193,96,122,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: 220,
            width: 420,
            height: 360,
            borderRadius: "48% 52% 61% 39% / 44% 57% 43% 56%",
            background:
              "radial-gradient(closest-side, rgba(192,138,45,0.38), rgba(192,138,45,0))",
          }}
        />

        {/* text block */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#5E6E52",
            }}
          >
            Front-end engineer · Design & UX · Est. 2013
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 24,
              fontFamily: headFamily,
              fontSize: 92,
              lineHeight: 1.02,
              color: "#2E4229",
            }}
          >
            <span>Software, carefully&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#4A6B3A" }}>
              cultivated.
            </span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#48513c", lineHeight: 1.4 }}>
            Fast, accessible interfaces in React and TypeScript, from a
            front-end engineer with a designer&apos;s eye.
          </div>
          <div
            style={{
              marginTop: 40,
              fontFamily: headFamily,
              fontSize: 34,
              letterSpacing: 2,
              color: "#2E4229",
            }}
          >
            Constantin Chirila
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LEAF_DATA_URI} width={420} height={420} alt="" />
      </div>
    ),
    { ...size, fonts },
  );
}
