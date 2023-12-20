'use client'
import Image  from 'next/image';
import { useEffect, useState } from 'react';
import fetchData from '@/app/fetchData';
import {useInView} from 'react-intersection-observer'
import RenderData from './RenderData';

let page = 2
const LoadMore = () => {

  const {ref, inView} = useInView()
  const [data, setData] = useState([])

  useEffect(() => {
    if  (inView) {
      fetchData(page).then((res) => {
        setData([...data, ...res])
        page++
      })}
  }, [inView, data])
  return (
  <>
    <RenderData data={data}/>
    
    <section ref={ref} className='flex justify-center items-center w-full'>
        <div>
            <Image
                width={50}
                height={50}
                alt='Load More...'
                className='object-contain'
                src= '/spinner.svg'/>
        </div>
    </section>
  </>
  )
}

export default LoadMore