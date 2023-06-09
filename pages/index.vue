<template>
  <site-header></site-header>
  <keyboard></keyboard>
  <main>
    <article>
      <section class="intro-container">
        <h1>Hi, I'm Weston!</h1>
        <p>
          I'm a professional printer fixer, in a one-way relationship with
          <span class="language">Rust</span> and
          <span class="language">Nuxt</span>. Based in North Carolina (there's
          dozens of us, I swear).
        </p>
        <p>
          I write code that runs on
          <span class="failing" title="Pending review">tens of devices</span>
          - all this and even more!
        </p>
        <nav>
          <NuxtLink to="/blog">The Blog!</NuxtLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/share?url=https://wesg.dev"
          >
            <span
              >Share
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="22.5"
                fill="#1da1f2"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                /></svg
            ></span>
          </a>
        </nav>
      </section>
      <!--
      <section class="photo-container">
        <img src="/SiteHeadshot.jpg" />
      </section>
      -->
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: 75px auto 0;

  article {
    max-width: 750px;
    border-radius: 1rem;
    padding: 2rem 2rem 2rem 0;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &:not(:last-child) {
        margin-right: 50px;
      }

      &.intro-container {
        h1 {
          position: relative;
          font-size: 4.75rem;
          margin-bottom: 45px;

          &::after {
            content: "👋";
            position: absolute;
            font-size: 0.5em;
            top: 25%;
            transform: translateX(20px);
            display: none;
          }
        }

        p {
          font-size: 1.35rem;
          line-height: 2rem;
          font-weight: 300;
          margin-bottom: 15px;

          span {
            &.language {
              font-weight: 500;
              color: #bb5d5d;
            }

            &.failing {
              cursor: default;
              text-decoration: dotted underline;
            }
          }
        }

        nav {
          margin-top: 40px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 20px;

          a {
            background: #191919;
            border: 1px solid rgba(150, 150, 150, 0.2);
            font-size: 1.5rem;
            font-weight: 400;
            padding: 20px 0;
            border-radius: 0.5rem;
            text-align: center;

            &:hover {
              background: rgba(25, 25, 25, 0.75);
            }

            span {
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                margin-left: 17.5px;
              }
            }
          }
        }
      }

      &.photo-container {
        filter: drop-shadow(rgba(0, 0, 0, 0.75) 0px 3px 20px);
        margin-left: 100px;

        img {
          clip-path: circle();
          height: 100%;
        }
      }
    }
  }
}
</style>
