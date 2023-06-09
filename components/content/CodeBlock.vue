<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  filename?: String;
}>();

const verifyCopy = ref(false);

function toggleVerifyCopy() {
  verifyCopy.value = true;
  setTimeout(() => (verifyCopy.value = false), 1000);
}
</script>

<template>
  <article>
    <header v-if="filename">
      <span>{{ filename }}</span>
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
    </header>
    <section :class="!filename ? 'no-filename' : ''">
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
          fill="#FFFFFF"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path
            d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
          ></path>
        </svg>
      </button>
      <ContentSlot :use="$slots.default" unwrap="pre"> </ContentSlot>
    </section>
  </article>
</template>

<style scoped lang="scss">
article {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  overflow: auto;

  :deep(header) {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: auto 20px;
    background: #161616;
    padding: 15px 3.25rem 15px 2rem;
    border-radius: 0.5rem 0.5rem 0 0;

    span {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      padding: 0.25rem 0;
      font-weight: 300;
      color: #ffffff;
      font-family: "JetBrains Mono", sans-serif;
    }

    button {
      position: absolute;
      top: 20px;
      right: 30px;

      &.copied {
        pointer-events: none;

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
  }

  :deep(section) {
    background: #191919;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 0 0 0.5rem 0.5rem;
    overflow: auto;

    &.no-filename {
      border-radius: 0.5rem;

      button {
        display: block;
      }
    }

    button {
      display: none;
      position: absolute;
      top: 30px;
      right: 30px;

      &.copied {
        pointer-events: none;

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

    pre {
      width: 100%;
      border-radius: 0.5rem;

      code {
        span {
          min-width: 500px;
        }
      }
    }
  }
}
</style>
