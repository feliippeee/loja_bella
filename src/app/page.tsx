import Image from 'next/image'
import Header from './components/Header'
import CardsUp from './components/Cards'
import { Footer } from './components/Footer'

export default function Home() {
  return (
   <div className='flex flex-col'>
    <div className='bg-blue-700 mb-10'>
      <Header />

    </div>
      <CardsUp />
      <Footer />
   </div>
    
  )
}
