<template>
  <a
    :href="repo.url"
    target="_blank"
    class="card rounded-lg border border-white/10 bg-white/[0.04] shadow-lg shadow-black/20 transition-all hover:border-cyan-300/40 hover:bg-white/[0.07] group no-underline"
  >
    <div class="card-body p-5">
      <div class="flex items-start justify-between">
        <h3
          class="card-title text-base font-semibold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-2"
        >
          <img
            src="/book-open.svg"
            alt="Repository"
            class="w-[18px] h-[18px] opacity-70"
          />
          {{ repo.name }}
        </h3>
      </div>
      <p class="text-sm text-slate-400 mt-2 line-clamp-2 min-h-[2.5rem]">
        {{ repo.description }}
      </p>

      <div
        class="flex items-center gap-4 mt-4 text-xs font-medium text-slate-500"
      >
        <div class="flex items-center gap-1.5" v-if="repo.language">
          <span class="w-3 h-3 rounded-full bg-cyan-300 block"></span>
          {{ repo.language }}
        </div>
        <div
          class="flex items-center gap-1.5 hover:text-yellow-500 transition-colors group/star"
        >
          <img src="/star.svg" alt="Stars" class="w-3.5 h-3.5 opacity-70 group-hover/star:brightness-100" />
          {{ repo.stars }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  repo: {
    type: Object,
    required: true,
  },
});
</script>
