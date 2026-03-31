import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logoDigiVibe from '../assets/logo-digivibe.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#101727] px-4 pb-8 pt-16 sm:px-8 lg:px-12 xl:px-16 xl:pb-10 xl:pt-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <img
              src={logoDigiVibe}
              alt="DigiTools"
              className="h-12 object-contain object-left brightness-0 invert mb-6"
              width={180}
              height={40}
            />
            <p className="mt-6 max-w-sm font-manrope text-base leading-relaxed text-white/80">
              Premium digital tools for creators, professionals, and businesses. Work
              smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="font-manrope text-xl font-medium leading-[1.4] text-white">Product</h3>
            <ul className="mt-6 flex flex-col gap-4 font-manrope text-base text-white/80">
              <li>
                <a
                  href="#features"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="font-manrope text-xl font-medium leading-[1.4] text-white">Company</h3>
            <ul className="mt-6 flex flex-col gap-4 font-manrope text-base text-white/80">
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="font-manrope text-xl font-medium leading-[1.4] text-white">Resources</h3>
            <ul className="mt-6 flex flex-col gap-4 font-manrope text-base text-white/80">
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="font-manrope text-xl font-medium leading-[1.4] text-white">Social Links</h3>
            <div className="mt-6 flex gap-3">
              <a
                href="https://twitter.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/25"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/25"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/25"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/20 pt-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-manrope text-base text-[#fafafa]/50">
              © 2026 DigiVibe. All rights reserved.
            </p>
            <p className="font-manrope text-base text-[#fafafa]/50">
              Privacy Policy &nbsp;&nbsp; Terms of Service &nbsp;&nbsp; Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
