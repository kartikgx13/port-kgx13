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
          <h1>Hi&#44;there</h1>
          {/*<div className="waviy">
            <span style={{"--i":1}}>H</span>
            <span style={{"--i":2}}>i</span>
            <span style={{"--i":3}}>,</span>
            <span style={{"--i":4}}>T</span>
            <span style={{"--i":5}}>h</span>
            <span style={{"--i":6}}>e</span>
            <span style={{"--i":7}}>r</span>
            <span style={{"--i":8}}>e</span>
  </div>*/}
          <div className="hero-section-content">
              <h2>I&#39;m Kartik Gavande</h2>
              <h1>
                <span>I&#39;m into</span>
                <div className="message">
                  <div className="word1">Web Dev</div>
                  <div className="word2">Python</div>
                  <div className="word3">Data</div>
                </div>
              </h1>
          </div>
          </div>
          <div className="hero-section-right">
          </div>
        </div>
      </section>
    </>
  )
}
