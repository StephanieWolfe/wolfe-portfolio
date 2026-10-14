<template>
  <div class="home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">Stephanie Wolfe</h1>
        <p class="role">Technical Lead | Software Engineer</p>
        <p class="intro">
          12 years of hands-on development in P&amp;C insurance, including technical lead
          experience. I modernize legacy systems and build full-stack apps with React, Vue,
          Node.js, and PostgreSQL.
        </p>
        <p class="tagline">Modernizing legacy systems for what's next.</p>
        <div class="hero-links">
          <router-link to="/projects" class="btn btn-hero-primary">See My Work</router-link>
          <a :href="`mailto:${contactEmail}`" class="btn btn-hero-secondary">Contact</a>
          <a href="/Stephanie-Wolfe-Resume.pdf" target="_blank" rel="noopener noreferrer" class="resume-link">Resume (PDF)</a>
        </div>
      </div>

      <div class="hero-panel">
        <h2>Modernization work</h2>
        <ul class="migrations">
          <li v-for="m in migrations" :key="m.from">
            <span class="from">{{ m.from }}</span>
            <span class="sr-only">became</span>
            <span class="to" aria-hidden="false">{{ m.to }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">What I Work With</h2>
      <dl class="stack">
        <div class="stack-row" v-for="row in stack" :key="row.label">
          <dt>{{ row.label }}</dt>
          <dd>{{ row.items }}</dd>
        </div>
      </dl>
    </section>

    <section class="highlight" aria-labelledby="project-title">
      <h2 id="project-title">Recent Project</h2>
      <article class="project-card">
        <h3>Insurance Quote App</h3>
        <p>
          A full-stack auto insurance app: a React front end on a Node.js and Express REST API
          with PostgreSQL. A rules-based engine calculates premiums. A Claude-powered assistant
          recommends coverage using those calculated numbers, so it can't invent prices, and a
          tool-calling chat endpoint answers questions by querying the policies table.
        </p>
        <p class="tech">React · Node.js · Express · PostgreSQL · Zod · Anthropic API</p>
        <div class="project-links">
          <a href="https://insurance-api-client.onrender.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo</a>
          <a href="https://github.com/StephanieWolfe/insurance-api" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View Code</a>
        </div>
        <p class="demo-note">The demo runs on free hosting, so the first load may take up to a minute.</p>
        <router-link to="/projects" class="more-link">See all projects</router-link>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      contactEmail: 'stephymeyers1990@gmail.com',
      migrations: [
        { from: 'DOS screens', to: 'Web interface' },
        { from: 'Flat files', to: 'SQL tables' },
        { from: 'Object REXX', to: 'PowerShell' },
        { from: 'Net Express', to: 'Visual COBOL' },
        { from: 'MySQL 5', to: 'MySQL 8' }
      ],
      stack: [
        { label: 'Languages', items: 'JavaScript, SQL, COBOL, REXX, PowerShell' },
        { label: 'Front end', items: 'React, Vue' },
        { label: 'Back end', items: 'Node.js, Express, REST API design, JWT authentication, Zod' },
        { label: 'Data', items: 'PostgreSQL, MySQL' },
        { label: 'AI integration', items: 'Anthropic Claude API, including tool calling' },
        { label: 'Learning', items: 'TypeScript' },
        { label: 'Domain', items: 'P&C insurance systems: policy administration, billing, claims, legacy modernization' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  --navy: #1A2B3C;
  --navy-light: #2C4A6B;
  --ink: #1A2B3C;
  --muted: #556677;
  --accent: #2E6DB4;
  --on-dark: #DCE6F2;
  --sky: #9CC3F0;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Hero */
.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  border-radius: 10px;
  padding: 48px 40px;
  color: white;
}

.hero h1 {
  font-size: 44px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.role {
  margin-top: 8px;
  font-size: 22px;
  font-weight: 500;
  color: var(--sky);
}

.intro {
  margin-top: 20px;
  max-width: 52ch;
  font-size: 16px;
  line-height: 1.65;
  color: var(--on-dark);
}

.tagline {
  margin-top: 12px;
  font-size: 16px;
  font-style: italic;
  color: var(--on-dark);
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.resume-link {
  align-self: center;
  color: white;
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.resume-link:focus-visible {
  outline: 3px solid white;
  outline-offset: 3px;
}

.hero-panel {
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  padding-left: 32px;
}

.hero-panel h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--on-dark);
  margin-bottom: 14px;
}

.migrations {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.migrations li {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 15px;
}

.migrations .from {
  color: var(--on-dark);
  opacity: 0.85;
  text-decoration: line-through;
  text-decoration-color: rgba(255, 255, 255, 0.4);
}

.migrations .to {
  color: white;
  font-weight: 600;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.15s ease;
}

.btn:focus-visible {
  outline: 3px solid var(--navy);
  outline-offset: 3px;
}

.btn-hero-primary {
  background-color: white;
  color: var(--navy);
}

.btn-hero-primary:hover {
  background-color: var(--on-dark);
}

.btn-hero-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.btn-hero-secondary:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.hero .btn:focus-visible {
  outline-color: white;
}

.btn-primary {
  background-color: var(--accent);
  color: white;
}

.btn-primary:hover {
  background-color: #255A96;
}

.btn-secondary {
  background-color: white;
  color: var(--ink);
  border: 1px solid #8A99A8;
}

.btn-secondary:hover {
  background-color: #EEF2F6;
}

/* Sections */
h2 {
  font-size: 24px;
  color: var(--ink);
  margin-bottom: 24px;
}

.hero-panel h2 {
  margin-bottom: 14px;
}

.stack {
  background: white;
  border-radius: 8px;
  padding: 8px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.stack-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid #E3E8ED;
}

.stack-row:first-child {
  border-top: none;
}

.stack dt {
  font-size: 15px;
  font-weight: 600;
  color: var(--accent);
}

.stack dd {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.5;
}

.project-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.project-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.project-card p {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 8px;
  max-width: 70ch;
}

.project-card .tech {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 16px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-card .demo-note {
  margin-top: 12px;
  margin-bottom: 0;
  font-size: 14px;
}

.more-link {
  display: inline-block;
  margin-top: 16px;
  font-size: 15px;
  color: var(--accent);
}

.more-link:focus-visible {
  outline: 3px solid var(--navy);
  outline-offset: 3px;
}

@media (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 32px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero-panel {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding-left: 0;
    padding-top: 24px;
  }

  .stack-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
