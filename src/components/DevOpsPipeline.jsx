import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Box,
  Cloud,
  Code2,
  GitBranch,
  Rocket,
  Server,
} from "lucide-react";

const pipelineSteps = [
  {
    number: "01",
    title: "Source",
    tool: "Git / GitHub",
    description: "Version-controlled application and infrastructure code.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Build",
    tool: "CI/CD",
    description: "Automated validation, builds, and repeatable workflows.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Containerize",
    tool: "Docker",
    description: "Package applications into portable production containers.",
    icon: Box,
  },
  {
    number: "04",
    title: "Deploy",
    tool: "Kubernetes / Argo CD",
    description: "Orchestrate workloads and deliver changes through GitOps.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Infrastructure",
    tool: "AWS / Terraform",
    description: "Provision and manage cloud infrastructure as code.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Observe",
    tool: "Prometheus / Grafana",
    description: "Collect metrics and visualize system health.",
    icon: Activity,
  },
];

function DevOpsPipeline() {
  return (
    <section id="pipeline" className="section pipeline-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mono">
            03 / WORKFLOW
          </span>

          <h2>
            From <span className="gradient-text">commit</span> to
            production
          </h2>

          <p>
            A production-minded workflow connecting development, automation,
            infrastructure, deployment, and observability.
          </p>
        </motion.div>

        <div className="pipeline">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === pipelineSteps.length - 1;

            return (
              <div className="pipeline-item" key={step.number}>
                <motion.div
                  className="pipeline-card glass-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="pipeline-card-top">
                    <span className="pipeline-number mono">
                      {step.number}
                    </span>

                    <div className="pipeline-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <span className="pipeline-tool mono">
                    {step.tool}
                  </span>

                  <p>{step.description}</p>
                </motion.div>

                {!isLast && (
                  <div className="pipeline-connector">
                    <span />
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          className="pipeline-footer glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="pipeline-footer-icon">
            <Server size={19} />
          </div>

          <div>
            <strong>Infrastructure mindset</strong>
            <p>
              Automate what can be automated, version what can be versioned,
              monitor what matters, and keep deployments reproducible.
            </p>
          </div>

          <span className="pipeline-live mono">
            ● AUTOMATED
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default DevOpsPipeline;