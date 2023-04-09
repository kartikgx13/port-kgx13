import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry,faInstagram } from '@fortawesome/free-solid-svg-icons'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'next-share'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <section className="main-hero-section">
        <div className="main-hero-container">
          <div className="hero-section-left">
            <h1>Hi There&#44;</h1>
            <h1>I&#39;m Kartik Gavande</h1>
            <div className="container">
               <p>I'm into</p>
               <section className="animation">
                 <div className="first"><div>Web Dev.</div></div>
                 <div className="second"><div>Data Science</div></div>
                 <div className="third"><div>Data Analytics</div></div>
               </section>
            </div>
            <div className="social-media-icons">
              <Image
              width={50}
              height={50}
              src="/images/facebook.png"
              alt="facebook"
              />
              <Image
              width={50}
              height={50}
              src="/images/instagram.png"
              alt="instagram"
              />
              <Image
              width={50}
              height={50}
              src="/images/github.png"
              alt="github"
              />
              <Image
              width={50}
              height={50}
              src="/images/twitter.png"
              alt="twitter"
              />
              <Image
              width={50}
              height={50}
              src="/images/linkedin.png"
              alt="linkedin"
              />
            </div>
          </div>
          <div className="hero-section-right">
          <div className="my-image">
          <Image
              width={450}
              height={450}
              src="/images/myimg1.jpg"
              alt="my-image"
          />
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
