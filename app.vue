<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Montserrat, sans-serif;
  color: #e9e9e9;
  background: #252525;
  overflow-x: hidden;
}

main {
  width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #e9e9e9;
}

h2 {
  a {
    pointer-events: none;
  }
}

button {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
}

code {
  font-family: "JetBrains Mono", sans-serif;
  font-size: 1.1rem;
  background: #191919;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 0.5rem;
}

pre {
  font-family: "JetBrains Mono", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5rem;
  padding: 0.5rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: #191919;

  code {
    padding: 0;
  }
}
</style>
