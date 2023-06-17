import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry,faInstagram } from '@fortawesome/free-solid-svg-icons'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'next-share'
import BarChartDemo from '../../components/BarGraph'
import { useState } from 'react'
import SkillsCard from '../../components/SkillsCard'
import ProjectCard from '../../components/ProjectCard'
import Timeline from '../../components/Timeline'
import HorizontalProgress from '../../components/HorizontalProgress'
import HorizontalAccordion from '../../components/HorizontalAccordion'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  const para1="This is an gaming application which is made for elementary school kids to learn various concepts of mathematics.The game tries to teach these mathematical concepts throught their favourite childhood game of snake and apples."
  const hash1="#C #Unity #Maths #SnakeGame"

  const para2="This is an android online books pdfs application made via Flutter and dart.The app feature various categories of book from various genres and the reader can dowload these pdfs via the google drive link or view it in the app itself"
  const hash2="#Flutter #Dart #AndroidStudio"

  const para3="This is an expenses tracker application built using Nextjs and mongodb at the backend.Through this web application the users can monitor their daily expenses and income and analyze them on the their dashboard of the web-page"
  const hash3="#Next.js #Mongodb #Vercel"
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
              <Link href="https://www.facebook.com/profile.php?id=100082166785167">
              <Image
              width={40}
              height={40}
              src="/images/facebook.png"
              alt="facebook"
              className='facebook'
              />
              </Link>
              <Link href="https://github.com/kartikgx13">
              <Image
              width={40}
              height={40}
              src="/images/github3.png"
              alt="github"
              className='github'
              />
              </Link>
              <Link href="https://twitter.com/kartikgx13">
              <Image
              width={40}
              height={40}
              src="/images/twitter.png"
              alt="twitter"
              className='twitter'
              />
              </Link>
              <Link href="https://www.linkedin.com/in/kartik-gavande-4440b020b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvBWc%2FloOSHCgsSkcGbKFXg%3D%3D">
              <Image
              width={40}
              height={40}
              src="/images/linkedin.png"
              alt="linkedin"
              className='linkedin'
              />
              </Link>

             <Link href="https://discord.com/channels/@me">
             <Image
              width={40}
              height={40}
              src="/images/discord.png"
              alt="linkedin"
              className='discord'
              />
             </Link>
            </div>
          </div>
          <div className="hero-section-right">
          <div className="my-image">
          <Image
              width={350}
              height={350}
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
          {/*<Image
              width={400}
              height={400}
              src="/images/about1.jpg"
              alt="my-image"
  />*/}
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
          </div>
          <div className="about-section-right">
           <div className="diagonal-heading">
           <h1>About Me</h1>
           </div>
           <p>Hello folks&#44;myself <b>Kartik Gavande</b> & I&#39;m currently pursuing <b>B&#46;E&#46; in Computer Science</b> from <b>Thakur College of Engineering and technology</b>&#46; My areas of interest include <b>Front-End web development</b> and <b>Data Science</b>&#46;Currently working on mini-projects from these 2 domains and looking forward to build a <b>career</b> in these two respectively&#46;To view my resume please click the button below&#46;</p>
           <div className="resume-button">
            <Link href="https://drive.google.com/file/d/1cgAr9Khcd9rTNdDN4H0n-VRB9rhvb03e/view?usp=sharing">
            <button>
              Download Resume
            </button>
            </Link>
           </div>
          </div>
        </div>
      </section>
      {/* About me section ends here */}

      {/* Skills section begins here */}

      <section className="skills-section" id='skills'>
        <div className="main-skills-container">
          <div className="skills-left-section">
            <div className="diagonal-heading">
            <h1>Skills</h1>
            </div>
            <p>
              I&#39;m keen in <b>Front-End development &</b>
              <b> HTML&#44;CSS & JS</b> is a must&#46;I have developed basics projects using all these
              3 technologies to sharpen my basics&#46;Next in line comes <b>advanced frameworks </b>
              which I&#39;m working
              with <b>React&#46;Js and Next&#46;Js</b> which ease out the development process&#46;
            </p>
            <p>
              My another area of interest is <b>Data Analytics</b> so for next set of skills&#44;
              <b>Python</b> is must&#46;I have learnt python from <b>Basics to an Intermediate</b> level
              The other important skills which I am currently learning for data analytics is <b>Excel,
              MicrosoftPowerBI and MySql</b> .Since as a data analyst it is very important to work with data
              hence these 3 technologies becomes a must in this field.
            </p>
            <p className="bar-besides">
              Click the below button to toggle between <b>ProgressBar View</b> and <b>CardView</b>
            </p>
            <div className="resume-button" onClick={handleClick}>
            <button>
            {click ? ("CardView") : ("ProgressBar")}
            </button>
           </div>
          </div>
          <div className="skills-right-section">
            {click ? (<HorizontalProgress/>) : (<SkillsCard/>)}
          </div>
        </div>
      </section>
      {/* About me section ends here */}

      {/* Education section begins here */}
      <section className="education-timeline-section" id='education'>
      <div className="diagonal-heading">
          <h1>Education</h1>
      </div>
      <Timeline/>
      </section>

      {/* Education section ends here */}

      {/* Project section begins here */}
      <section className="project-section" id='projects'>
        <div className="main-project-container">
          <div className="diagonal-heading">
          <h1>Projects</h1>
          </div>
          <div className="project-cards-container">
          <ProjectCard gitlink="https://drive.google.com/drive/folders/1aPeQI6e1dheHh7Yr2lBPgdre4nwiPekc?usp=sharing" image="/images/snake_new.jpg" project_logo="/images/snake-logo-trim.jpg" project_title="Snake Frenzy" paragraph={para1} hashtags={hash1}/>
          <ProjectCard gitlink="https://github.com/kartikgx13/bookcafe" image="/images/book_new.jpg" project_logo="/images/book_logo_crop.jpg" project_title="Book Cafe" paragraph={para2} hashtags={hash2}/>
          <ProjectCard gitlink="https://github.com/kartikgx13/Expenses" image="/images/cashify_new.jpg" project_logo="/images/cashify_logo.png" project_title="Cashify" paragraph={para3} hashtags={hash3}/>
          </div>
          <div className="project-ending-line">
            <h2>Many more projects coming soon!!!</h2>
          <div>
          <Image
              width={35}
              height={35}
              src="/images/rocket.png"
              alt="my-image"
          />
          <Image
              width={35}
              height={35}
              src="/images/rocket.png"
              alt="my-image"
          />
          <Image
              width={35}
              height={35}
              src="/images/rocket.png"
              alt="my-image"
          />
          </div>
          </div>
        </div>
      </section>
      {/* Project section ends here */}
    </>
  )
}
