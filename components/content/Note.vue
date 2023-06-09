<template>
  <article>
    <p><slot /></p>
  </article>
</template>

<style scoped lang="scss">
article {
  padding: 0.5px 2rem;
  border-radius: 1rem;
  background: #303030;

  :deep(p) {
    font-size: 1.25rem;

    strong {
      font-weight: 500;
    }
  }
}
</style>
