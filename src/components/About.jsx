import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const highlights = [
  {
    icon: <FiCode />,
    title: 'Clean Code',
    description: 'Writing maintainable, well-structured code that scales.',
  },
  {
    icon: <FiLayers />,
    title: 'Full Stack',
    description: 'End-to-end development from database to user interface.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency.',
  },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="photo-wrapper">
              <img src="/hero-photo.png" alt="Dave Roberts" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I'm an IT & Programming expert based in Singapore with extensive
              experience creating elegant solutions to complex problems.
              I specialize in building high-performance applications
              using modern technologies.
            </p>
            <p>
              I love collaborating with teams, mentoring junior developers,
              and contributing to open-source projects. When I'm not coding,
              you can find me at tech meetups in Singapore or exploring the
              developer community across Asia.
            </p>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
