import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-logo">
          {'<Dave Roberts />'}
        </a>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:dave@example.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Dave Roberts All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
