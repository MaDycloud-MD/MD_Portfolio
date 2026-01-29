import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

export default function Certifications() {
  const fade = useScrollFadeIn();
  const certs = [
    {
      name: "Oracle Fusion Cloud Applications ERP Certified Foundations Associate",
      logo: "/certified_logos/OMBPERPCFA1.png",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=63A9C307421DA9E029F6439932D082379FF624B815214AB311EB6F4FBFA2754D",
    },
    {
      name: "Oracle Fusion Cloud Applications CX Certified Foundations Associate",
      logo: "/certified_logos/OMBPCXCFA1.png",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D123AB165397D80B055C0277A5ACC5CBD0DB432D050DC324AB26E2DD058AD2E7",
    },
    {
      name: "Oracle Fusion Cloud Applications SCM Certified Foundations Associate",
      logo: "/certified_logos/OMBPSCMCFA1.png",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B6DB4FCE8EB45465222C782AE0A9B5D38C372BD4757DB6F3E8248E2C475BE885",
    },
    {
      name: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate",
      logo: "/certified_logos/OMBPHCMCFA1.png",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D5B5689ACFCB6631F44DE9619D938A1128C91F799853ED6BFAACA86A842A417A",
    },
    {
      name: "Diploma in Office Automation",
      logo: "/certified_logos/DOA.jpg",
      url: "https://drive.google.com/file/d/14-ZVIGmb0FwR24SSacIve5zVnQ9j9dhy/view?usp=sharing",
    },
    {
      name: "AWS Certified Cloud Practitioner (in-progress)",
      logo: "/logos/aws.svg",
      url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    },
  ];

  return (
    <section id="certifications" className="py-20 scroll-mt-24" >
      <h2 className="text-3xl font-bold mb-10 ">Certifications and Courses</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center" >
        {certs.map((cert, i) => (
          <a
            key={i}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition bg-white/80 dark:bg-white/10 backdrop-blur max-w-sm"
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-snug">
              {cert.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
