import Image from 'next/image'
import LoadMore from '@/components/LoadMore'
import AnimeCard from '@/components/AnimeCard'
import fetchData from './fetchData'
import RenderData from '@/components/RenderData'

export default async function Home() {

  const data = await fetchData(1)
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">

      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <RenderData data={data}/>
    
      <LoadMore />

    </main>
  )
}
