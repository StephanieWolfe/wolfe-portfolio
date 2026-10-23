<template>
  <div class="projects">
    <div class="projects-banner">
      <img src="/images/banner-about.png" alt="Projects I've Built" class="projects-banner-img" />
    </div>
    <h1>Projects</h1>
    <p class="subtitle">A collection of things I've built — from enterprise insurance systems to modern full-stack applications.</p>
    <p class="demo-note">Live demos run on free hosting, so the first load may take up to a minute while the server wakes up.</p>

    <div class="project-list">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-header">
          <h2>{{ project.title }}</h2>
          <span class="project-tag">{{ project.tag }}</span>
        </div>
        <p class="project-desc">{{ project.description }}</p>
        <p class="project-tech">{{ project.tech }}</p>
        <div class="project-links">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo</a>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Insurance Quote App',
          tag: 'Full-Stack',
                    description: 'A full-stack auto insurance application with a multi-factor rating engine: a base rate by coverage type (liability, collision, full), adjusted for driver age, vehicle age, and vehicle value. Intentionally simplified compared with real underwriting. Includes AI-generated coverage recommendations grounded in the calculated premiums, and a tool-calling chat endpoint that answers questions by querying the policies table. Solo project.',
          tech: 'React · Node.js · Express · PostgreSQL · Zod · Anthropic API · Render',
          liveUrl: 'https://insurance-api-client.onrender.com',
          githubUrl: 'https://github.com/StephanieWolfe/insurance-api'
        },
        {
          id: 2,
          title: 'General Liability Platform Modernization',
          tag: 'Legacy Modernization',
                    description: 'Led the replacement of a 20-30 year old General Liability insurance platform and personally migrated its flat files to SQL. The project converted hardcoded rate values to database-driven tables, moved DOS-based screens to a web interface, and added fillable PDF generation using Apache FOP, all built in COBOL. After go-live, helped resolve production batch issues. Employer system, code not public.',
          tech: 'COBOL · SQL · HTML · Apache FOP',
          liveUrl: null,
          githubUrl: null
        },
        {
          id: 3,
          title: 'General Ledger Data Migration',
          tag: 'Data Migration',
          description: 'Converted the General Ledger system from flat file storage to SQL tables, consolidating four separate ledger detail files into a single unified database table. Improved data integrity, simplified downstream reporting, and reduced maintenance overhead. Employer system, code not public.',
          tech: 'COBOL · SQL · MySQL',
          liveUrl: null,
          githubUrl: null
        },
        {
          id: 4,
          title: 'Access to Snowflake Migration',
          tag: 'In Progress',
                    description: 'Proof of concept for moving over 100 Microsoft Access databases to Snowflake. I connected one database to Snowflake and pulled its data end to end, and migrated the MySQL table views it depended on, translating the queries to Snowflake SQL with help from Snowflake\'s AI assistant. I then handed the pattern to a developer to repeat for the remaining databases. Employer system, code not public.',
          tech: 'Snowflake · SQL · MySQL · Microsoft Access',
          liveUrl: null,
          githubUrl: null
        },
        {
          id: 6,
          title: 'Object REXX to PowerShell Replacement',
          tag: 'Legacy Modernization',
          description: 'Led a multi-year initiative to replace Object REXX scripting with PowerShell across enterprise systems, completing the full transition and eliminating REXX from the codebase. Employer system, code not public.',
          tech: 'PowerShell · Object REXX',
          liveUrl: null,
          githubUrl: null
        },
        {
          id: 5,
          title: 'Recipe Book',
          tag: 'Full-Stack',
          description: 'A full-stack recipe management application with a classic cookbook aesthetic. Features include recipe browsing by category, photo uploads via Cloudinary, full CRUD with JWT authentication, and a two-column cookbook-style recipe detail layout. Built with Vue, Node.js, and PostgreSQL. Solo project.',
          tech: 'Vue · Node.js · Express · PostgreSQL · Cloudinary · JWT Auth · Render',
          liveUrl: 'https://recipe-book-9anl.onrender.com',
          githubUrl: 'https://github.com/StephanieWolfe/recipe-book'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 32px;
  position: relative;
}

.projects-banner-img {
  width: 100%;
  margin-top: -35%;
  border-radius: 10px;
}

.projects h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1A2B3C;
}

.subtitle {
  font-size: 16px;
  color: #556677;
  margin-bottom: 12px;
  line-height: 1.6;
}

.demo-note {
  font-size: 14px;
  color: #556677;
  margin-bottom: 40px;
  line-height: 1.5;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card {
  background: white;
  border-radius: 10px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.project-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1A2B3C;
  margin: 0;
}

.project-tag {
  background-color: #EEF5FB;
  color: #4A90D9;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
}

.project-desc {
  font-size: 14px;
  color: #556677;
  line-height: 1.7;
  margin-bottom: 10px;
}

.project-tech {
  font-size: 13px;
  color: #4A90D9;
  font-weight: 500;
  margin-bottom: 16px;
}

.project-links {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.15s ease;
}

.btn:hover { opacity: 0.85; }
.btn-primary { background-color: #4A90D9; color: white; }
.btn-secondary { background-color: white; color: #1A2B3C; border: 1px solid #D5DCE3; }
</style>