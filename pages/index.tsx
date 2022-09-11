import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Project from '../components/home/Project'
import Service from '../components/home/service'
import StartProject from '../components/home/StartProject'
import Testimonials from '../components/home/testimonials'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>VironeTech</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar />
      <Hero />
      <Service />
      <Project />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9F9" fillOpacity="0.81" d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <Testimonials />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9F9" fill-opacity="0.81" d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <StartProject />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
