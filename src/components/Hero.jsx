import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

const floatingNodes = [
  { label: "CODE", x: "5%", y: "18%", delay: 0 },
  { label: "BUILD", x: "8%", y: "72%", delay: 0.4 },
  { label: "DEPLOY", x: "78%", y: "12%", delay: 0.8 },
  { label: "MONITOR", x: "82%", y: "76%", delay: 1.2 },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">
        {/* LEFT — INTRODUCTION */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-status">
            <span className="hero-status-dot" />
            Available for DevOps opportunities
          </div>

          <p className="hero-kicker mono">
            &gt; whoami
          </p>

          <h1 className="hero-title">
            Hassan
            <span className="gradient-text"> Zubair</span>
          </h1>

          <h2 className="hero-role">
            DevOps Engineer
          </h2>

          <p className="hero-description">
            I build, automate, deploy, and monitor modern application
            infrastructure using containers, Kubernetes, CI/CD, cloud
            technologies, GitOps, and observability tools.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowRight size={17} />
            </a>

            <a
              href="https://github.com/hzdevops52"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>

          <div className="hero-stack">
            <span>
              <Server size={15} />
              Infrastructure
            </span>

            <span>
              <Workflow size={15} />
              CI/CD
            </span>

            <span>
              <Terminal size={15} />
              Automation
            </span>
          </div>
        </motion.div>

        {/* RIGHT — FUTURISTIC PROFILE VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          {/* Profile image */}
          <motion.div
            className="hero-profile"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero-profile-ring" />

            <div className="hero-profile-image">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.jpeg`}
                alt="Hassan Zubair — DevOps Engineer"
              />
            </div>

            <div className="hero-profile-scan" />
          </motion.div>

          {/* DevOps floating nodes */}
          <div className="hero-connection hero-connection-one" />
          <div className="hero-connection hero-connection-two" />
          <div className="hero-connection hero-connection-three" />
          <div className="hero-connection hero-connection-four" />

          {floatingNodes.map((node) => (
            <motion.div
              key={node.label}
              className="hero-node"
              style={{
                left: node.x,
                top: node.y,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            >
              <span className="hero-node-dot" />
              <span className="mono">{node.label}</span>
            </motion.div>
          ))}

          {/* DevOps terminal */}
          <div className="hero-terminal">
            <div className="hero-terminal-header">
              <span />
              <span />
              <span />

              <small className="mono">
                infrastructure.sh
              </small>
            </div>

            <div className="hero-terminal-body mono">
              <p>
                <span className="terminal-prompt">$</span>{" "}
                docker build .
              </p>

              <p>
                <span className="terminal-success">✓</span>{" "}
                image created
              </p>

              <p>
                <span className="terminal-prompt">$</span>{" "}
                kubectl apply -f deployment.yaml
              </p>

              <p>
                <span className="terminal-success">✓</span>{" "}
                deployment synced
              </p>

              <p>
                <span className="terminal-prompt">$</span>{" "}
                monitoring status
              </p>

              <p className="terminal-active">
                ● Prometheus / Grafana online
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>Explore</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

export default Hero;