<script setup lang="ts">
import { ref } from "vue";

const verifyCopy = ref(false);

function toggleVerifyCopy() {
  verifyCopy.value = true;
  setTimeout(() => (verifyCopy.value = false), 1000);
}
</script>

<template>
  <article>
    <button :class="verifyCopy ? 'copied' : ''" @click="toggleVerifyCopy()">
      <svg
        v-show="!verifyCopy"
        fill="#FFFFFF"
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        version="1.1"
        data-view-component="true"
      >
        <path
          d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
        ></path>
        <path
          d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
        ></path>
      </svg>
      <svg
        v-show="verifyCopy"
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        version="1.1"
        fill="#FFFFFF"
        data-view-component="true"
        class="octicon octicon-check js-clipboard-check-icon color-fg-success m-2 d-none"
      >
        <path
          d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
        ></path>
      </svg>
    </button>
    <code>
      <slot />
    </code>
    <!--
    <button :class="verifyCopy ? 'copied' : ''" @click="toggleVerifyCopy()">
      <svg
        v-show="!verifyCopy"
        fill="#FFFFFF"
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        version="1.1"
        data-view-component="true"
      >
        <path
          d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
        ></path>
        <path
          d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
        ></path>
      </svg>
      <svg
        v-show="verifyCopy"
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        version="1.1"
        fill="#FFFFFF"
        data-view-component="true"
        class="octicon octicon-check js-clipboard-check-icon color-fg-success m-2 d-none"
      >
        <path
          d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
        ></path>
      </svg>
    </button>
    -->
  </article>
</template>

<style scoped lang="scss">
article {
  font-family: "JetBrains Mono", sans-serif;
  padding: 0 1rem;
  border-radius: 0.5rem;
  background: #191919;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  :deep(button) {
    position: absolute;
    top: 25px;
    right: 30px;

    &.copied {
      svg {
        fill: #bb5d5d;
        opacity: 1;
      }
    }

    svg {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  :deep(code) {
    display: block;
    width: 100%;

    p {
      font-size: 1.1rem;
      font-weight: 300;
      padding-right: 1rem;
    }
  }

  /*
  :deep(button) {
    position: absolute;
    top: calc(50% - 22.5px);
    right: 1.25rem;
    background: #191919;
    border: 1px solid #191919;
    border-radius: 0.25rem;
    padding: 10px 15px;
    transition: opacity 80ms ease-in;

    &.copied {
      border-color: rgba(85, 85, 85, 0.5);
      pointer-events: none;
    }

    &:hover {
      border-color: #555555;
    }

    svg {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  */
}
</style>
