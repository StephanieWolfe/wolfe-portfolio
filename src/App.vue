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
        <router-link v-if="!loggedIn" to="/login" class="nav-login">Login</router-link>
        <button v-if="loggedIn" @click="handleLogout" class="nav-logout">Logout</button>
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
import { isLoggedIn, logout } from './auth';

export default {
  name: 'App',
  data() {
    return {
      loggedIn: false
    }
  },
  mounted() {
    this.loggedIn = isLoggedIn();
  },
  watch: {
    $route() {
      this.loggedIn = isLoggedIn();
    }
  },
  methods: {
    handleLogout() {
      logout();
      this.loggedIn = false;
      this.$router.push('/blog').then(() => {
        this.$router.go(0);
      });
    }
  }
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

.nav-login {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

.nav-logout {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
}

.nav-logout:hover {
  background: rgba(255, 255, 255, 0.1);
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