import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io"
import { FaPencil, FaFlag, FaLaptop, FaBriefcase } from "react-icons/fa6"
import { IoCodeSlash } from "react-icons/io5"
import { GiCarWheel } from "react-icons/gi"
import Navbar from '../../components/navbar/navbar'
import { Bounce, Fade } from 'react-awesome-reveal'

const Portfolio = () => {
  

  // Function to handle CV download
  const handleDownloadCV = async () => {
    try {
      const cvUrl = '/Focus_CV.pdf'
      const response = await fetch(cvUrl)
      const blob = await response.blob()
      const file = new Blob([blob], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(file)
      const link = document.createElement('a')
      link.href = fileURL
      link.download = 'Focus_CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(fileURL)
    } catch (error) {
      console.error('Error downloading CV:', error)
      alert('There was an error downloading the CV. Please try again.')
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
     <Navbar/>
      <section className="hero-section relative h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 text-center text-white'>
          <Bounce duration={4000}>
            <Fade duration={2000}>
              <div className='mb-6'>
                <img src="/assets/me.JPG" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
              </div>
            </Fade>
          </Bounce>
          <h4 className="text-lg mb-2">Hello there, and welcome. My name is</h4>
          <Bounce duration={5000}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Focus</h1>
          </Bounce>
          <h4 className="text-lg mb-6">I am a Creative Fullstack Developer <br /> and Freelancer</h4>
          <a href="#about" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">Know More</a>
        </div>
      </section>
      
      <section id="about" className='py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-800'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <img src="/assets/me.JPG" alt="About Me" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className='md:w-1/2 md:pl-8'>
            <div className='grid grid-cols-2 gap-4 mb-6'>
              {['HTML', 'CSS', 'JavaScript', 'NODE.js', 'MySQL', 'Next.js'].map((skill) => (
                <div key={skill} className='flex flex-col'>
                  <h6 className="font-semibold">{skill}</h6>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <IoIosStar key={i} className="text-orange-500" size={16} />
                    ))}
                    {[...Array(1)].map((_, i) => (
                      <IoIosStarHalf key={i} className="text-orange-500" size={16} />
                    ))}
                    {[...Array(1)].map((_, i) => (
                      <IoIosStarOutline key={i} className="text-orange-500" size={16} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={handleDownloadCV}
              className='bg-gray-900 dark:bg-gray-700 text-orange-400 px-6 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>
      
      <section className='bg-gray-100 dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='flex justify-center items-center mb-4'>
              <div className='w-12 h-1 bg-orange-500 mr-4'></div>
              <h5 className="text-lg font-semibold">MY SERVICES</h5>
            </div>
            <h3 className="text-3xl font-bold">What I Can Do</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { icon: <FaPencil className="text-orange-500" size={24} />, title: 'Creative Design' },
              { icon: <FaFlag className="text-orange-500" size={24} />, title: 'Branding' },
              { icon: <FaLaptop className="text-orange-500" size={24} />, title: 'Interface' },
              { icon: <FaBriefcase className="text-orange-500" size={24} />, title: 'User Experience' },
              { icon: <IoCodeSlash className="text-orange-500" size={24} />, title: 'Clean code' },
              { icon: <GiCarWheel className="text-orange-500" size={24} />, title: 'Fast Support' }
            ].map((service, index) => (
              <div key={index} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
                <div className='mb-4'>{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corrupti animi excepturi, officiis</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Portfolio