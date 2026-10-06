import "./services.css";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Cloud,
  Container,
  GitBranch,
  Layers3,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    number: "01",
    title: "AWS Infrastructure",
    description:
      "Design and configure practical AWS infrastructure for applications, including compute, networking, storage, IAM, and DNS.",
    technologies: ["EC2", "VPC", "IAM", "S3", "EBS", "Route 53"],
  },
  {
    icon: Container,
    number: "02",
    title: "Docker & Containerization",
    description:
      "Containerize applications with reproducible Docker environments and production-oriented image and runtime configurations.",
    technologies: ["Docker", "Docker Compose", "Nginx", "GHCR"],
  },
  {
    icon: Server,
    number: "03",
    title: "Kubernetes",
    description:
      "Deploy and manage containerized workloads on Kubernetes with structured configurations, services, scaling, and application delivery.",
    technologies: ["Kubernetes", "Helm", "Minikube", "Kind"],
  },
  {
    icon: GitBranch,
    number: "04",
    title: "CI/CD Automation",
    description:
      "Build automated delivery workflows that validate, build, package, and deploy applications consistently.",
    technologies: ["GitHub Actions", "Jenkins", "GitLab CI/CD"],
  },
  {
    icon: Layers3,
    number: "05",
    title: "GitOps & Infrastructure as Code",
    description:
      "Manage infrastructure and Kubernetes delivery through version-controlled configurations and declarative automation.",
    technologies: ["Argo CD", "Terraform", "Helm", "Git"],
  },
  {
    icon: Activity,
    number: "06",
    title: "Monitoring & Observability",
    description:
      "Set up practical monitoring dashboards and metrics collection to improve application and infrastructure visibility.",
    technologies: ["Prometheus", "Grafana", "Metrics", "Alerting"],
  },
];

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          className="section-heading services-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow mono">03 / SERVICES</span>

          <h2>
            DevOps support built for{" "}
            <span className="gradient-text">reliable delivery.</span>
          </h2>

          <p>
            I help developers and teams improve the way applications are
            built, deployed, automated, and monitored — from infrastructure
            setup to production-oriented delivery workflows.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className="service-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
              >
                <div className="service-card-top">
                  <span className="service-number mono">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-technologies">
                  {service.technologies.map((technology) => (
                    <span key={technology} className="tech-pill mono">
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="services-cta glass-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <span className="section-eyebrow mono">
              HAVE A DEPLOYMENT CHALLENGE?
            </span>

            <h3>Let's build a reliable DevOps workflow.</h3>

            <p>
              Tell me what you are deploying, where it needs to run, and what
              you want to automate.
            </p>
          </div>

          <a href="#contact" className="primary-button">
            Let's Work Together
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;