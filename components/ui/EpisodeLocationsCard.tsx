import { SvgBackground } from './svgBackground'

export const EpisodeLocationsCard = (props: any) => (
  <div className="episodeCards relative max-w-[570px] h-[300px] m-2 rounded-lg overflow-hidden">
    <img
      src="https://forum.craftersland.net/uploads/monthly_2017_10/rick-and-morty-top-banner-two-1.png.a82332698fcb055607e7475254feb2f3.png"
      alt="image"
      className="object-fill w-full"
    />
    <div className="absolute w-full bottom-10 left-0 text-center">
      <div
        className="
                bg-white
                relative
                rounded-lg
                overflow-hidden
                mx-2
                py-2
                px-2
                "
      >
        <p className="text-sm">{props.subtitle}</p>
        <h3 className="text-base font-semibold text-dark">
          {props.title}
        </h3>
        <h4>{props.location.length} origenes diferentes</h4>
        {props.location.map((location: any) => (
            <span className="text-sm mr-1 rounded-lg p-1 bg-zinc-100">{location}</span>
        ))}
        <SvgBackground />
      </div>
    </div>
  </div>
)
