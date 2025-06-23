import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

export default function Experience() {
  const fade = useScrollFadeIn();
  const experiences = [
    {
      role: "Junior Cloud Engineer Intern – Eyesec Cybersecurity",
      duration: "Mar 2023 – Jun 2023",
      points: [
        "Problem: For a customer in the Farm House Goods industry, a scalable cloud infrastructure was required to support SaaS apps and improve online sales.",
        "Action: After examining more than fifty use cases with the Team lead, a customised cloud architecture was created to streamline sales procedures.",
        "Results: Implemented a strong SaaS infrastructure that raised revenue by 40% in the first quarter after deployment and sales by 6.33% in six months.",
        "Day to Day tasks: Set up and monitoring AWS services for SaaS deployment, such as load balancers, EC2, ECS, and S3.",
      ],
    },
    {
      role: "Trainee – BSNL",
      duration: "Sept 2022 – Oct 2022",
      points: [
        "Issue: It was necessary to maintain a dependable networking backbone and streamlining sales operations.",
        "Action: Participated in Networking Server management and received training in fundamental network systems, such as switches, routers, and FTTH. Assisted in putting in place a CRM system to cut down on manual labour in sales processes.",
        "Outcome: A 5% increase in operational efficiency due to a 10% reduction in administrative workload and improved sales team focus.",
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
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
