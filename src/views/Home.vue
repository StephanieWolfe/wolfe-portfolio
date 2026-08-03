<template>
  <div class="home">
    <section class="hero">
      <h1>Hi, I'm Stephanie Wolfe</h1>
      <p class="tagline">Software Engineer & Technical Lead with 12 years of enterprise development experience in the insurance industry.</p>
      <div class="hero-links">
        <a href="https://github.com/StephanieWolfe" target="_blank" class="btn btn-primary">View GitHub</a>
        <router-link to="/projects" class="btn btn-secondary">See My Work</router-link>
      </div>
    </section>

    <section class="skills">
      <h2>What I Work With</h2>
      <div class="skill-grid">
        <div class="skill-card">
          <h3>Professional Stack</h3>
          <p>COBOL, JavaScript, SQL, PowerShell, REXX — 12 years of enterprise insurance systems</p>
        </div>
        <div class="skill-card">
          <h3>Modern Stack</h3>
          <p>Node.js, Express, React, Vue, PostgreSQL, REST APIs, Git</p>
        </div>
        <div class="skill-card">
          <h3>Currently Learning</h3>
          <p>TypeScript, modern C# patterns, AI/LLM integration</p>
        </div>
        <div class="skill-card">
          <h3>Domain Expertise</h3>
          <p>P&C insurance operations, policy administration, billing, claims, legacy modernization</p>
        </div>
      </div>
    </section>

    <section class="highlight">
      <h2>Recent Project</h2>
      <div class="project-card">
        <h3>Insurance Quote App</h3>
        <p>A full-stack auto insurance application with a rules-based premium calculation engine and AI-powered coverage recommendations using the Anthropic Claude API.</p>
        <p class="tech">Vue · Node.js · Express · PostgreSQL · Anthropic API</p>
        <div class="project-links">
          <a href="https://insurance-api-client.onrender.com" target="_blank" class="btn btn-primary">Live Demo</a>
          <a href="https://github.com/StephanieWolfe/insurance-api" target="_blank" class="btn btn-secondary">View Code</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.hero {
  text-align: center;
  padding: 48px 0;
}

.hero h1 {
  font-size: 42px;
  font-weight: 700;
  color: #1A2B3C;
  margin-bottom: 16px;
}

.tagline {
  font-size: 18px;
  color: #556677;
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.hero-links {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: opacity 0.15s ease;
}

.btn:hover {
  opacity: 0.85;
}

.btn-primary {
  background-color: #4A90D9;
  color: white;
}

.btn-secondary {
  background-color: white;
  color: #1A2B3C;
  border: 1px solid #D5DCE3;
}

h2 {
  font-size: 24px;
  color: #1A2B3C;
  margin-bottom: 24px;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.skill-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.skill-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: #4A90D9;
  margin-bottom: 8px;
}

.skill-card p {
  font-size: 14px;
  color: #556677;
  line-height: 1.5;
}

.project-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.project-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.project-card p {
  font-size: 14px;
  color: #556677;
  line-height: 1.6;
  margin-bottom: 8px;
}

.tech {
  font-size: 13px;
  color: #4A90D9;
  font-weight: 500;
  margin-bottom: 16px;
}

.project-links {
  display: flex;
  gap: 12px;
}
</style>