<template>
  <div class="edit-post">
    <h1>Edit Post</h1>

    <div v-if="loading" class="loading">Loading post...</div>

    <div v-else-if="success" class="success">
      Post updated! <router-link to="/blog">View Blog</router-link>
    </div>

    <div v-else>
      <div v-if="error" class="error">{{ error }}</div>

      <div class="form">
        <div class="field">
          <label>Title</label>
          <input v-model="form.title" placeholder="Post title" />
        </div>

        <div class="field">
          <label>Slug (URL)</label>
          <input v-model="form.slug" placeholder="post-url-slug" />
          <small>This will be the URL: /blog/{{ form.slug }}</small>
        </div>

        <div class="field">
          <label>Summary</label>
          <textarea v-model="form.summary" rows="3" />
        </div>

        <div class="field">
          <label>Content</label>
          <textarea v-model="form.content" rows="15" />
        </div>

        <div class="field checkbox">
          <input type="checkbox" v-model="form.published" id="published" />
          <label for="published">Published</label>
        </div>

        <div class="button-row">
          <button @click="handleSave" :disabled="saving" class="btn btn-primary">
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </button>
          <router-link to="/blog" class="btn btn-secondary">Cancel</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import API_BASE from '../api';
import { isLoggedIn, getToken } from '../auth';

export default {
  name: 'EditPost',
  data() {
    return {
      form: {
        title: '',
        slug: '',
        summary: '',
        content: '',
        published: false,
      },
      loading: true,
      saving: false,
      error: null,
      success: false,
      originalSlug: '',
    }
  },
  async mounted() {
    if (!isLoggedIn()) {
      this.$router.push('/login');
      return;
    }
    try {
      const slug = this.$route.params.slug;
      this.originalSlug = slug;
      const response = await axios.get(`${API_BASE}/api/blog/posts/${slug}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      this.form = {
        title: response.data.title,
        slug: response.data.slug,
        summary: response.data.summary,
        content: response.data.content,
        published: response.data.published,
      };
    } catch (err) {
      this.error = 'Failed to load post';
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async handleSave() {
      this.error = null;
      this.saving = true;
      try {
        await axios.put(
          `${API_BASE}/api/blog/posts/${this.originalSlug}`,
          this.form,
          { headers: { Authorization: `Bearer ${getToken()}` } }
        );
        this.success = true;
      } catch (err) {
        this.error = err.response?.data?.error || 'Something went wrong saving the post';
      } finally {
        this.saving = false;
      }
    }
  }
}
</script>

<style scoped>
.edit-post h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1A2B3C;
}

.loading {
  text-align: center;
  padding: 48px 0;
  color: #556677;
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

.button-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  border: none;
}

.btn-primary {
  background-color: #4A90D9;
  color: white;
}

.btn-primary:disabled {
  background-color: #B5C4D1;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: white;
  color: #1A2B3C;
  border: 1px solid #D5DCE3;
}

.success {
  background: #E8F5E9;
  color: #2E7D32;
  padding: 12px 16px;
  border-radius: 6px;
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