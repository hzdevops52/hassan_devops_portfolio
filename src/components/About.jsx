import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  GitBranch,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const focusAreas = [
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Designing and managing Linux-based infrastructure with cloud and container technologies.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Building repeatable CI/CD workflows that reduce manual deployment effort.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Working with AWS services and infrastructure concepts for scalable deployments.",
  },
  {
    icon: GitBranch,
    title: "GitOps",
    description:
      "Managing Kubernetes application delivery through version-controlled workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Applying monitoring, health checks, and deployment practices to improve reliability.",
  },
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Combining scripting and development knowledge with practical DevOps workflows.",
  },
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mono">
            01 / ABOUT
          </span>

          <h2>
            Engineering <span className="gradient-text">reliable systems</span>
          </h2>

          <p>
            I focus on the engineering layer between application code and
            production infrastructure.
          </p>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-content glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-terminal-line mono">
              <span className="terminal-prompt">$</span> cat about.txt
            </div>

            <p>
              I’m a DevOps Engineer focused on building, automating, deploying,
              and monitoring modern application environments.
            </p>

            <p>
              My work combines Linux, containers, Kubernetes, CI/CD, AWS,
              Infrastructure as Code, GitOps, and observability into practical
              deployment workflows.
            </p>

            <p>
              I enjoy taking an application from source code through
              containerization and automated delivery, then adding the
              monitoring and operational practices needed to keep it reliable.
            </p>

            <div className="about-stats">
              <div>
                <strong>CI/CD</strong>
                <span>Automation</span>
              </div>

              <div>
                <strong>K8s</strong>
                <span>Orchestration</span>
              </div>

              <div>
                <strong>AWS</strong>
                <span>Cloud</span>
              </div>

              <div>
                <strong>GitOps</strong>
                <span>Delivery</span>
              </div>
            </div>
          </motion.div>

          <div className="about-focus-grid">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  className="about-focus-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="about-focus-icon">
                    <Icon size={19} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;