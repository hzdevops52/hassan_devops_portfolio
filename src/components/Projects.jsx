import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mono">
            04 / PROJECTS
          </span>

          <h2>
            Systems I’ve{" "}
            <span className="gradient-text">built and deployed</span>
          </h2>

          <p>
            Hands-on projects demonstrating containerization, Kubernetes,
            CI/CD, cloud infrastructure, GitOps, and observability.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="projects-footer-content">
            <FolderGit2 size={19} />

            <span>
              More infrastructure experiments and automation work are
              available on GitHub.
            </span>
          </div>

          <a
            href="https://github.com/hzdevops52"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;