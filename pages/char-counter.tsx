import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { CharCounterCard } from '../components/ui/CharCounterCard'
import { CharCounterTitle } from '../components/ui/CharCounterTitle'
import { charCounterAnimation } from '../utils/charCounterAnimation'

export async function getServerSideProps() {
  try {
    const res = await fetch(
      'https://chipax-backend-demo.herokuapp.com/api/char-counter'
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

const charCounterHome: NextPage = ({ data }: any) => {
  useEffect(() => {
    charCounterAnimation()
  }, [])
  return (
    <div className="h-[85vh]">
      <section className="w-full pt-10 lg:pt-[80px] overflow-hidden">
        <Link href="/">
          <a className="m-4 p-2 text-lg hover:border-b-4 transition duration-200 hover:ease-in">
            ←Home
          </a>
        </Link>
        <CharCounterTitle />
        <div className="flex justify-center flex-wrap">
          {data.results.map((result: any) => (
            <CharCounterCard
              key={result.char}
              title={result.count}
              subtitle={result.char}
              text={result.resource}
            />
          ))}
          El programa tardó {data.time}
        </div>
        <div></div>
      </section>
    </div>
  )
}
export default charCounterHome
