import React, { useState } from 'react';
// import useScrollFadeIn from '../utils/useScrollFadeIn';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Projects() {
  // const fade = useScrollFadeIn();
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "Strapi Headless CMS Deployment on AWS",
      github: "https://github.com/MaDycloud-MD/my-strapi-project-aws-deploy.git",
      youtube: "https://youtu.be/zRJaCDK8b3g?si=gQi6vL4hyv4oDJ6y",
      details: [

        "Designed and deployed Strapi Headless CMS on AWS ECS (Fargate) using Docker and PostgreSQL (RDS), improving scalability and automation.",
        "Implemented Infrastructure as Code (IaC) with Terraform to provision ECS clusters, task definitions, networking, and secure RDS configurations.",
        "Troubleshot and resolved critical deployment issues (Docker multi-stage builds, SSL & pg_hba.conf errors, secret management), ensuring production-grade reliability."      
      ],
      techStack: [

        { name: "AWS", logo: "/logos/aws.svg"},
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "Terraform", logo: "/logos/terraform.svg"},
      ]
    },
    
    {
      title: "City Wellness: AI-Powered Waste Reporting System",
      github: "https://github.com/MaDycloud-MD/SmartCitywellness.git",
      details: [
        "Developed a full-stack AI-powered waste management platform using Tensorflow (92% accurate CNN classifier), enabling real-time voice, image, and GPS reporting, projected to increase citizen participation by 70% and reduce overflow waste incidents by 55%",
        "Architected a cloud-native deployment model using AWS (EC2, ASG, ELB, Route 53) with CI/CD pipelines, which reduced deployment effort by 80%, increased uptime to 99.95%, and improved overall system reliability."
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
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "GitHub Actions", logo: "/logos/github-actions.svg"},
        { name: "Git", logo: "/logos/git.svg"}
      ]
    },
    {
      title: "Netflix Clone with DevSecOps",
      github: "https://github.com/MaDycloud-MD/Netflix_DevSecOps_Project.git",
      details: [
        "Automated CI/CD pipeline using Jenkins, integrating Trivy and SonarQube for security scans, and standardized Docker image builds with Docker Hub—resulting in 60% faster deployments and 20% reduced AWS operating costs.",
        "Deployed containerized services to AWS EKS with Helm and ArgoCD (99.9% uptime), implemented Prometheus-Grafana monitoring to cut incident response time by 50%, and improved failure visibility by 30% via SMTP alerting",
      ],
      techStack: [
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "Terraform", logo: "/logos/terraform.svg"},
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
          "Action: Designed and developed a cloud-based book review system enabling users to register, browse books, post ratings, and write detailed reviews.",
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
    
    <section id="projects" className="py-20 scroll-mt-26" >
      <h2 className="text-3xl font-bold mb-10 ">Projects</h2>

      <div className="space-y-6">
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
                <ul className="mt-5 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 text-justify">
                  {proj.details.map((d, j) => (
                    <li key={j} className='pl-2 '>{d}</li>
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
                {(proj.live || proj.github || proj.youtube) && (
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

                    {proj.youtube && (
                      <a
                        href={proj.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full 
                                  bg-red-400 text-white font-medium shadow hover:shadow-lg hover:bg-red-700 
                                  transition-all duration-300"
                      >
                        <img
                          src="/logos/youtube3.svg"
                          alt="YouTube"
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        Watch on YouTube
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