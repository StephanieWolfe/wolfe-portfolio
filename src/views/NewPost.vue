<template>
  <div class="new-post">
    <h1>Write a Post</h1>

    <div v-if="success" class="success">
      Post published! <router-link to="/blog">View Blog</router-link>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <div class="form">
      <div class="field">
        <label>Title</label>
        <input v-model="form.title" placeholder="Post title" @input="generateSlug" />
      </div>

      <div class="field">
        <label>Slug (URL)</label>
        <input v-model="form.slug" placeholder="post-url-slug" />
        <small>This will be the URL: /blog/{{ form.slug }}</small>
      </div>

      <div class="field">
        <label>Summary</label>
        <textarea v-model="form.summary" placeholder="Brief description shown on the blog list page" rows="3" />
      </div>

      <div class="field">
        <label>Content</label>
        <textarea v-model="form.content" placeholder="Write your post here..." rows="15" />
      </div>

      <div class="field checkbox">
        <input type="checkbox" v-model="form.published" id="published" />
        <label for="published">Publish immediately</label>
      </div>

      <button @click="handleSubmit" :disabled="loading" class="btn btn-primary">
        {{ loading ? 'Publishing...' : 'Publish Post' }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API_BASE from '../api';

export default {
  name: 'NewPost',
  data() {
    return {
      form: {
        title: '',
        slug: '',
        summary: '',
        content: '',
        published: true,
      },
      loading: false,
      error: null,
      success: false,
    }
  },
  methods: {
    generateSlug() {
      this.form.slug = this.form.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    },
    async handleSubmit() {
      this.error = null;
      this.success = false;

      if (!this.form.title || !this.form.slug || !this.form.summary || !this.form.content) {
        this.error = 'All fields are required.';
        return;
      }

      this.loading = true;
      try {
        await axios.post(`${API_BASE}/api/blog/posts`, this.form);
        this.success = true;
        this.form = { title: '', slug: '', summary: '', content: '', published: true };
      } catch (err) {
        this.error = err.response?.data?.error || 'Something went wrong publishing the post.';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.new-post h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1A2B3C;
}

.form {
  background: white;
  border-radius: 10px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1A2B3C;
  margin-bottom: 6px;
}

input, textarea {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #D5DCE3;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #4A90D9;
}

small {
  display: block;
  font-size: 12px;
  color: #556677;
  margin-top: 4px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox input {
  width: auto;
}

.checkbox label {
  margin: 0;
  font-weight: 400;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary {
  background-color: #4A90D9;
  color: white;
}

.btn-primary:disabled {
  background-color: #B5C4D1;
  cursor: not-allowed;
}

.success {
  background: #E8F5E9;
  color: #2E7D32;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 14px;
}

.success a {
  color: #2E7D32;
  font-weight: 600;
}

.error {
  background: #FDEAEA;
  color: #C0392B;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>