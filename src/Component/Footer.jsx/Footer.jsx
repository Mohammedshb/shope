
import React from 'react'
import logo from '../../assets/shopee.png'
import paymethod from '../../assets/images.jpg'
import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-white pt-32">
      {/* ===== Top Footer ===== */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 pb-24">

          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <a href="#">
              <img
                src={logo}
                alt="Shop Logo"
                className="h-[42px] w-auto object-contain"
              />
            </a>

            <p className="text-sm leading-6 text-[#1e2832]/80 max-w-[380px]">
              Shop Store 2025 — Front-end project built with React.js & Tailwind
              CSS, featuring a modern and clean design.
            </p>

            <div className="flex items-center gap-4">
              {[FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-[#1e2832] hover:text-[#ff6f61] transition"
                  >
                    <Icon size="1.25rem" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column */}
          {[
            {
              title: 'Catalog',
              links: ['Accessorise', 'Hoodies', 'Shoes', 'T-Shirt', 'Watches'],
            },
            {
              title: 'About Us',
              links: ['Our Producers', 'Sitemap', 'FAQ', 'About Us', 'Terms & Conditions'],
            },
            {
              title: 'Customer Services',
              links: [
                'Contact Us',
                'Track Your Order',
                'Product Care & Repair',
                'Book an Appointment',
                'Shipping & Returns',
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wide text-black">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm text-[#1e2832]/80 hover:text-[#ff6f61] transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Bottom Footer ===== */}
      <div className="bg-[#1e2832]">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white">
            &copy; {year} All rights reserved.
          </p>

          <img
            src={paymethod}
            alt="Payment Methods"
            className="h-8 object-contain"
          />

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            className="flex items-center gap-2 rounded-md bg-[#ff6f61] px-4 py-2 text-sm text-white hover:bg-[#ff5a4c] transition"
          >
            Scroll to top <FaArrowUp size="0.9rem" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
