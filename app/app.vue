<template>
  <div class="min-h-screen bg-white text-slate-900 selection:bg-sky-200">
    <Header />
    <NuxtPage />

    <footer class="border-t border-slate-200 bg-white py-10 text-center text-sm text-slate-500">
      <p>Projects, experiments, and notes.</p>
      <p class="mt-2">
        &copy; {{ currentYear }} {{ personal.name }}. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePortfolioStore } from "~/stores/portfolio";

const store = usePortfolioStore();
const { personal } = storeToRefs(store);
const currentYear = new Date().getFullYear();
</script>
