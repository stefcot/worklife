<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!--img alt="Vue logo" class="logo" src="./assets/svg/logo.svg" width="125" height="125" /-->
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background: var(--color-background-header);
  height: var(--height-header);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

main {
  max-width: 100%;
  margin: 0 auto;
  padding: var(--spacing-md);
}

nav {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

nav a.router-link-exact-active {
  color: var(--color-link-active);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-paragraph-primary);
}

nav a:first-of-type {
  border: 0;
}

@media (--laptop) {
  nav {
    width: var(--breakpoint-laptop);
  }

  main {
    padding: var(--spacing-xl) 0;
    max-width: var(--breakpoint-laptop);
  }
}

@media (--desktop) {
  nav {
    width: var(--breakpoint-desktop);
  }

  main {
    padding: var(--spacing-2xl) 0;
    max-width: var(--breakpoint-desktop);
  }
}
</style>
