<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/">Stephanie Wolfe</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2026 Stephanie Wolfe · <a href="https://github.com/StephanieWolfe" target="_blank">GitHub</a> · <a href="https://linkedin.com/in/stephanie-wolfe" target="_blank">LinkedIn</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #F4F6F8;
  color: #1A2B3C;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(135deg, #1A2B3C 0%, #2C4A6B 100%);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.15s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: white;
}

.main-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 20px 48px 20px;
  width: 100%;
}

.footer {
  background-color: #1A2B3C;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 20px;
  font-size: 13px;
}

.footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.footer a:hover {
  color: white;
}
</style>