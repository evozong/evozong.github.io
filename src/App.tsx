import React from "react";
import "./App.css"

type Link = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  description: string;
  tech?: string[];
  link?: string;
};

type Experience = {
	position: string;
	company: string;
	start: string;
	end: string;
};

const navLinks: Link[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projects: Project[] = [
  {
    name: "TBD",
    description:
      "A project.",
    /*tech: ["React", "TypeScript"],*/
    link: "https://www.zongyaomao.com",
  },
  {
    name: "TBD",
    description:
      "A project.",
  },
];

const skills: string[] = [
  // Core Technical Architecture
  "Distributed Systems",
  "Large-Scale Search & Retrieval",
  "Enterprise Search Platforms",
  "Real-Time & Low-Latency Systems",
  "RAG (Retrieval-Augmented Generation)",
  "Data Lakes & BI Platforms",
  "Privacy & Compliance Infrastructure",
  "Telemetry & Feature Gating Systems",

  // Leadership & Strategy
  "Technical Strategy & North-Star Architecture",
  "Cross-Org Alignment & Systems Integration",
  "Staff+ Mentorship",
  "Design Reviews & Technical Decision-Making",

  // Domain Expertise
  "FinTech Systems",
  "Supply Chain & Logistics Platforms",
  "Productivity & Communication Systems",
  "AI/ML-Driven Search Systems",

  // Programming & Tools
  "C++",
  "Java",
  "C#",
  "Python",
  "SQL",
  "AWS",
  "Azure"
];

const experiences: Experience[] = [
	{
		position: "Engineering Manager",
		company: "Meta",
		start: "Dec 2021",
		end: "Now",
	},
	{
		position: "Software Development Manager",
		company: "Amazon",
		start: "May 2020",
		end: "Dec 2021",
	},
	{
		position: "Associate Director of Engineering",
		company: "Walmart / Jet.com",
		start: "Jan 2018",
		end: "May 2020",
	},
	{
		position: "Senior Technical Lead",
		company: "Microsoft",
		start: "Sep 2011",
		end: "Jan 2018",
	},
];

const App: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <span className="logo">Zongyao Mao</span>
          </div>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="top">
          <div>
            <p className="hero-tagline">Software Engineer · Problem Solver</p>
            <h1>
              Hi, I&apos;m <span className="highlight">Zongyao</span>.
            </h1>
            <p className="hero-subtitle">
              I build reliable, scalable software and love turning complex
              problems into simple, elegant solutions.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View projects
              </a>
              <a href="#contact" className="btn secondary">
                Contact me
              </a>
            </div>
            <div className="hero-meta">
              <span>📍 Location: Singapore</span>
              <span>💼 Focus: Backend / Data</span>
            </div>
          </div>

          <aside className="hero-card">
<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
<div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="zongyaomao" />
          </aside>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <h2>About</h2>
          <p>
I’m a Software Engineer specializing in large-scale systems, search infrastructure, and technical strategy. Over the past decade, I’ve built end-to-end architectures across Meta, Amazon, Walmart/Jet.com, and Microsoft, designing platforms that power mission-critical experiences used by millions of users worldwide.
          </p>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="timeline">
						{experiences.map((experience) => (
            <article className="timeline-item">
              <h3>{experience.position} · {experience.company}</h3>
              <p className="timeline-meta">{experience.start} – {experience.end}</p>
            </article>
						))}
          </div>
        </section>

        {/* Projects Section */}
		
        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.name} className="card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.tech && (<div className="chips">
                  {project.tech.map((t) => (
                    <span key={t} className="chip chip-small">
                      {t}
                    </span>
                  ))}
                </div>)}
                {project.link && (
                  <a
                    href={project.link}
                    className="card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zongyaomao"
							target="_blank"
              rel="noreferrer noopener"
							className="btn primary">
              LinkedIn
            </a>
            <a
              href="https://github.com/evozong"
              target="_blank"
              rel="noreferrer noopener"
              className="btn secondary">
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Zongyao Mao</span>
      </footer>
    </>
  );
};

export default App;
