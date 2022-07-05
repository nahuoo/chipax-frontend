import { Card } from './Card'
import { Title } from './Title'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="w-full pt-10 lg:pt-[80px] overflow-hidden">
      <Title />
      <div className="flex justify-center flex-wrap">
        <Link href="/char-counter">
          <div className="relative cursor-pointer hover:opacity-80 max-w-[310px] rounded-lg m-2 overflow-hidden">
            <img
              src="http://www.eltiempo.com/files/image_640_428/uploads/2017/10/03/59d322ad01c2c.jpeg"
              alt="image"
              className="w-full"
            />
            <Card title="Char Counter" subtitle="Ejercicio 1" />
          </div>
        </Link>
        <Link href="/episode-locations">
          <div className="relative cursor-pointer hover:opacity-80 max-w-[370px] rounded-lg m-2 overflow-hidden">
            <img
              src="https://sm.ign.com/ign_es/gallery/r/rick-and-m/rick-and-morty-season-5-gallery_6vj7.jpg"
              alt="image"
              className="object-fill w-full"
            />
            <Card title="Episode Locations" subtitle="Ejercicio 2" />
          </div>
        </Link>
      </div>
    </section>
  )
}
