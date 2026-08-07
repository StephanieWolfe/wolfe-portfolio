<template>
  <div class="blog">
    <h1>Blog</h1>
    <p class="subtitle">Thoughts on software development, legacy modernization, and what I'm learning.</p>

    <div v-if="loading" class="loading">Loading posts...</div>

    <div v-else-if="posts.length === 0" class="empty">
      <p>No posts yet — check back soon.</p>
    </div>

    <div v-else class="post-list">
      <div v-for="post in posts" :key="post.id" class="post-card" @click="goToPost(post.slug)">
        <div class="post-meta">{{ formatDate(post.created_at) }}</div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.summary }}</p>
        <span class="read-more">Read more →</span>
      </div>
    </div>

    <div class="write-link">
      <router-link to="/blog/new" class="btn btn-secondary">+ Write a Post</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API_BASE from '../api';

export default {
  name: 'Blog',
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  async mounted() {
    try {
      const response = await axios.get(`${API_BASE}/api/blog/posts`);
      this.posts = response.data;
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    goToPost(slug) {
      this.$router.push(`/blog/${slug}`);
    },
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
.blog h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1A2B3C;
}

.subtitle {
  font-size: 16px;
  color: #556677;
  margin-bottom: 40px;
  line-height: 1.6;
}

.loading, .empty {
  text-align: center;
  color: #556677;
  padding: 48px 0;
  font-size: 15px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.post-card {
  background: white;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: box-shadow 0.15s ease;
}

.post-card:hover {
  box-shadow: 0 3px 8px rgba(0,0,0,0.12);
}

.post-meta {
  font-size: 13px;
  color: #4A90D9;
  margin-bottom: 8px;
  font-weight: 500;
}

.post-card h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1A2B3C;
  margin-bottom: 8px;
}

.post-card p {
  font-size: 14px;
  color: #556677;
  line-height: 1.6;
  margin-bottom: 12px;
}

.read-more {
  font-size: 13px;
  color: #4A90D9;
  font-weight: 500;
}

.write-link {
  margin-top: 16px;
}

.btn {
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.btn-secondary {
  background-color: white;
  color: #1A2B3C;
  border: 1px solid #D5DCE3;
}
</style>