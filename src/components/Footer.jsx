import { ArrowUp, Github, Terminal } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="footer-brand">
            <span className="footer-brand-icon">
              <Terminal size={16} />
            </span>

            <span className="mono">
              HZ<span className="footer-cursor">_</span>
            </span>
          </a>

          <p className="footer-tagline">
            Engineering infrastructure. Automating delivery.
          </p>

          <div className="footer-actions">
            <a
              href="https://github.com/hzdevops52"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-social"
            >
              <Github size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="footer-social"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="mono">
            © {currentYear} Hassan Zubair
          </span>

          <span className="footer-status mono">
            <span className="footer-status-dot" />
            SYSTEM ONLINE
          </span>

          <span className="mono">
            Built with React + DevOps
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;