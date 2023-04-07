import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <section className="main-hero-section">
        <div className="main-hero-container">
          <div className="hero-section-left">
            
          </div>
          <div className="hero-section-right">

          </div>
        </div>
      </section>
    </>
  )
}
