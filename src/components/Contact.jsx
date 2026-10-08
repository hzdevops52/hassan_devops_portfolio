import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquare,
} from "lucide-react";

const contactLinks = [
  {
    label: "WhatsApp",
    value: "+92 327 7495256",
    href: "https://wa.me/923277495256",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "github.com/hzdevops52",
    href: "https://github.com/hzdevops52",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hassan-zubair-50b53a31b",
    href: "https://www.linkedin.com/in/hassan-zubair-50b53a31b/",
    icon: Linkedin,
  },
  {
    label: "Taskpull",
    value: "taskpull.com/sellers/hassan-zubair",
    href: "https://taskpull.com/sellers/hassan-zubair",
    icon: BriefcaseBusiness,
  },
  {
    label: "Fiverr",
    value: "fiverr.com/hassanzubair52",
    href: "https://www.fiverr.com/hassanzubair52",
    icon: BriefcaseBusiness,
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-wrapper glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-glow" />

          <div className="contact-content">
            <span className="section-eyebrow mono">06 / CONTACT</span>

            <div className="contact-icon">
              <MessageSquare size={22} />
            </div>

            <h2>
              Let's build something{" "}
              <span className="gradient-text">reliable.</span>
            </h2>

            <p>
              Looking for a DevOps engineer for an opportunity, collaboration,
              or infrastructure project? I’d be happy to connect.
            </p>

            <a
              href="mailto:hzdevops52@gmail.com"
              className="primary-button contact-email"
            >
              <Mail size={17} />
              Send an Email
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-links">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className="contact-link-icon">
                    <Icon size={19} />
                  </div>

                  <div>
                    <span className="contact-link-label mono">
                      {link.label}
                    </span>

                    <strong>{link.value}</strong>
                  </div>

                  <ArrowUpRight
                    className="contact-link-arrow"
                    size={17}
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;