import Image, { type ImageProps } from "next/image";
import { plate, type PlateName } from "@/app/lib/plates";

type PlateImageProps = {
  name: PlateName;
  alt: string;
} & Omit<ImageProps, "src" | "width" | "height" | "alt">;

/**
 * next/image wrapper for the botanical cutouts. Pulls intrinsic dimensions
 * from the plate registry so aspect ratio is preserved and no layout shift
 * occurs. Decorative plates should pass alt="".
 */
export default function PlateImage({ name, alt, ...rest }: PlateImageProps) {
  const { src, width, height } = plate(name);
  return <Image src={src} width={width} height={height} alt={alt} {...rest} />;
}
