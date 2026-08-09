<template>
  <div class="blog-post">
    <div v-if="loading" class="loading">Loading post...</div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <router-link to="/blog" class="btn btn-secondary">Back to Blog</router-link>
    </div>

    <div v-else-if="post">
      <router-link to="/blog" class="back-link">← Back to Blog</router-link>
      <div class="post-meta">{{ formatDate(post.created_at) }}</div>
      <h1>{{ post.title }}</h1>
      <div class="post-content">{{ post.content }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API_BASE from '../api';

export default {
  name: 'BlogPost',
  data() {
    return {
      post: null,
      loading: true,
      error: null,
    }
  },
  async mounted() {
    try {
      const slug = this.$route.params.slug;
      const response = await axios.get(`${API_BASE}/api/blog/posts/${slug}`);
      this.post = response.data;
    } catch (err) {
      this.error = err.response?.status === 404
        ? 'Post not found.'
        : 'Something went wrong loading this post.';
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>

<style scoped>
.loading, .error {
  text-align: center;
  padding: 48px 0;
  color: #556677;
}

.back-link {
  display: inline-block;
  color: #4A90D9;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 16px;
}

.back-link:hover {
  text-decoration: underline;
}

.post-meta {
  font-size: 13px;
  color: #4A90D9;
  font-weight: 500;
  margin-bottom: 8px;
  text-align: left;
}

h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1A2B3C;
  margin-bottom: 24px;
  line-height: 1.3;
  text-align: left;
}

.post-content {
  font-size: 16px;
  color: #334455;
  line-height: 1.8;
  white-space: pre-wrap;
  text-align: left;
}

.btn {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  background: white;
  color: #1A2B3C;
  border: 1px solid #D5DCE3;
}
</style>