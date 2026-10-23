<template>
  <div class="about">
    <h1>About Me</h1>

    <div class="about-grid">
      <div class="about-main">
        <section class="about-section">
          <h2>Who I Am</h2>
          <p>I'm a software engineer based in Rockwood, Pennsylvania, with 12 years of experience in the insurance industry. I started as a developer and kept developing as my responsibilities grew: solutions analyst, service delivery manager, tech lead, and now Director of IT. I write less code than I used to, but I still build the first working version of new work, then hand it to junior developers to replicate.</p>
          <p>My career has followed one pattern: finding legacy systems and making them better. I've migrated flat files to SQL, moved DOS screens to web interfaces, replaced Object REXX with PowerShell, led a General Liability platform modernization, and built the proof of concept for moving Access databases to Snowflake.</p>
        </section>

        <section class="about-section">
          <h2>Experience</h2>
          <p class="employer">Rockwood Casualty Insurance Company</p>
          <ol class="roles">
            <li v-for="role in roles" :key="role.title">
              <h3>{{ role.title }} <span class="dates">{{ role.dates }}</span></h3>
              <ul class="role-points">
                <li v-for="point in role.points" :key="point">{{ point }}</li>
              </ul>
            </li>
          </ol>
        </section>

        <section class="about-section">
          <h2>Background</h2>
          <p>I hold two Bachelor of Science degrees: Computer Science from the University of Pittsburgh at Johnstown, and Physics &amp; Mathematics with a Computer Science minor from Clarion University of Pennsylvania. I'm also ITIL certified.</p>
          <p>My professional stack is COBOL, JavaScript, SQL, and PowerShell across enterprise insurance systems. On my own I build with React, Vue, Node.js, Express, and PostgreSQL, including the Insurance Quote App, which I built and deployed from scratch with an Anthropic Claude API integration. I'm currently learning TypeScript.</p>
        </section>

        <section class="about-section">
          <h2>What I'm Looking For</h2>
          <p>I'm looking for a senior software engineer or technical lead role where most of my time goes into writing and shipping code, at a company where engineering quality matters and the work has real impact. Insurance software companies (insurtech) are a natural fit, because I've spent 12 years on the carrier side of the software they build.</p>
          <p>After several years leading teams, I want my days back in the code: writing, testing, and shipping software every week.</p>
        </section>
      </div>

      <div class="about-sidebar">
        <div class="sidebar-card">
          <h3>Education</h3>
          <ul>
            <li>B.S. Computer Science, UPJ</li>
            <li>B.S. Physics &amp; Mathematics, Clarion</li>
            <li>ITIL Certified</li>
          </ul>
        </div>

        <div class="sidebar-card">
          <h3>Connect</h3>
          <ul>
            <li><a href="/Stephanie-Wolfe-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a></li>
            <li><a href="https://github.com/StephanieWolfe" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/stephanie-wolfe" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:stephymeyers1990@gmail.com">stephymeyers1990@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      roles: [
        {
          title: 'Director of IT',
          dates: '2024–Present',
          points: [
            'I build the first working version of new work, then hand it to junior developers to replicate.',
            'Built the proof of concept for moving over 100 Access databases to Snowflake: connected one database end to end and migrated the MySQL table views it depended on, translating the queries to Snowflake SQL. A developer is repeating the work for the rest.',
            'Stood up the servers and groundwork for a new QA environment so we can run a full batch cycle there.',
            'Helped resolve production batch issues after the General Liability platform went live.',
            'Configured, tested, and recompiled our Visual COBOL 6 to 10 upgrade.'
          ]
        },
        {
          title: 'Tech Lead',
          dates: '2021–2024',
          points: [
            'Led a General Liability platform modernization (DOS screens to web, flat files to SQL, fillable PDFs with Apache FOP) and personally migrated the flat files to SQL.',
            'Led the move from Net Express to Visual COBOL, the MySQL 5 to 8 upgrade, and the replacement of Object REXX with PowerShell.'
          ]
        },
        {
          title: 'Associate Service Delivery Manager',
          dates: '2019–2021',
          points: ['Led development teams delivering production systems, with hands-on involvement in design and code review.']
        },
        {
          title: 'Solutions Analyst',
          dates: '2018–2019',
          points: ['Found inefficient routines in production systems and built solutions that reduced errors and improved performance.']
        },
        {
          title: 'Software Developer',
          dates: '2014–2018',
          points: ['Built a vehicle data management system, migrated legacy index files to SQL tables, and consolidated four General Ledger files into one database table.']
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  text-align: left;
}

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
}

.about-section p {
  font-size: 15px;
  color: #556677;
  line-height: 1.8;
  margin-bottom: 12px;
}

.employer {
  font-weight: 600;
  color: #1A2B3C !important;
  margin-bottom: 16px !important;
}

.roles {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.roles h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1A2B3C;
  margin-bottom: 4px;
}

.roles .dates {
  font-size: 14px;
  font-weight: 400;
  color: #556677;
  margin-left: 8px;
}

.role-points {
  list-style: disc;
  margin-left: 20px;
}

.role-points li {
  font-size: 15px;
  color: #556677;
  line-height: 1.6;
  margin-bottom: 4px;
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
  color: #2E6DB4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.sidebar-card ul {
  list-style: none;
  padding: 0;
}

.sidebar-card ul li {
  font-size: 14px;
  color: #556677;
  padding: 4px 0;
  border-bottom: 1px solid #F0F2F4;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.sidebar-card ul li:last-child {
  border-bottom: none;
}

.sidebar-card a {
  color: #2E6DB4;
  text-decoration: none;
}

.sidebar-card a:hover {
  text-decoration: underline;
}

.sidebar-card a:focus-visible {
  outline: 3px solid #1A2B3C;
  outline-offset: 2px;
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
