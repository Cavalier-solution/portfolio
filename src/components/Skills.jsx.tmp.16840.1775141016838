import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiTypescript, SiJavascript,
  SiPython, SiPostgresql, SiMongodb, SiDocker,
  SiGit, SiTailwindcss, SiNextdotjs,
  SiRedis, SiGraphql, SiFirebase, SiLinux, SiNginx,
  SiFigma, SiJest, SiKubernetes, SiVite, SiGo, SiRust,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import './Skills.css'

const outerSkills = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB', desc: 'Building dynamic UIs with component-based architecture and hooks.' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', desc: 'Server-side JavaScript for scalable backend services and APIs.' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', desc: 'Type-safe development for robust and maintainable codebases.' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', desc: 'Core language for interactive web experiences and full-stack dev.' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB', desc: 'Data processing, automation, and machine learning solutions.' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', desc: 'Advanced relational database with complex query optimization.' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', desc: 'Flexible NoSQL database for rapid prototyping and scaling.' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', desc: 'Containerized deployments for consistent dev-to-prod workflows.' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', desc: 'Full-stack React framework with SSR and static generation.' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900', desc: 'Cloud infrastructure with EC2, Lambda, S3, and more.' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5', desc: 'Container orchestration for automated deployment and scaling.' },
  { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098', desc: 'Flexible API query language for efficient data fetching.' },
  { name: 'Nginx', icon: <SiNginx />, color: '#009639', desc: 'High-performance web server, reverse proxy, and load balancer.' },
  { name: 'Linux', icon: <SiLinux />, color: '#FCC624', desc: 'Server administration and shell scripting for production environments.' },
]

const innerSkills = [
  { name: 'Git', icon: <SiGit />, color: '#F05032', desc: 'Version control and collaborative development with branching strategies.' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', desc: 'Utility-first CSS for rapid, responsive UI development.' },
  { name: 'Redis', icon: <SiRedis />, color: '#DC382D', desc: 'In-memory data store for caching, queues, and real-time features.' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', desc: 'Backend-as-a-service for auth, database, and cloud functions.' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', desc: 'Collaborative design tool for UI/UX prototyping and handoff.' },
  { name: 'Jest', icon: <SiJest />, color: '#C21325', desc: 'JavaScript testing framework for unit and integration tests.' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF', desc: 'Lightning-fast build tool for modern frontend development.' },
  { name: 'Go', icon: <SiGo />, color: '#00ADD8', desc: 'Efficient compiled language for high-performance backend services.' },
  { name: 'Rust', icon: <SiRust />, color: '#DEA584', desc: 'Systems programming language for memory-safe, high-speed applications.' },
]

const allSkills = [...outerSkills, ...innerSkills]

function DualOrbit({ onHover, active }) {
  const containerRef = useRef(null)
  const pausedRef = useRef(false)
  const angleRef = useRef(0)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const outerRefsRef = useRef([])
  const innerRefsRef = useRef([])

  const outerR = 185
  const innerR = 105

  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      if (!pausedRef.current) {
        angleRef.current = (angleRef.current + delta * 0.012) % 360
      }

      const a = angleRef.current
      outerRefsRef.current.forEach((el, i) => {
        if (!el) return
        const theta = ((360 / outerSkills.length) * i + a) * (Math.PI / 180)
        el.style.transform = `translate(${Math.cos(theta) * outerR}px, ${Math.sin(theta) * outerR}px)`
      })
      innerRefsRef.current.forEach((el, i) => {
        if (!el) return
        const theta = ((360 / innerSkills.length) * i - a * 1.3) * (Math.PI / 180)
        el.style.transform = `translate(${Math.cos(theta) * innerR}px, ${Math.sin(theta) * innerR}px)`
      })

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      className="orbit-container"
      ref={containerRef}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false; onHover(null) }}
    >
      <div className="orbit-ring outer" />
      <div className="orbit-ring inner" />

      {outerSkills.map((skill, i) => (
        <div
          key={skill.name}
          ref={el => outerRefsRef.current[i] = el}
          className={`skill-card ${active?.name === skill.name ? 'active' : ''}`}
          onMouseEnter={() => onHover(skill)}
        >
          <span className="skill-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
        </div>
      ))}

      {innerSkills.map((skill, i) => (
        <div
          key={skill.name}
          ref={el => innerRefsRef.current[i] = el}
          className={`skill-card ${active?.name === skill.name ? 'active' : ''}`}
          onMouseEnter={() => onHover(skill)}
        >
          <span className="skill-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
        </div>
      ))}
    </div>
  )
}

function Skills() {
  const [active, setActive] = useState(null)
  const hoveredRef = useRef(false)
  const timerRef = useRef(null)
  const indexRef = useRef(0)

  const rotateAuto = useCallback(() => {
    if (!hoveredRef.current) {
      setActive(allSkills[indexRef.current])
      indexRef.current = (indexRef.current + 1) % allSkills.length
    }
  }, [])

  useEffect(() => {
    rotateAuto()
    timerRef.current = setInterval(rotateAuto, 5000)
    return () => clearInterval(timerRef.current)
  }, [rotateAuto])

  const handleHover = (skill) => {
    if (skill) {
      hoveredRef.current = true
      setActive(skill)
      clearInterval(timerRef.current)
    } else {
      hoveredRef.current = false
      timerRef.current = setInterval(rotateAuto, 5000)
    }
  }

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>
      </div>

      <div className="skills-layout">
        <div className="skills-info">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.name}
                className="skill-detail"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <span className="skill-detail-icon" style={{ color: active.color }}>
                  {active.icon}
                </span>
                <h3 className="skill-detail-name">{active.name}</h3>
                <p className="skill-detail-desc">{active.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="skills-orbit">
          <DualOrbit onHover={handleHover} active={active} />
        </div>
      </div>
    </section>
  )
}

export default Skills
