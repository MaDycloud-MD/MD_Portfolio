import React, { useState } from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Projects() {
  const fade = useScrollFadeIn();
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "City Wellness – Smart Reporting and Monitoring System",
      github: "https://github.com/Tasneemgokak/SmartCitywellness.git",
      details: [
        "Issue: There were delays and unsanitary conditions as a result of the lack of real-time visibility, prioritisation, and citizen engagement in urban waste collection.",
        "Take action: Created a full-stack web application that increased citizen participation by 70% by enabling real-time reporting of waste issues with voice, image, and GPS support.",
        "Created and implemented a TensorFlow (CNN)-based AI-powered waste classifier that identified organic, metal, and glass waste types with 92% accuracy.",
        "Flask backend was integrated to provide real-time machine learning predictions, and it was linked to a Node.js API layer to facilitate smooth front-end communication.",
        "65% more efficient report management was achieved by implementing a role-based admin dashboard with Firebase Auth.",
        "40% waste collection route planning optimisation was achieved by enabling predictive analytics with MongoDB historical data.",
        "Improved user trust and transparency by introducing complaint escalation and feedback modules with before/after image comparison.",
        "As a result, automated routing and prioritisation decreased waste overflow incidents by 55% and eliminated the need for manual monitoring by 60%. The platform's near real-time response capabilities allowed it to process over 250 reports during the testing phase.",
      ],
      techStack: [
        { name: "HTML5", logo: "/logos/html5.svg" },
        { name: "CSS3", logo: "/logos/css3.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "React.js", logo: "/logos/react.svg" },
        { name: "Node.js", logo: "/logos/node.js.svg" },
        { name: "MongoDB", logo: "/logos/mongodb.svg" },
        { name: "Flask", logo: "/logos/flask.svg" },
        { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
        { name: "Keras", logo: "/logos/keras.svg" },
        { name: "Firebase", logo: "/logos/firebase.svg" },
      ]
    },
    {
      title: "Netflix Clone with DevSecOps",
      github: "",
      details: [
        "Problem: Manual deployments lacked consistency and security validation",
        "Action: Designed and automated a CI/CD pipeline using Jenkins, integrating SonarQube and Trivy for static and container security scanning.",
        "Deployed containerized services to AWS EKS using Helm and ArgoCD, achieving 99.9% uptime.",
        "Set up monitoring via Prometheus & Grafana, reducing incident response time by 50%.",
        "Automated Docker image builds and Docker Hub pushes to standardize releases.",
        "Implemented SMTP alerts for failure detection, increasing failure visibility by 30%. ",
        "Result: Reduced deployment time by 60% and optimized AWS infrastructure, cutting operational costs by 20%."
      ],
      techStack: [
        // Jenkins, SonarQube, Trivy, Docker, Kubernetes (EKS), Helm, ArgoCD, Prometheus, Grafana, AWS, SMTP, GitHub/GitLab CI
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
        { name: "Jenkins", logo: "/logos/jenkins.svg" },
        { name: "SonarQube", logo: "/logos/sonarqube.svg" },
        { name: "Trivy", logo: "/logos/trivy.svg" },
        { name: "Prometheus", logo: "/logos/prometheus.svg" },
        { name: "Grafana", logo: "/logos/grafana.svg" },
        { name: "ArgoCD", logo: "/logos/argocd.svg" },
        { name: "Helm", logo: "/logos/helm.svg" },
        { name: "SMTP", logo: "/logos/smtp.svg" },
        { name: "Git", logo: "/logos/git.svg" },
        { name: "GitHub", logo: "/logos/github1.svg" },
        
      ]
    },
    {
      title: "Face Recognition with AWS Rekognition",
      github: "https://github.com/MaDycloud-MD/Automated-Face-Recognition-System-Deployment-using-AWS-Rekognition.git",
      details: [
        "Problem: Existing facial recognition systems were not scalable or cloud-optimized.",
        "Action: Designed and deployed a secure architecture using AWS Rekognition, S3, Lambda, DynamoDB, and IAM.",
        "Engineered a high-accuracy model integrated with real-time image analysis and continuous learning workflows.",
        "Result: Improved recognition accuracy by 15%, reduced latency by 40%, and achieved 99.9% uptime.",
      ],
      techStack: [
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "AWS DynamoDB", logo: "/logos/dynamodb.svg" },
        { name: "AWS Lambda", logo: "/logos/lambda.svg" },
        { name: "AWS S3", logo: "/logos/s3.svg" },
        { name: "AWS IAM", logo: "/logos/iam.svg" },
        { name: "AWS Rekognition", logo: "/logos/rekognition.svg" },
      ]
    },

    {
      title: "2048 Game Docker Deployment",
      github: "https://github.com/MaDycloud-MD/2048_UsingDocker_AWS.git",
      details: [
        "Problem: Web app deployments were error-prone and environment-dependent.",
        "Action: Dockerized the game and deployed using AWS Elastic Beanstalk, enabling rapid, scalable hosting with container-based architecture.",
        "Configured Docker images and automated environment provisioning for seamless CI/CD integration.",
        "Result: Achieved 40% faster deployments, reduced manual provisioning by 50%, and maintained 99.8% uptime.",
      ],
      // Tech Stack: Docker, AWS Elastic Beanstalk, EC2, CI/CD (GitHub Actions/GitLab CI), YAML, CloudWatch, AWS CLI
      techStack: [
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "AWS EC2", logo: "/logos/ec2.svg" },
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "YAML", logo: "/logos/yaml.svg" },
      ]
    },
    {
        title: "Book Review System – Cloud-Based Web Platform",
        live: "https://madycloud-md.github.io/Book-Review-System/",
        github: "https://github.com/MaDycloud-MD/Book-Review-System.git",
        details: [
          "Problem: Traditional book recommendation platforms often lack community engagement, scalability, and personalized insights.",
          "Action:",
          "Designed and developed a cloud-based book review system enabling users to register, browse books, post ratings, and write detailed reviews.",
          "Built a searchable book database with review threads, allowing users to connect and share literary opinions in a centralized platform.",
          "Integrated user authentication and profile management using Firebase for secure, cloud-based account handling.",
          "Implemented social sharing features and interactive UI to foster community discussion and book recommendations.",
          "Deployed the application on GitHub Pages and utilized cloud storage for data handling, ensuring 24/7 availability and scalability.",
          "Result: Improved reader decision-making and increased engagement by creating a virtual space for 100+ early users to review, rate, and discuss books. System supports real-time feedback, helping authors gain exposure and readers build trusted recommendations."
        ],
        techStack: [
          { name: "HTML5", logo: "/logos/html5.svg" },
          { name: "CSS3", logo: "/logos/css3.svg" },
          { name: "JavaScript", logo: "/logos/javascript.svg" },
          { name: "Firebase", logo: "/logos/firebase.svg" },
          { name: "AWS", logo: "/logos/aws.svg" },
          { name: "GitHub Pages", logo: "/logos/github.svg" },
          
        ]
      }
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   return (
    <section id="projects" className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div {...fade} className="space-y-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white/70 dark:bg-white/10 backdrop-blur p-4 transition-all"
          >
            {/* Title and toggle */}
            <button
              onClick={() => toggleIndex(i)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-primary hover:underline"
            >
              {proj.title}
              {openIndex === i ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </button>

            {/* Opened description */}
            {openIndex === i && (
              <>
                <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300">
                  {proj.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

                {/* Tech Stack Logos */}
                {proj.techStack && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {proj.techStack.map((tech, k) => (
                      <div key={k} className="flex flex-col items-center text-center w-16">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-10 h-10 object-contain"
                          title={tech.name}
                        />
                        <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                {(proj.live || proj.github) && (
                  <div className="mt-6 flex gap-4 flex-wrap">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full 
                                  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium 
                                  shadow hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src="/logos/live.svg"
                          alt="Live"
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        Live Demo
                      </a>
                    )}

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-900 text-white font-medium shadow hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
                      >
                        <img
                          src="/logos/github2.svg"
                          alt="GitHub"
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}