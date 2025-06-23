import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

export default function Volunteering() {
  const fade = useScrollFadeIn();

  const roles = [
    {
      title: "Placement Coordinator",
      description: "Guided 100+ students with resume reviews, mock interviews, and placement training."
    },
    {
      title: "Cybersecurity Workshop Support",
      description: "Helped organize and manage a workshop attended by over 200+ students."
    },
    {
      title: "Event Organizer – Tech & Cultural Fests",
      description: "Led planning and logistics for college-wide events, managing other volunteers."
    }
  ];

  return (
    <section id="volunteering" className="py-16 scroll-mt-20" {...fade}>
      <h2 className="text-3xl font-bold mb-6">Volunteering</h2>
      <div className="space-y-6">
        {roles.map((role, i) => (
          <div key={i} className="glass-card p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur">
            <h3 className="text-lg font-semibold text-primary">{role.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
