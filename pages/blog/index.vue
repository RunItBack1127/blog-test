<script setup lang="ts">
const route = useRoute();

const { data: posts } = await useAsyncData(`data`, () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <site-header></site-header>
  <keyboard></keyboard>
  <main>
    <h1>Blogs</h1>
    <section>
      <article v-for="(post, postIdx) in posts" v-bind:key="postIdx">
        <header>
          <h2>{{ post.title }}</h2>
          <span>{{ post.publishDate.month }} {{ post.publishDate.year }}</span>
        </header>
        <div class="post-content-container">
          <p>{{ post.intro }}</p>
          <NuxtLink :to="post._path">Read more</NuxtLink>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 90%;
  max-width: 1100px;
  margin: 90px auto 0;

  :deep(h1) {
    font-size: 3.75rem;
    margin-bottom: 50px;
  }

  :deep(section) {
    width: 100%;
    border-radius: 0.5rem;

    article {
      width: 100%;
      max-width: 1000px;
      padding: 2.25rem 3rem;
      border-radius: 1rem;
      background: rgba(21, 21, 21, 0.4);
      margin-bottom: 30px;

      header {
        width: 100%;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.5);

        h2 {
          font-size: 2.25rem;
          line-height: 2.5rem;
          margin-bottom: 0.75rem;
        }

        span {
          color: #bb5d5d;
          font-size: 1.2rem;
          font-weight: 300;
        }
      }
    }

    .post-content-container {
      p {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.9rem;
        margin-bottom: 1.5rem;
        opacity: 0.6;
      }

      a {
        font-size: 1.1rem;
        color: #bb5d5d;
        border-bottom: 1px solid #bb5d5d;
      }
    }
  }
}
</style>
