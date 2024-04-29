<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PaintingIcon from '@/assets/svg/painting.svg'
import FavoritesComponent from '@/components/FavoritesComponent.vue'
</script>

<template>
  <header>
    <nav>
      <img aria-hidden="true" class="rembrant-portrait" alt="Rembrandt" src="./assets/img/133485775-rembrandt-1606-1669-il-était-un-dessinateur-peintre-et-graveur-hollandais-dessin-de-ligne-inverted.jpg" />
      <PaintingIcon class="svg-logo" />
      <RouterLink to="/"><h1 class="site-name">.:: My ARt Gallery //</h1></RouterLink>
      <FavoritesComponent />
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  background: var(--color-background-header-start) linear-gradient(135deg, var(--color-background-header-start) 0%, var(--color-background-header-end) 100%);
  background-color: var(--color-background-header-start);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  height: var(--height-header);
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-md);
}

nav {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: var(--height-header);
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
  margin: 0 auto 0 0;
}

nav a:first-of-type {
  border: 0;
}

nav h1 {
  position: relative;
  z-index: 2;
}

.svg-logo {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-30deg);
  width: 96px;
  fill: var(--stone-200);
  opacity: .3;
}

.site-name {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-2xl);
  color: var(--stone-200);
  height: var(--height-header);
}

.rembrant-portrait {
  position: absolute;
  mix-blend-mode: color-dodge;
  transition: left var(--transition-smooth), top var(--transition-smooth);
  top: -230%;
  left: 30px;
  transform: scale(.9) rotate(7deg);
  opacity: .15;
  width: 100%
}

@media (--pad) {
  .rembrant-portrait {
    top: -490%;
    left: -50px;
  }
}

@media (--laptop) {
  .rembrant-portrait {
    top: -540%;
    left: -50px;
  }

  nav {
    width: var(--breakpoint-laptop);
  }

  main {
    gap: var(--spacing-xl);
    padding: var(--spacing-xl) 0;
    width: var(--breakpoint-laptop);
  }
}

@media (--desktop) {
  .rembrant-portrait {
    top: -680%;
    left: -50px;
  }

  nav {
    width: var(--breakpoint-desktop);
  }

  main {
    gap: var(--spacing-2xl);
    padding: var(--spacing-2xl) 0;
    width: var(--breakpoint-desktop);
  }
}
</style>
