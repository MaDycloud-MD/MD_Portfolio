import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

export default function Experience() {
  const fade = useScrollFadeIn();
  const experiences = [
    {
      role: "Junior Cloud Engineer Intern – Eyesec Cybersecurity Solution Pvt.Ltd",
      duration: "Mar 2023 – Jun 2023",
      points: [
        "Assisted in architecting and implementing a scalable cloud-based SaaS solution on AWS for a Farm House Goods client, analyzing 50+ use cases to optimize the architecture, resulting in a 40% revenue increase in Q1 and a 6.33% sales boost over six months.",
        "Configured and monitored AWS services, including EC2, ECS, S3, and load balancers to ensure high availability, performance, and cost-efficiency of SaaS applications."      
      ],
    },
    {
      role: "Internship – BSNL",
      duration: "Sept 2022 – Oct 2022",
      points: [
        "Supported network infrastructure management by working with routers, switches, and FTTH systems, ensuring a reliable networking backbone and enhancing system stability.",
        "Assisted in CRM implementation to automate sales workflows, reducing administrative workload by 10% and improving operational efficiency by 5% through better sales team focus. ",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12" >
      <h2 className="text-3xl text-center font-bold mb-6">Experience</h2>
      <div className="grid md:grid-cols-1 gap-6" >
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-card rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-1 text-primary">{exp.role}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
            <ul className="list-disc pl-3 mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              {exp.points.map((point, i) => (
                <li key={i} className='pl-2'>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
