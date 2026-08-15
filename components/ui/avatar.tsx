import Image from "next/image";
import { profile } from "@/lib/data";
import Photo from "../../public/profile/photo.jpeg";

/**
 * Hero portrait.
 *
 * The source lives at `public/profile/photo.jpg` (square, 800x800).
 * Rendered through next/image so it's served as AVIF/WebP at the right
 * size, and marked `priority` because it sits above the fold.
 */
export function Avatar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px]">
      <div
        aria-hidden
        className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 blur-2xl"
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
        <Image
          src={Photo}
          alt={`${profile.name}, ${profile.role}`}
          fill
          sizes="(max-width: 640px) 280px, 320px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
