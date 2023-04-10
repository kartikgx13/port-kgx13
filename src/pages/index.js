import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry,faInstagram } from '@fortawesome/free-solid-svg-icons'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'next-share'
import BarChartDemo from '../../components/BarGraph'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* Main-hero-section starts here */}
      <section className="main-hero-section" id='home'>
        <div className="main-hero-container">
          <div className="hero-section-left">
            <h1>Hi There&#44;</h1>
            <h1>I&#39;m Kartik Gavande</h1>
            <div className="container">
               <p>I&#39;m into</p>
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
      {/* Main-hero-section ends here */}


      {/* About me section begins here */}
      <section className="about-me-section" id='about'>
        <div className="main-about-container">
          <div className="about-section-left">
          <Image
              width={512}
              height={512}
              src="/images/about1.jpg"
              alt="my-image"
          />
          </div>
          <div className="about-section-right">
           <h1>About Me</h1>
           <p>Hello folks&#44;myself Kartik Gavande & I&#39;m currently pursuing B&#46;E&#46; in Computer Science from Thakur College of Engineering and technology&#46; My areas of interest include Front-End web development and Data Science&#46;Currently working on mini-projects from these 2 domains and looking forward to build a career in these two respectively&#46;To view my resume please click the button below&#46;</p>
           <div className="resume-button">
            <button>
              Download Resume
            </button>
           </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id='skills'>
        <div className="main-skills-container">
          <div className="skills-left-section">
            <h1>Skills</h1>
            <p>
              Starting from the beginning since I&#39;m keen in <b>Front-End development</b>&#44;
              <b>HTML&#44;CSS & JS</b> is a must&#46;I have developed basics projects using all these
              3 technologies to sharpen my basics&#46;Next in line comes <b>advanced frameworks</b>
              to develop the frontend more efficiently and quickly from which I&#39;m working
              with <b>React&#46;Js and Next&#46;Js</b> which ease out the development process&#46;
            </p>
            <p>
              My another area of interest is <b>Data Science</b> so for next set of skills&#44;
               <b>Python</b> is must&#46;I have learnt python from <b>Basics to an Intermediate</b> level
              and focusing more on the libraries and packages which are more important
              for data science such as <b>Scikit-learn for ML</b> and <b>Tensorflow for Deep learning</b>&#46;
            </p>
            <p className="bar-besides">
              Besides is a comparative chart of my skills for a better understanding
            </p>
            <p className="bar-below">
              Below is a comparative chart of my skills for a better understanding
            </p>
          </div>
          <div className="skills-right-section">
            <div className="bar-container">
            <BarChartDemo label="Proficiency(%)" data={[60,40,25,75,60,50]}/>
            </div>
            {/*<div className="techlogo-container">
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
              <Image
              width={50}
              height={50}
              src="/images/linkedin.png"
              alt="linkedin"
              />
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}
