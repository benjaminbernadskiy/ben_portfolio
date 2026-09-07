<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
    <div class="nav-island pointer-events-auto mx-auto flex max-w-5xl items-center rounded-full px-3 py-2">
      <NuxtLink
        to="/"
        class="nav-brand rounded-full px-3 py-2 text-sm font-semibold text-white"
        aria-label="Ben, home"
        :aria-current="route.path === '/' ? 'page' : undefined"
      >
        Ben<span class="text-sky-300">.</span>
      </NuxtLink>

      <nav class="mx-auto hidden items-center gap-1 text-sm font-medium text-white/70 sm:flex" aria-label="Primary navigation">
        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" class="nav-link rounded-full px-4 py-2">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="ml-auto hidden items-center gap-1 sm:flex">
        <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="nav-icon" aria-label="GitHub">
          <img src="/github.svg" alt="" class="h-5 w-5 brightness-0 invert" />
        </a>
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="nav-icon" aria-label="LinkedIn">
          <img src="/linkedin.svg" alt="" class="h-5 w-5 brightness-0 invert" />
        </a>
      </div>

      <button
        type="button"
        class="menu-button relative ml-auto grid h-10 w-10 place-items-center rounded-full sm:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span :class="['menu-line', menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1']"></span>
        <span :class="['menu-line', menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1']"></span>
      </button>
    </div>

    <div
      id="mobile-menu"
      :class="['mobile-menu pointer-events-auto', menuOpen ? 'is-open' : '']"
      :aria-hidden="!menuOpen"
    >
      <nav class="flex flex-col items-center gap-2" aria-label="Mobile navigation">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="item.href"
          :to="item.href"
          class="mobile-nav-link"
          :style="{ transitionDelay: menuOpen ? `${120 + index * 55}ms` : '0ms' }"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="mt-8 flex justify-center gap-3">
        <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="social-pill">GitHub</a>
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="social-pill">LinkedIn</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onBeforeUnmount, ref, watch } from "vue";
import { usePortfolioStore } from "~/stores/portfolio";

const store = usePortfolioStore();
const { personal } = storeToRefs(store);
const route = useRoute();
const menuOpen = ref(false);
const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
];

watch(menuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "";
});

watch(() => route.fullPath, () => {
  menuOpen.value = false;
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>
