import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const fade = useScrollFadeIn();

  return (
    <section id="contact" {...fade} className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md max-w-6xl space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Have a Opportunity, project, collaboration idea, or just want to connect?
        </p>

        <div className="space-y-4 text-gray-800 dark:text-gray-200 text-base">
          <div className="flex items-center gap-3">
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
          </div>

          {/* <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary" />
            <span>
              <strong>Phone:</strong> +91-XXXXX53502
            </span>
          </div> */}

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary" />
            <span>
              <strong>Location:</strong> Belagavi, Karnataka, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
