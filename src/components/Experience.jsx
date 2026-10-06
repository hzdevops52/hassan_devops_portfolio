import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Terminal,
} from "lucide-react";

const experiences = [
  {
    period: "2026",
    title: "DevOps Intern",
    organization: "Mise Academy",
    type: "Internship",
    description:
      "Worked on DevOps automation for a MERN e-commerce application, covering containerization, Kubernetes, CI/CD, AWS infrastructure, Terraform, and monitoring.",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    period: "2026",
    title: "DevOps Project Work",
    organization: "Progree",
    type: "Internship Project",
    description:
      "Worked on deployment and automation tasks for a modern web application, focusing on containerized services, development environments, and practical DevOps workflows.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Node.js",
      "MongoDB",
      "Git",
      "CI/CD",
    ],
  },
  {
    period: "2026",
    title: "BS Information Technology",
    organization: "University of Okara",
    type: "Education",
    description:
      "Completed a Bachelor of Science in Information Technology with hands-on development, infrastructure, cloud, containerization, and DevOps project work.",
    technologies: [
      "Linux",
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mono">
            05 / EXPERIENCE
          </span>

          <h2>
            Building experience through{" "}
            <span className="gradient-text">real projects</span>
          </h2>

          <p>
            Practical engineering experience developed through internships,
            academic work, and hands-on infrastructure projects.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => {
            const isEducation = experience.type === "Education";

            return (
              <motion.article
                key={`${experience.organization}-${experience.title}`}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="experience-marker">
                  {isEducation ? (
                    <GraduationCap size={17} />
                  ) : (
                    <BriefcaseBusiness size={17} />
                  )}
                </div>

                <div className="experience-card glass-card">
                  <div className="experience-card-top">
                    <span className="experience-period mono">
                      {experience.period}
                    </span>

                    <span className="experience-type mono">
                      {experience.type}
                    </span>
                  </div>

                  <div className="experience-title-row">
                    <div>
                      <h3>{experience.title}</h3>
                      <p className="experience-organization">
                        {experience.organization}
                      </p>
                    </div>

                    <Terminal size={19} />
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-tech">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="experience-tech-tag mono"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="experience-note glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono">$ cat mindset.txt</span>

          <p>
            I treat every project as an opportunity to improve automation,
            reproducibility, reliability, and operational understanding.
          </p>

          <a
            href="https://github.com/hzdevops52"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Explore my work
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;