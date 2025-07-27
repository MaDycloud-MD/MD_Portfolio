import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

export default function Education() {
  const fade = useScrollFadeIn();

  const education = [
    {
      degree: "Bachelor of Computer Applications [ BCA ]",
      institution: "Rani Channamma University, Karnataka.",
      score: "CGPA: 8.37",
      year: "2024 - 2027"
    },
    {
      degree: "Diploma in Computer Science and Engineering [ Cloud Computing ]",
      institution: "Jain Polytechnic | Department of Technical Education, Karnataka.",
      score: "CGPA: 9.52",
      year: "2020 - 2023"
    }
  ];

  return (
    <section id="education" className="py-12 scroll-mt-20" {...fade}>
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((item, i) => (
          <div key={i} className="glass-card p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur">
            <h3 className="text-lg font-semibold text-primary">{item.degree}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.score} • {item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
