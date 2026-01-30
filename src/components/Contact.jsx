import React from 'react';
// import useScrollFadeIn from '../utils/useScrollFadeIn';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  // const fade = useScrollFadeIn();

  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md max-w-6xl space-y-4" >
        <p className="text-gray-700 dark:text-gray-300">
          Have a Opportunity, project, collaboration idea, or just want to connect?
        </p>

        <div className="space-y-4 text-gray-800 dark:text-gray-200 text-base">
          {/* <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary" />
            <span>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:md.shoaib.i.makandar@gmail.com"
                className="text-primary hover:underline"
              >
                md.shoaib.i.makandar@gmail.com
              </a>
            </span>
          </div> */}

          {/* <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary" />
            <span>
              <strong>Phone:</strong> +91-XXXXX53502
            </span>
          </div> */}

          <div className="flex items-center justify-center gap-3 text-xs">
            <a
              href="https://www.linkedin.com/in/myselfmd"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            > 
              <img
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="mt-1.5 text-center">LinkedIn</span> 
            </a>

            <a
              href="https://www.instagram.com/myself.md"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            > 
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="LinkedIn"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="mt-1.5 text-center">Instagram</span> 
            </a>

            <a
              href="https://t.me/myselfmd07"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            > 
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg'
                alt="LinkedIn"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="mt-1.5 text-center">Telegram</span> 
            </a>

            <a
                href="mailto:md.shoaib.i.makandar@gmail.com"
                className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="/logos/gmail.svg"
                  alt="Email"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="mt-1.5 text-center">Mail</span>
              </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-primary" />
            <span>
              <strong>Location:</strong> Belagavi, Karnataka, India.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
