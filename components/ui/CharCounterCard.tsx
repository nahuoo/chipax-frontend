import { SvgBackground } from "./svgBackground";

export const CharCounterCard = (props: any) => (
  <div className="cards relative max-w-[470px] h-full rounded-lg m-2 overflow-hidden">
    <img
      src="https://forum.craftersland.net/uploads/monthly_2017_10/rick-and-morty-top-banner-two-1.png.a82332698fcb055607e7475254feb2f3.png"
      alt="image"
      className="object-fill w-full"
    />
    <div className="absolute w-full bottom-5 left-0 text-center">
      <div
        className="
                bg-white
                relative
                rounded-lg
                overflow-hidden
                mx-5
                py-4
                px-3
                "
      >
        <p className="text-sm">Letra {props.subtitle}</p>
        <h3 className="text-base font-semibold text-dark">
          aparece {props.title} veces
        </h3>
        <p className="text-sm">{props.text}</p>
        <SvgBackground />
      </div>
    </div>
  </div>
)