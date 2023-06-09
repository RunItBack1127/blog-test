<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(`data`, () => {
  return queryContent().where({ _path: route.path }).findOne();
});

useContentHead(data);
</script>

<template>
  <blog-header></blog-header>
  <main>
    <section class="blog-title-container">
      <h1>{{ data.title }}</h1>
      <p class="date">
        {{ data.publishDate.month }} {{ data.publishDate.day }},
        {{ data.publishDate.year }}
      </p>
      <!--
      <p class="tagline">{{ data.tagline }}</p>
      <caption-image
        fullscreen
        :path="data.heroPath"
        :caption="data.heroCaption"
      />
      -->
    </section>
    <p>
      {{ data.intro }}
    </p>
    <ContentRenderer :value="data" />
  </main>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

main {
  margin: auto auto 50px;
  width: 90%;
  max-width: 1100px;

  :deep(p) {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.95rem;
    margin: 30px 0;
  }

  :deep(h2) {
    font-size: 2.5rem;
    margin: 50px 0 30px;

    a {
      color: #e9e9e9;
      font-weight: 600;
    }
  }

  :deep(a) {
    color: #ff5d5d;
    font-weight: 500;
  }

  :deep(img) {
    width: 100%;
  }

  :deep(section.blog-title-container) {
    margin: 90px 0 50px;

    h1 {
      font-size: 3.75rem;
      margin-bottom: 0.5rem;
      max-width: 30ch;
    }

    p.date {
      font-size: 1.25rem;
      font-weight: 400;
      margin-top: 0;
      color: #bb5d5d;
    }

    p.tagline {
      font-size: 1.25rem;
      font-weight: 300;
      font-style: italic;
      line-height: 2rem;
      max-width: 75ch;
      margin-bottom: 50px;
    }
  }
}
</style>
