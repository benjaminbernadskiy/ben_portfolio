<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      showBackground
        ? 'border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur'
        : 'border-b border-transparent bg-transparent text-white',
    ]"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
      <NuxtLink
        to="/"
        class="text-xl font-semibold transition-opacity hover:opacity-70"
      >
        {{ personal.name }}
      </NuxtLink>

      <nav class="ml-auto hidden items-center gap-8 text-sm font-medium sm:flex">
        <NuxtLink to="/#about" class="transition-opacity hover:opacity-60">
          About
        </NuxtLink>
        <NuxtLink to="/#projects" class="transition-opacity hover:opacity-60">
          Projects
        </NuxtLink>
        <NuxtLink to="/#experience" class="transition-opacity hover:opacity-60">
          Experience
        </NuxtLink>
      </nav>

      <div class="ml-5 flex items-center gap-1">
        <a
          :href="personal.github"
          target="_blank"
          class="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-black/10"
          aria-label="GitHub"
        >
          <img
            src="/github.svg"
            alt=""
            :class="[
              'h-5 w-5 transition-all',
              showBackground
                ? 'opacity-70'
                : 'brightness-0 invert opacity-90',
            ]"
          />
        </a>
        <a
          :href="personal.linkedin"
          target="_blank"
          class="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-black/10"
          aria-label="LinkedIn"
        >
          <img
            src="/linkedin.svg"
            alt=""
            :class="[
              'h-5 w-5 transition-all',
              showBackground
                ? 'opacity-70'
                : 'brightness-0 invert opacity-90',
            ]"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { usePortfolioStore } from "~/stores/portfolio";

const store = usePortfolioStore();
const { personal } = storeToRefs(store);
const route = useRoute();
const isScrolled = ref(false);

const showBackground = computed(() => route.path !== "/" || isScrolled.value);

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 32;
};

onMounted(() => {
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollState);
});
</script>
