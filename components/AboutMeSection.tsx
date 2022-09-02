/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function AboutMeSection() {
  return (
    <div class={tw`grid grid-cols-2 gap-3 pt-2`}>
      {/* floating statue */}
      <div class={tw`row-span-2 relative place-self-center z-0 `}>
        <img
          class={tw`absolute top-8 p-1 filter blur-xl animate-gradient z-0`}
          src="/circle_1.png"
          alt="colorful blurry circle spinning in the background"
        ></img>
        <img
          class={tw`absolute h-64 py-5 pl-5 pr-6 animate-statue z-20`}
          style="image-rendering:crisp-edges"
          src="/head_fg.png"
          alt="drawn statue of my head"
        />
        <img
          class={tw`relative h-64 border-sm border-black py-5 pl-5 pr-6 z-10`}
          src="/head_bg.png"
          style="image-rendering:crisp-edges"
          alt="drawn statue of my head"
        />
      </div>

      {/* about me */}
      <div class={tw`row-span-2 sm:row-span-1`}>
        <div class={tw` border-b-sm border-black font-serif font-semibold`}>
          About me
        </div>
        <div class={tw`pt-2`}>
          Twenty-something software engineer from Zurich. Passionate about
          developing Fullstack applications with Applied Artificial
          Intelligence.
        </div>
      </div>

      {/* interests */}
      <div class={tw`row-span-1 col-span-2 sm:col-span-1`}>
        <div class={tw` border-b-sm border-black font-serif font-semibold`}>
          Interests
        </div>
        <div class={tw`pt-2`}>
          Twenty-something software engineer from Zurich. Passionate about
          developing Fullstack applications with Applied Artificial
          Intelligence.
        </div>
      </div>

      {/* technologies */}
      <div class={tw`row-span-1 col-span-2 pt-2`}>
        <div class={tw` border-b-sm border-black font-serif font-semibold`}>
          Technologies
        </div>
        <div class={tw`pt-2`}>
          Twenty-something software engineer from Zurich. Passionate about
          developing Fullstack applications with Applied Artificial
          Intelligence.
        </div>
      </div>
    </div>
  );
}
