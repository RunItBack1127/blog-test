<script setup lang="ts">
defineProps<{
  path: string;
  caption: string;
  fullscreen: boolean;
}>();
</script>

<template>
  <figure :class="fullscreen ? 'fullscreen' : ''">
    <img :src="path" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped lang="scss">
figure {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;

  &.fullscreen {
    img {
      width: 100%;
    }
  }

  img {
    width: 750px;
    margin-bottom: 0.75rem;
  }

  figcaption {
    font-size: 0.85rem;
    color: #9f9f9f;
  }
}
</style>
