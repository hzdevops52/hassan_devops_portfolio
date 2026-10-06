import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers3,
} from "lucide-react";

function ProjectCard({ project, index }) {
  const hasGithub = Boolean(project.github);

  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      whileHover={{ y: -7 }}
    >
      <div className="project-card-glow" />

      <div className="project-card-header">
        <div className="project-folder">
          <Layers3 size={20} />
        </div>

        <span className="project-type mono">
          {project.type}
        </span>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology} className="project-tech-tag mono">
              {technology}
            </span>
          ))}
        </div>

        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="project-highlight">
              <span className="project-highlight-dot" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        {hasGithub ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <Github size={16} />
            View Repository
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="project-link project-link-disabled">
            <ExternalLink size={16} />
            Project Details
          </span>
        )}

        <span className="project-index mono">
          0{index + 1}
        </span>
      </div>
    </motion.article>
  );
}

export default ProjectCard;