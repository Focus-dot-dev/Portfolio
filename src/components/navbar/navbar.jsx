'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Contact from '../contact/contact'
import "./navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">
              F<span className="text-orange-500">I</span>T
            </h1>
            <h6 className="text-sm ml-2 text-gray-600">Focus-In-Tech</h6>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">About Me</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Skills</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Resume</a>
            <Contact />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50">About Me</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50">Skills</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50">Resume</a>
            <div className="px-3 py-2">
              <Contact />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar