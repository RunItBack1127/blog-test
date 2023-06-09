<template>
  <header>
    <div class="inner-header">
      <div id="logo-container">
        <NuxtLink to="/blog">
          <!--
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35"
            viewBox="0 -960 960 960"
            width="35"
            fill="#ff5d5d"
          >
            <path
              d="M186-252q-22.775 0-38.387-15.5Q132-283 132-306v-348q0-22.775 15.613-38.388Q163.225-708 186-708h588q22.775 0 38.388 15.612Q828-676.775 828-654v348q0 23-15.612 38.5Q796.775-252 774-252H186Zm0-22h588q12 0 22-10t10-22v-348q0-12-10-22t-22-10H186q-12 0-22 10t-10 22v348q0 12 10 22t22 10Zm140-60h308v-50H326v50ZM213-455h50v-50h-50v50Zm121 0h50v-50h-50v50Zm121 0h50v-50h-50v50Zm121 0h50v-50h-50v50Zm121 0h50v-50h-50v50ZM213-577h50v-50h-50v50Zm121 0h50v-50h-50v50Zm121 0h50v-50h-50v50Zm121 0h50v-50h-50v50Zm121 0h50v-50h-50v50ZM154-274v-412 412Z"
            />
          </svg>
	  -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#ff5d5d"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </NuxtLink>
      </div>
      <section>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/wpgreene"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RunItBack1127"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/share?url=https://wesg.dev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  //border-bottom: 1px solid rgba(187, 93, 93, 0.3);

  :deep(.inner-header) {
    width: 90%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    nav {
      display: none;

      ul {
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          a,
          button {
            font-size: 1rem;
          }
        }
      }
    }

    section {
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 35px;

        li {
          svg {
            fill: #ffffff;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
