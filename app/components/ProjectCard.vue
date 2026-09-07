<template>
  <article :class="['portfolio-card group', project.image ? '' : 'portfolio-card-text-only']">
    <figure
      v-if="project.image"
      :class="[
        'portfolio-card-media',
        project.imageTheme === 'school' ? 'bg-[#c8ae67] p-4' : 'bg-slate-200',
      ]"
    >
      <div v-if="project.metricImage" class="grid h-full min-h-96 grid-rows-2 bg-white">
        <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
        <img :src="project.metricImage" :alt="`Traffic analytics for ${project.title}`" class="h-full w-full border-t border-slate-200 object-contain" />
      </div>
      <img
        v-else
        :src="project.image"
        :alt="project.title"
        :class="[
          'h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.025]',
          project.imageFit === 'contain' ? 'object-contain p-6 sm:p-10' : 'object-cover',
        ]"
      />
    </figure>

    <div v-else class="flex min-h-96 flex-col justify-between bg-sky-700 p-8 text-white sm:p-10">
      <p class="text-sm font-semibold text-sky-100">{{ project.cardKicker ?? "Engineering project" }}</p>
      <div>
        <p class="max-w-sm text-3xl font-semibold sm:text-4xl">{{ project.impact }}</p>
        <p class="mt-4 text-sm text-sky-100">{{ project.credit }}</p>
      </div>
    </div>

    <div class="portfolio-card-body">
      <div>
        <p v-if="project.cardKicker" class="eyebrow">{{ project.cardKicker }}</p>
        <h3 :class="['text-3xl font-semibold text-slate-950 sm:text-4xl', project.cardKicker ? 'mt-4' : '']">{{ project.title }}</h3>
        <p class="mt-5 text-base leading-7 text-slate-600">{{ project.description }}</p>
        <p v-if="project.metric" class="mt-6 text-xl font-semibold text-sky-700">{{ project.metric }}</p>
      </div>

      <div class="mt-8 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="portfolio-tag">{{ tag }}</span>
      </div>

      <div v-if="hasCaseStudy || project.github || project.link" class="mt-8 flex flex-wrap items-center gap-3">
        <NuxtLink v-if="hasCaseStudy" :to="`/projects/${project.slug}`" class="card-button">
          {{ project.caseStudyLabel ?? "See the build" }}
          <span aria-hidden="true">↗</span>
        </NuxtLink>
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="text-link">Code</a>
        <a v-if="project.link && !hasCaseStudy" :href="project.link" target="_blank" rel="noopener noreferrer" class="text-link">
          {{ project.linkLabel ?? "Open project" }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: { type: Object, required: true },
});

const hasCaseStudy = computed(() => !!props.project.caseStudy?.enabled);
</script>
