import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { EpisodeLocationsCard } from '../components/ui/EpisodeLocationsCard'
import { EpisodeLocationsTitle } from '../components/ui/EpisodeLocationsTitle'
import { episodeLocationsAnimation } from '../utils/episodeLocationsAnimation'

export async function getServerSideProps() {
  try {
    const res = await fetch(
      'https://chipax-backend-demo.herokuapp.com/api/episodes-locations'
    )
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.log(error)
  }
}

const EpisodeLocationsHome: NextPage = ({ data }: any) => {
  useEffect(() => {
    episodeLocationsAnimation()
  }, [])
  return (
    <div>
      <section className="w-full pt-10 lg:pt-[80px] overflow-hidden">
        <Link href="/">
          <a className="m-4 p-2 text-lg hover:border-b-4 transition duration-200 hover:ease-in">
            ←Home
          </a>
        </Link>
        <EpisodeLocationsTitle />
        <div className="text-center">El programa tardó {data.time}</div>
        <div className="flex justify-center flex-wrap">
          {data.results.map((result: any) => (
            <EpisodeLocationsCard
              key={result.name}
              title={result.name}
              subtitle={result.episode}
              location={result.location}
            />
          ))}
        </div>
        <div></div>
      </section>
    </div>
  )
}
export default EpisodeLocationsHome
