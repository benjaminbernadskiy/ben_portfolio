<template>
  <article
    :class="[
      'portfolio-card group overflow-hidden',
      project.image ? '' : 'portfolio-card-text-only',
    ]"
  >
    <figure
      v-if="project.image"
      :class="[
        'overflow-hidden md:min-h-[28rem]',
        project.imageTheme === 'school'
          ? 'flex items-center justify-center bg-[#c8ae67] p-3 sm:p-5'
          : 'bg-slate-200',
      ]"
    >
      <div
        v-if="project.metricImage"
        class="grid h-full min-h-[28rem] grid-rows-2 bg-white"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="h-full w-full object-cover"
        />
        <img
          :src="project.metricImage"
          :alt="`Traffic analytics for ${project.title}`"
          class="h-full w-full border-t border-slate-300 object-contain"
        />
      </div>
      <img
        v-else
        :src="project.image"
        :alt="project.title"
        :class="[
          'h-full w-full',
          project.imageFit === 'contain' ? 'object-contain' : 'object-cover',
          project.imageTheme === 'school'
            ? 'max-h-[27rem] max-w-[30rem] bg-white'
            : '',
        ]"
      />
    </figure>

    <div
      v-else
      class="flex min-h-[19rem] flex-col justify-between bg-sky-700 p-7 text-white sm:p-10 lg:p-12"
    >
      <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-100">
        {{ project.cardKicker ?? "Engineering project" }}
      </p>
      <div>
        <p class="max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
          {{ project.impact }}
        </p>
        <p class="mt-4 text-sm text-sky-100">
          {{ project.credit }}
        </p>
      </div>
    </div>

    <div class="portfolio-card-body flex flex-col justify-center">
      <div>
        <h2 class="text-3xl font-semibold text-slate-950 sm:text-4xl">
          {{ project.title }}
        </h2>
        <p class="portfolio-card-description mt-5 text-base">
          {{ project.description }}
        </p>
        <p
          v-if="project.metric"
          class="mt-6 text-2xl font-semibold text-sky-700"
        >
          {{ project.metric }}
        </p>
        <div
          v-if="project.impact || project.credit"
          class="mt-6 grid border-t border-slate-300 sm:grid-cols-2"
        >
          <p
            v-if="project.impact"
            class="border-b border-slate-300 py-4 text-sm font-semibold text-slate-950 sm:border-b-0 sm:border-r sm:pr-4"
          >
            {{ project.impact }}
          </p>
          <p
            v-if="project.credit"
            class="py-4 text-sm font-semibold text-slate-950 sm:pl-4"
          >
            {{ project.credit }}
          </p>
        </div>
      </div>

      <div class="mt-7 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="portfolio-tag">
          {{ tag }}
        </span>
      </div>

      <div
        v-if="hasCaseStudy || project.github || project.link"
        class="mt-9 flex flex-wrap gap-5"
      >
        <NuxtLink
          v-if="hasCaseStudy"
          :to="`/projects/${project.slug}`"
          class="inline-flex items-center border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition-opacity hover:opacity-60"
        >
          {{ project.caseStudyLabel ?? "See the build" }}
        </NuxtLink>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="inline-flex items-center border-b border-slate-400 pb-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-600 transition-opacity hover:opacity-60"
        >
          Code
        </a>
        <a
          v-if="project.link && !hasCaseStudy"
          :href="project.link"
          target="_blank"
          class="inline-flex items-center border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition-opacity hover:opacity-60"
        >
          {{ project.linkLabel ?? "Live" }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const hasCaseStudy = computed(() => !!props.project.caseStudy?.enabled);
</script>
