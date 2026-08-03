<template>
  <div class="about">
    <h1>About Me</h1>

    <div class="about-grid">
      <div class="about-main">
        <section class="about-section">
          <h2>Who I Am</h2>
          <p>I'm a software engineer and technical lead based in Rockwood, Pennsylvania, with 12 years of hands-on development experience in the insurance industry. I started as an entry-level developer and progressed through solutions analyst, service delivery manager, and tech lead roles — staying close to the code throughout.</p>
          <p>My career has been defined by a consistent pattern: finding legacy systems and making them better. From migrating flat files to SQL, converting DOS screens to web interfaces, replacing Object REXX with PowerShell, and leading a General Liability platform modernization — I've spent 12 years turning old systems into something that actually works well.</p>
          <p>I'm currently seeking a technical lead or senior software engineering role where I can stay hands-on with code while contributing my deep knowledge of insurance systems and enterprise software development.</p>
        </section>

        <section class="about-section">
          <h2>Background</h2>
          <p>I hold two Bachelor of Science degrees — Computer Science from the University of Pittsburgh at Johnstown, and Physics & Mathematics with a Computer Science minor from Clarion University of Pennsylvania. I'm also ITIL certified.</p>
          <p>My professional stack is COBOL, JavaScript, SQL, and PowerShell across enterprise insurance systems. More recently I've been building with Node.js, Express, Vue, React, and PostgreSQL — demonstrated by the Insurance Quote App I built and deployed from scratch, including an AI integration using the Anthropic Claude API.</p>
        </section>

        <section class="about-section">
          <h2>What I'm Looking For</h2>
          <p>A role at a company where engineering quality matters and the work has real impact. I'm particularly interested in insurance software companies (insurtech) where my 12 years of carrier-side experience is directly applicable — I've been on the other side of the software these companies build.</p>
          <p>I want to keep coding. Not just reviewing code or making architecture decisions — actually writing and shipping software regularly.</p>
        </section>
      </div>

      <div class="about-sidebar">
        <div class="sidebar-card">
          <h3>Experience</h3>
          <ul>
            <li>12 years at Rockwood Casualty Insurance</li>
            <li>Director of IT (2024–Present)</li>
            <li>Tech Lead (2021–2024)</li>
            <li>Associate Service Delivery Manager (2019–2021)</li>
            <li>Solutions Analyst (2018–2019)</li>
            <li>Software Developer (2014–2018)</li>
          </ul>
        </div>

        <div class="sidebar-card">
          <h3>Education</h3>
          <ul>
            <li>B.S. Computer Science — UPJ</li>
            <li>B.S. Physics & Mathematics — Clarion</li>
            <li>ITIL Certified</li>
          </ul>
        </div>

        <div class="sidebar-card">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://github.com/StephanieWolfe" target="_blank">GitHub</a></li>
            <li><a href="https://linkedin.com/in/stephanie-wolfe" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:stephymeyers1990@gmail.com">stephymeyers1990@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1A2B3C;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;
}

.about-section {
  margin-bottom: 36px;
}

.about-section h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1A2B3C;
  margin-bottom: 12px;
  text-align: left;
}

.about-section p {
  font-size: 15px;
  color: #556677;
  line-height: 1.8;
  margin-bottom: 12px;
  text-align: left;
}

.sidebar-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  margin-bottom: 16px;
}

.sidebar-card h3 {
  font-size: 14px;
  font-weight: 700;
  color: #4A90D9;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.sidebar-card ul {
  list-style: none;
  padding: 0;
}

.sidebar-card ul li {
  font-size: 13px;
  color: #556677;
  padding: 4px 0;
  border-bottom: 1px solid #F0F2F4;
  line-height: 1.5;
}

.sidebar-card ul li:last-child {
  border-bottom: none;
}

.sidebar-card a {
  color: #4A90D9;
  text-decoration: none;
}

.sidebar-card a:hover {
  text-decoration: underline;
}
</style>