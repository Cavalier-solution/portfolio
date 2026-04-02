import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce with real-time inventory, payment integration, and admin dashboard.',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management with real-time updates and drag-and-drop boards.',
    image: '/project-taskapp.jpg',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot with NLP and sentiment analysis for customer support.',
    image: '/project-aichat.jpg',
    tags: ['React', 'Python', 'FastAPI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Finance Dashboard',
    description: 'Real-time financial dashboard with data visualization and automated reporting.',
    image: '/project-finance.jpg',
    tags: ['React', 'D3.js', 'Node.js', 'AWS'],
    github: '#',
    live: '#',
  },
  {
    title: 'HealthTrack SaaS',
    description: 'Patient management platform for clinics with appointment scheduling and telemedicine.',
    image: '/project-health.jpg',
    tags: ['React', 'Go', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real Estate Portal',
    description: 'Property listing platform with map search, virtual tours, and mortgage calculator.',
    image: '/project-realestate.jpg',
    tags: ['Next.js', 'Node.js', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard tracking engagement, reach, and growth across platforms.',
    image: '/project-social.jpg',
    tags: ['React', 'Python', 'GraphQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Logistics Tracker',
    description: 'Fleet and shipment tracking system with real-time GPS and route optimization.',
    image: '/project-logistics.jpg',
    tags: ['React', 'Node.js', 'Docker', 'K8s'],
    github: '#',
    live: '#',
  },
  {
    title: 'EdTech Platform',
    description: 'Online learning platform with video courses, quizzes, and progress tracking.',
    image: '/project-education.jpg',
    tags: ['Next.js', 'TypeScript', 'AWS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Food Delivery App',
    description: 'Restaurant ordering system with real-time order tracking and driver management.',
    image: '/project-food.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'CRM System',
    description: 'Customer relationship management with pipeline tracking and email automation.',
    image: '/project-crm.jpg',
    tags: ['React', 'Python', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'IoT Dashboard',
    description: 'Real-time sensor monitoring dashboard with alerts and historical data analysis.',
    image: '/project-iot.jpg',
    tags: ['React', 'Go', 'InfluxDB', 'MQTT'],
    github: '#',
    live: '#',
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
