import React, { useState } from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

const categories = ["All", "Programming", "DevOps", "Databases", "Tools & Platforms"];

const skillGroups = [
  {
    category: "Programming",
    title: "Programming Languages",
    items: [
      { label: "Java", logo: "/logos/java.svg" },
      { label: "Python", logo: "/logos/python.svg" },
      { label: "C", logo: "/logos/c.svg" },
    ],
  },
  {
    category: "DevOps",
    title: "DevOps & Cloud",
    items: [
      { label: "AWS", logo: "/logos/aws.svg" },
      { label: "Azure", logo: "/logos/azure.svg" },
      { label: "Docker", logo: "/logos/docker.svg" },
      { label: "Kubernetes", logo: "/logos/kubernetes.svg" },
      { label: "Terraform", logo: "/logos/terraform.svg" },
      { label: "Jenkins", logo: "/logos/jenkins.svg" },
      { label: "GitHub Actions", logo: "/logos/github-actions.svg" },
      { label: "ArgoCD", logo: "/logos/argocd.svg" },
      { label: "Prometheus", logo: "/logos/prometheus.svg" },
      { label: "Grafana", logo: "/logos/grafana.svg" },
      { label: "Helm", logo: "/logos/helm.svg" },
      { label: "Ansible", logo: "/logos/ansible.svg" },
      { label: "Nginx", logo: "/logos/nginx.svg" },
      { label: "Apache", logo: "/logos/apache.svg" },

    ],
  },
  {
    category: "Databases",
    title: "Databases",
    items: [
      { label: "MySQL", logo: "/logos/mysql.svg" },
      { label: "MongoDB", logo: "/logos/mongodb.svg" },

      
    ],
  },
  {
    category: "Tools & Platforms",
    title: "Tools & Platforms",
    items: [
      { label: "Git", logo: "/logos/git.svg" },
      { label: "GitHub", logo: "/logos/github.svg" },
      { label: "Vim", logo: "/logos/vim.svg" },
      { label: "Nano", logo: "/logos/nano.svg" },
      { label: "Visual Studio Code", logo: "/logos/visual-studio-code.svg" },
      { label: "Jira", logo: "/logos/jira.svg" },
      { label: "Linux", logo: "/logos/linux.svg" },
      { label: "Unix", logo: "/logos/unix.svg" },
      { label: "Windows", logo: "/logos/windows-11.svg" },
    ],
  },
];

export default function Skills() {
  const fade = useScrollFadeIn();
  const [filter, setFilter] = useState("All");

  const filteredGroups =
    filter === "All"
      ? skillGroups
      : skillGroups.filter((group) => group.category === filter);

  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 ">Skills & Technologies</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3  mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border ${
              filter === cat
                ? "bg-primary text-black"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            } transition hover:scale-105`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div {...fade} className="space-y-10">
        {filteredGroups.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-300 dark:border-gray-600">
              {group.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
              {group.items.map(({ logo, label }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group hover:scale-110 transition-transform duration-200 relative"
                >
                  <img
                    src={logo}
                    alt={label}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-md whitespace-nowrap z-10">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
