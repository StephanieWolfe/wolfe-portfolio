<template>
  <div class="login">
    <div class="login-card">
      <h1>Admin Login</h1>

      <div v-if="error" class="error">{{ error }}</div>

      <div class="field">
        <label>Username</label>
        <input
          v-model="form.username"
          type="text"
          placeholder="Username"
          @keyup.enter="handleLogin"
        />
      </div>

      <div class="field">
        <label>Password</label>
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          @keyup.enter="handleLogin"
        />
      </div>

      <button @click="handleLogin" :disabled="loading" class="btn-primary">
        {{ loading ? 'Logging in...' : 'Log In' }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API_BASE from '../api';

export default {
  name: 'Login',
  data() {
    return {
      form: { username: '', password: '' },
      loading: false,
      error: null,
    }
  },
  methods: {
    async handleLogin() {
      this.error = null;
      this.loading = true;
      try {
        const response = await axios.post(`${API_BASE}/api/auth/login`, this.form);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/blog');
      } catch (err) {
        this.error = err.response?.data?.error || 'Login failed';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  padding: 48px 20px;
}

.login-card {
  background: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 400px;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  color: #1A2B3C;
  margin-bottom: 24px;
  text-align: center;
}

.field {
  margin-bottom: 16px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1A2B3C;
  margin-bottom: 6px;
}

input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #D5DCE3;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #4A90D9;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #4A90D9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
}

.btn-primary:disabled {
  background-color: #B5C4D1;
  cursor: not-allowed;
}

.error {
  background: #FDEAEA;
  color: #C0392B;
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
}
</style>