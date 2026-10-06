import { motion } from "framer-motion";
import {
  Activity,
  Code2,
  Container,
  GitBranch,
  Server,
  Workflow,
} from "lucide-react";
import skills from "../data/skills";

const iconMap = {
  server: Server,
  container: Container,
  workflow: Workflow,
  gitops: GitBranch,
  activity: Activity,
  code: Code2,
};

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mono">
            02 / SKILLS
          </span>

          <h2>
            Tools that power my{" "}
            <span className="gradient-text">workflow</span>
          </h2>

          <p>
            A practical DevOps toolkit spanning infrastructure, automation,
            orchestration, cloud, GitOps, and observability.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;

            return (
              <motion.article
                key={skill.category}
                className="skill-card glass-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>

                  <span className="skill-index mono">
                    0{index + 1}
                  </span>
                </div>

                <h3>{skill.category}</h3>

                <div className="skill-tags">
                  {skill.technologies.map((technology) => (
                    <span key={technology} className="skill-tag mono">
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;