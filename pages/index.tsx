import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import Technologies from '../components/home/Technologies'
import styles from '../styles/Home.module.scss'

const Navbar = dynamic(() => import('../components/navbar'))
const Hero = dynamic(() => import('../components/home/Hero'))
const Service = dynamic(() => import('../components/home/service'))
const Project = dynamic(() => import('../components/home/Project'))
const Testimonials = dynamic(() => import('../components/home/testimonials'))
const StartProject = dynamic(() => import('../components/home/StartProject'))
const Contact = dynamic(() => import('../components/home/Contact'))
const Footer = dynamic(() => import('../components/footer'))

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>VironeTech</title>
         {/* Global Site Tag (gtag.js) - Google Analytics */}
         <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-HS5F76HC4E`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HS5F76HC4E');
          `,
            }}
          />
        <meta name="description" content="Vironetech est une agence digitale spécialisée dans le développement et la création des sites internet e-commerce, vitrine, blog, le développement mobile, la refonte des maquettes et le design des applications." />
      </Head>

      <Navbar />
      <Hero />
      <Service />
      <Project />
      <Technologies />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9F9" fillOpacity="0.81" d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <Testimonials />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9F9" fillOpacity="0.81" d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <StartProject />
      <div className={styles.socialLinksContainer}>
        <div className={styles.socialLinks}>
          <Link href={'https://www.facebook.com/'}><a target='_blank'><FaFacebookF /></a></Link>
          <Link href={'/'}><a target='_blank'><BsLinkedin /></a></Link>
          <Link href={'/'}><a target='_blank'><BsInstagram /></a></Link>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
