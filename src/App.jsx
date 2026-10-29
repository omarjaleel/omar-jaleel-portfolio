
import React, { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Database, BriefcaseBusiness, MapPin,
  Terminal, Workflow, FileText, Check
} from 'lucide-react'

const GITHUB = 'https://github.com/omarjaleel'
const LINKEDIN = 'https://www.linkedin.com/in/omar-jaleel-b31b4b363/'
const EMAIL = 'mdumar.jaleel@gmail.com'

const projects = [
  {
    number: '01',
    category: 'ODOO · ERP CUSTOMIZATION',
    title: 'Odoo Custom Modules',
    description: 'Custom ERP functionality built around practical business workflows, including employee identification, time-off balances, invoice/reporting needs, and partner-ledger email workflows.',
    stack: ['Python', 'Odoo ORM', 'XML / QWeb', 'PostgreSQL'],
    kind: 'erp',
    featured: true,
    note: 'Selected internship and learning work'
  },
  {
    number: '02',
    category: 'FULL-STACK · DASHBOARD',
    title: 'Sale Ex Home Dashboard',
    description: 'A sales-focused dashboard project built with a FastAPI backend and a React interface, using SQLite for data storage.',
    stack: ['FastAPI', 'React', 'Vite', 'SQLite'],
    kind: 'dashboard',
    featured: true,
    note: 'Personal project'
  },
  {
    number: '03',
    category: 'ODOO · WORKFLOW LOGIC',
    title: 'Delivery Workflow & Sequence Logic',
    description: 'Explored delivery-reference sequencing and order-state behavior, with attention to avoiding unexpected sequence gaps during confirmation and delivery workflows.',
    stack: ['Python', 'Odoo ORM', 'Business Logic'],
    kind: 'workflow',
    note: 'Odoo customization example'
  },
  {
    number: '04',
    category: 'ODOO · HR',
    title: 'Employee Codes & Time-Off Balance',
    description: 'Custom module work around employee identification and employee time-off balance visibility.',
    stack: ['Odoo', 'Python', 'XML'],
    kind: 'people',
    note: 'Custom module work'
  },
  {
    number: '05',
    category: 'ODOO · ACCOUNTING',
    title: 'Tax Invoice & Partner Ledger Email',
    description: 'Odoo customization work involving tax-invoice/reporting needs and emailing partner-ledger information.',
    stack: ['Odoo', 'QWeb', 'Python'],
    kind: 'finance',
    note: 'Custom module work'
  },
  {
    number: '06',
    category: 'ODOO · PRODUCT RULES',
    title: 'Product Creation Restriction',
    description: 'An Odoo 16 module focused on restricting product creation according to defined access or workflow rules.',
    stack: ['Odoo 16', 'Python', 'Access Control'],
    kind: 'security',
    note: 'Odoo 16 module'
  },
  {
    number: '07',
    category: 'FULL-STACK · MACHINE LEARNING',
    title: 'Learning Disability Detection System',
    description: 'A machine-learning-based web application for screening potential learning disabilities, using data preprocessing and a Random Forest classification model.',
    stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'Random Forest'],
    kind: 'disability',
    note: 'Machine learning project'
  },
  {
    number: '08',
    category: 'ODOO · HR CUSTOMIZATION',
    title: 'Odoo Employee Identification Extension',
    description: 'Extended Odoo HR employee records with custom Employee ID, Team ID, and EUI fields, organized under a dedicated section on the employee Personal tab.',
    stack: ['Odoo 19', 'Python', 'Odoo ORM', 'XML', 'View Inheritance'],
    kind: 'people',
    note: 'Custom HR module'
  },
]

const skills = [
  {
    group: 'ERP DEVELOPMENT',
    icon: Layers3,
    items: [
      'Odoo 18 & 19', 'Odoo 16 basics', 'Odoo ORM',
      'Custom models & fields', 'Views, actions & menus',
      'Access rights', 'QWeb reports', 'Module inheritance'
    ]
  },
  {
    group: 'BACKEND',
    icon: Terminal,
    items: [
      'Python', 'FastAPI', 'Business logic', 'REST APIs',
      'PostgreSQL', 'SQLite', 'MySQL'
    ]
  },
  {
    group: 'FRONTEND',
    icon: Code2,
    items: ['JavaScript', 'React', 'HTML', 'CSS', 'Vite']
  },
  {
    group: 'TOOLS & PRACTICES',
    icon: Database,
    items: ['Git & GitHub', 'Debugging', 'Workflow analysis', 'Figma']
  },
]

function ProjectVisual({ kind }) {
  if (kind === 'dashboard') return (
    <div className="visual dashboard-visual" aria-label="Illustrative dashboard preview">
      <div className="mock-top">
        <span className="mock-dot" />
        <span className="mock-label">SALE EX / OVERVIEW</span>
        <span className="mock-status">● LIVE UI CONCEPT</span>
      </div>
      <div className="mock-metrics">
        <div><small>REVENUE</small><b>$24,890</b><i>↗ 12.8%</i></div>
        <div><small>ORDERS</small><b>1,284</b><i>↗ 8.4%</i></div>
        <div><small>AVG. VALUE</small><b>$86.40</b><i>↗ 4.2%</i></div>
      </div>
      <div className="chart-area">
        <div className="chart-head">
          <span>Sales activity</span>
          <small>LAST 7 DAYS</small>
        </div>
        <div className="chart-bars">
          {[32, 48, 40, 65, 52, 80, 61, 91, 70, 85, 58, 76].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="visual-foot">Illustrative UI · not a live application screenshot</div>
    </div>
  )

  if (kind === 'workflow') return (
    <div className="visual workflow-visual">
      <div className="workflow-node">
        <span>01</span><b>Sales Order</b><small>Draft created</small>
      </div>
      <div className="workflow-line"><i /></div>
      <div className="workflow-node active">
        <span>02</span><b>Confirmation</b><small>Validate sequence</small>
      </div>
      <div className="workflow-line"><i /></div>
      <div className="workflow-node">
        <span>03</span><b>Delivery</b><small>Track state changes</small>
      </div>
      <div className="visual-foot">Workflow concept · simplified</div>
    </div>
  )

  const iconMap = {
    erp: Layers3,
    people: BriefcaseBusiness,
    finance: FileText,
    security: Workflow
  }

  const Icon = iconMap[kind] || Code2

  return (
    <div className={`visual icon-visual ${kind}`}>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="visual-icon">
        <Icon size={42} strokeWidth={1.4} />
      </div>
      <div className="visual-code">
        <span>PY</span><span>XML</span><span>ORM</span>
      </div>
      <div className="visual-foot">CUSTOM MODULE / WORKFLOW</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [copied, setCopied] = useState(false)

  const filters = ['All', 'Odoo', 'Full-stack']

  const visibleProjects = projects.filter(p =>
    filter === 'All' ||
    (filter === 'Odoo'
      ? p.category.includes('ODOO')
      : p.category.includes('FULL-STACK'))
  )

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="grain" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Omar Jaleel home">
            <img
              src="/omar-jaleel.jpg"
              alt="Omar Jaleel"
              className="brand-photo"
            />
            <span>
              OMAR JALEEL
              <span className="brand-sub">DEVELOPER PORTFOLIO</span>
            </span>
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
            <a href="#about" onClick={closeMenu}>About <span>02</span></a>
            <a href="#skills" onClick={closeMenu}>Skills <span>03</span></a>
            <a href="#contact" onClick={closeMenu} className="nav-contact">
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR JUNIOR OPPORTUNITIES
              <span className="eyebrow-line" />
            </div>

            <h1>
              Building software<br />
              for <span className="highlight">real-world</span><br />
              <span className="serif-word">problems.</span>
            </h1>
            <img
              src="/omar-jaleel.jpg"
              alt="Omar Jaleel, Python and Odoo Developer"
              className="hero-photo"
            />
            <p className="hero-intro">
              I'm Omar — a Python & Odoo developer interested in building
              useful ERP customizations, smarter workflows, and full-stack applications.
            </p>

            

            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="button button-ghost">
                <Github size={17} /> GitHub <ArrowUpRight size={15} />
              </a>
              <a
                href="/Omar-Jaleel-CV.pdf"
                className="button button-ghost"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={17} /> View CV <ArrowUpRight size={15} />
              </a>
            </div>

            

            <div className="hero-meta">
              <span><MapPin size={14} /> DEIRA, DUBAI, UAE</span>
              <span className="meta-divider" />
              <span>PYTHON · ODOO · FULL-STACK</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="art-top">
              <span>WORKSPACE / 001</span>
              <span className="art-live"><i /> BUILDING</span>
            </div>

            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>business_logic.py</span>
                <span>•••</span>
              </div>

              <div className="code-lines">
                <div><em>01</em><span><b>class</b> <strong>BusinessWorkflow</strong>:</span></div>
                <div><em>02</em><span className="indent"><b>def</b> <strong>solve</strong>(self, problem):</span></div>
                <div><em>03</em><span className="indent2"><i># understand the process</i></span></div>
                <div><em>04</em><span className="indent2">requirements = <strong>analyse</strong>(problem)</span></div>
                <div><em>05</em><span className="indent2">solution = <strong>build</strong>(requirements)</span></div>
                <div><em>06</em><span className="indent2"><b>return</b> solution</span></div>
                <div><em>07</em><span>&nbsp;</span></div>
                <div><em>08</em><span className="terminal-line"><i className="prompt">›</i> ready_to_build<span className="cursor">_</span></span></div>
              </div>
            </div>

            <div className="art-sticker"><span>PY</span><span>×</span><span>ERP</span></div>
            <div className="art-caption">
              <span>THOUGHTFUL LOGIC.</span>
              <span>USEFUL SOFTWARE.</span>
            </div>
            <div className="art-coordinate">25°16' N<br />55°18' E</div>
          </div>

          <div className="hero-index">
            <span>SCROLL TO EXPLORE</span>
            <span className="index-line" />
            <span>2026 — PORTFOLIO</span>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {[
              'ODOO CUSTOMIZATION',
              'PYTHON DEVELOPMENT',
              'BUSINESS WORKFLOWS',
              'FULL-STACK PROJECTS',
              'ODOO CUSTOMIZATION',
              'PYTHON DEVELOPMENT',
              'BUSINESS WORKFLOWS',
              'FULL-STACK PROJECTS'
            ].map((x, i) => (
              <span key={i}>{x}<i>✳</i></span>
            ))}
          </div>
        </section>

        <section className="section work-section container" id="work">
          <div className="section-head">
            <div>
              <div className="section-kicker">01 / SELECTED WORK</div>
              <h2>Projects with<br /><span className="serif-word">purpose.</span></h2>
            </div>
            <p>
              A selection of ERP customizations and software projects. Each one
              represents a practical problem, a technical challenge, or a chance
              to learn by building.
            </p>
          </div>

          <div className="filter-row">
            <span className="filter-label">BROWSE PROJECTS</span>
            <div className="filters">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={filter === f ? 'selected' : ''}
                >
                  {f}
                  <span>
                    {f === 'All' ? '08' : f === 'Odoo' ? '06' : '02'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map(p => (
              <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.number}>
                <ProjectVisual kind={p.kind} />

                <div className="project-info">
                  <div className="project-topline">
                    <span>{p.category}</span>
                    <span>{p.number}</span>
                  </div>

                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="tag-row">
                    {p.stack.map(s => <span key={s}>{s}</span>)}
                  </div>

                  <div className="project-bottom">
                    <span>{p.note}</span>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`See related work on GitHub for ${p.title}`}
                      title="Visit GitHub profile"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="work-foot">
            <span>MORE CODE, LESS TALK.</span>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              Explore GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-heading">
              <div className="section-kicker">02 / A LITTLE ABOUT ME</div>
              <h2>Curious mind.<br /><span className="serif-word">Practical builder.</span></h2>
              <div className="about-stamp">
                <span>BUILT WITH</span>
                <b>curiosity<span>✳</span></b>
                <span>AND A LOT OF COFFEE</span>
              </div>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                I enjoy understanding how a business works — then building software
                that makes the work clearer, more consistent, or easier to manage.
              </p>
              <p>
                My experience so far includes Python and Odoo development through
                internship and project work. I've worked with custom models, views,
                access rules, reports, and workflows, and I've also explored
                full-stack development with FastAPI and React.
              </p>
              <p>
                I'm at the early stage of my career, eager to learn from experienced
                developers, take ownership of meaningful tasks, and keep improving
                through real-world work.
              </p>

              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div>
                    <span className="timeline-date">2021 — 2025</span>
                    <b>B.Tech, Information Technology</b>
                    <small>C.E. Thalassery · APJ Abdul Kalam Technological University</small>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div>
                    <span className="timeline-date">INTERNSHIP EXPERIENCE</span>
                    <b>Python & Odoo Developer Intern</b>
                    <small>Biztras Technologies · custom modules and ERP workflows</small>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot current" />
                  <div>
                    <span className="timeline-date">CURRENTLY</span>
                    <b>Open to junior opportunities</b>
                    <small>Python · Odoo · Junior Software Development</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section container" id="skills">
          <div className="section-head">
            <div>
              <div className="section-kicker">03 / MY TOOLKIT</div>
              <h2>Tools I use<br /><span className="serif-word">to build.</span></h2>
            </div>
            <p>
              My current toolkit spans ERP customization, backend logic, databases,
              and front-end interfaces. I'm always learning and strengthening
              the fundamentals.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((s, i) => {
              const Icon = s.icon
              return (
                <div className="skill-card" key={s.group}>
                  <div className="skill-card-head">
                    <span className="skill-icon"><Icon size={19} /></span>
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{s.group}</h3>
                  <div className="skill-list">
                    {s.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </div>
              )
            })}
          </div>

          <p className="skills-note">
            <span className="status-dot" />
            Skills reflect hands-on exposure and current learning; depth varies by technology.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-kicker">04 / HAVE A ROLE IN MIND?</div>
            <h2>Let's build something<br /><span className="serif-word">that matters.</span></h2>
            <p>
              I'm open to junior opportunities in Python development, Odoo development,
              and software engineering. If you think I could be a fit for your team,
              I'd love to hear from you.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${EMAIL}?subject=${encodeURIComponent('Opportunity for Omar Jaleel')}`}
              >
                <Mail size={17} /> Get in touch <ArrowUpRight size={16} />
              </a>
              <button className="button button-ghost" onClick={copyEmail}>
                {copied ? <Check size={17} /> : <FileText size={17} />}
                {copied ? 'Email copied' : 'Copy email'}
              </button>
            </div>

            <div className="contact-links">
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={16} /> Email <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="contact-orbit orbit-a" />
          <div className="contact-orbit orbit-b" />
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="brand footer-brand">
            <img
              src="/omar-jaleel.jpg"
              alt="Omar Jaleel"
              className="brand-photo"
            />
            <span>
              OMAR JALEEL
              <span className="brand-sub">PYTHON & ODOO DEVELOPER</span>
            </span>
          </a>
          <span className="footer-note">DESIGNED TO KEEP BUILDING <span>✳</span></span>
          <span className="copyright">© 2026 OMAR JALEEL</span>
        </div>
      </footer>
    </div>
  )
}

export default App
