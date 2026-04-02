import { motion } from 'framer-motion'
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi'
import './Education.css'

const educations = [
  {
    degree: 'B.S. Computer Science',
    school: 'National University of Singapore (NUS)',
    period: '2010 - 2014',
    description: 'Focused on algorithms, data structures, and software engineering. Final year project on distributed systems.',
  },
  {
    degree: 'M.S. Software Engineering',
    school: 'Nanyang Technological University (NTU)',
    period: '2014 - 2016',
    description: 'Research on microservices architecture and cloud computing. Published 2 papers at international conferences.',
  },
  {
    degree: 'Graduate Certificate in AI',
    school: 'Singapore Management University (SMU)',
    period: '2020 - 2021',
    description: 'Specialization in machine learning, deep learning, and NLP applied to digital products.',
  },
]

const certifications = [
  { name: 'AWS Solutions Architect - Associate', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2023' },
  { name: 'Meta Front-End Developer Certificate', issuer: 'Meta / Coursera', year: '2022' },
  { name: 'Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2023' },
]

function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background & certifications</p>
        </motion.div>

        <div className="education-layout">
          {/* Left: Timeline */}
          <div className="education-timeline">
            <h3 className="education-section-label">
              <FiBook /> Academic
            </h3>
            <div className="timeline">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <p className="timeline-school">{edu.school}</p>
                    <span className="timeline-period">
                      <FiCalendar /> {edu.period}
                    </span>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="education-certs">
            <h3 className="education-section-label">
              <FiAward /> Certifications
            </h3>
            <div className="certs-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="cert-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <div className="cert-icon"><FiAward /></div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
