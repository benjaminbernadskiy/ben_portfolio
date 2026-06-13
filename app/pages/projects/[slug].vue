<template>
  <main v-if="project" class="bg-white text-slate-900">
    <section class="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pt-36">
      <div class="mx-auto max-w-7xl">
        <NuxtLink
          to="/#projects"
          class="inline-flex border-b border-slate-400 pb-1 text-sm font-medium text-slate-600 transition-opacity hover:opacity-55"
        >
          Back to projects
        </NuxtLink>

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Robotics project
            </p>
            <h1 class="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-slate-950 sm:text-7xl lg:text-8xl">
              {{ project.title }}
            </h1>
          </div>

          <div class="pb-1">
            <p class="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              {{ project.caseStudy.heroSummary }}
            </p>
            <div class="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
            <div class="mt-8 flex flex-wrap gap-6">
              <a
                v-for="link in project.caseStudy.links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 transition-opacity hover:opacity-55"
              >
                {{ link.label }} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <figure class="bg-[#eef0f2] px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
      <div class="mx-auto flex max-w-7xl items-center justify-center">
        <img
          :src="project.image"
          :alt="project.title"
          :class="[
            'max-h-[46rem] w-full',
            project.imageFit === 'contain' ? 'object-contain' : 'object-cover',
          ]"
        />
      </div>
    </figure>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Overview
            </p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              The build
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {{ project.caseStudy.overview }}
          </p>
        </div>

        <div class="mt-16 grid border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(result, index) in project.caseStudy.results"
            :key="result.metric"
            :class="[
              'border-b border-slate-300 py-7 sm:px-7 lg:border-b-0',
              index === 0 ? 'sm:pl-0' : '',
              index < project.caseStudy.results.length - 1
                ? 'lg:border-r'
                : '',
            ]"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {{ result.metric }}
            </p>
            <p class="mt-3 text-lg font-semibold text-slate-950">
              {{ result.value }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="project.caseStudy.focus"
      class="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
    >
      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
            {{ project.caseStudy.focus.label }}
          </p>
          <h2 class="mt-5 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            {{ project.caseStudy.focus.title }}
          </h2>
          <figure class="mt-8 overflow-hidden bg-[#f4f1e8]">
            <img
              src="/inverse-kinematics-leg.png"
              alt="A two-joint robot dog leg bending to place its foot at a target point"
              class="w-full"
            />
          </figure>
        </div>

        <div>
          <p class="text-lg leading-8 text-slate-300">
            {{ project.caseStudy.focus.body }}
          </p>
          <ol class="mt-10 border-t border-white/25">
            <li
              v-for="(step, index) in project.caseStudy.focus.steps"
              :key="step"
              class="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/25 py-6"
            >
              <span class="text-sm font-semibold text-sky-300">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <span class="leading-7 text-slate-200">{{ step }}</span>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              What is inside it
            </p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Hardware and control stack
            </h2>
          </div>

          <div class="grid gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <h3 class="text-xl font-semibold text-slate-950">
                The physical dog
              </h3>
              <div class="mt-5 border-t border-slate-400">
                <div
                  v-for="part in project.caseStudy.hardware"
                  :key="part.name"
                  class="border-b border-slate-300 py-5"
                >
                  <p class="font-semibold text-slate-950">{{ part.name }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    {{ part.detail }}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-slate-950">
                The control stack
              </h3>
              <div class="mt-5 border-t border-slate-400">
                <div
                  v-for="item in project.caseStudy.software"
                  :key="item.name"
                  class="border-b border-slate-300 py-5"
                >
                  <p class="font-semibold text-slate-950">{{ item.name }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    {{ item.detail }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Build sequence
            </p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Build process
            </h2>
          </div>

          <ol class="border-t border-slate-400">
            <li
              v-for="(step, index) in project.caseStudy.buildProcess"
              :key="step.phase"
              class="grid gap-4 border-b border-slate-300 py-7 sm:grid-cols-[3rem_0.6fr_1fr] sm:gap-7"
            >
              <span class="text-sm font-semibold text-sky-700">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <h3 class="font-semibold text-slate-950">{{ step.phase }}</h3>
              <p class="leading-7 text-slate-600">{{ step.note }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
          Where it got difficult
        </p>
        <h2 class="mt-4 max-w-3xl text-3xl font-semibold text-slate-950 sm:text-4xl">
          Calibration, gait timing, and keeping eight servos under control
        </h2>

        <div class="mt-12 border-t border-slate-400">
          <article
            v-for="(item, index) in project.caseStudy.challenges"
            :key="item.problem"
            class="grid gap-5 border-b border-slate-300 py-8 lg:grid-cols-[3rem_1fr_1fr] lg:gap-10"
          >
            <span class="text-sm font-semibold text-sky-700">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Problem
              </p>
              <p class="mt-3 leading-7 text-slate-700">{{ item.problem }}</p>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                What I did
              </p>
              <p class="mt-3 leading-7 text-slate-700">{{ item.solution }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-900 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              What changed how I think
            </p>
            <h2 class="mt-4 text-3xl font-semibold sm:text-4xl">
              Calibration lessons
            </h2>
            <div class="mt-6 border-t border-white/25">
              <div
                v-for="(lesson, index) in project.caseStudy.lessonsLearned"
                :key="lesson"
                class="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/25 py-5"
              >
                <span class="text-sm font-semibold text-sky-300">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
                <p class="leading-7 text-slate-300">{{ lesson }}</p>
              </div>
            </div>
          </div>

          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              Next version
            </p>
            <h2 class="mt-4 text-3xl font-semibold sm:text-4xl">
              Planned inverse-kinematics controls
            </h2>
            <div class="mt-6 border-t border-white/25">
              <div
                v-for="(improvement, index) in project.caseStudy.futureImprovements"
                :key="improvement"
                class="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/25 py-5"
              >
                <span class="text-sm font-semibold text-sky-300">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
                <p class="leading-7 text-slate-300">{{ improvement }}</p>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/#projects"
          class="mt-14 inline-flex border-b border-white pb-1 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-55"
        >
          Back to projects
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { usePortfolioStore } from "~/stores/portfolio";

const route = useRoute();
const store = usePortfolioStore();

const slug = Array.isArray(route.params.slug)
  ? route.params.slug[0]
  : route.params.slug;

const project = store.projectBySlug(slug);

if (!project || !project.caseStudy?.enabled) {
  throw createError({
    statusCode: 404,
    statusMessage: "Case study not found",
  });
}

useHead({
  title: `${project.title} | Case Study`,
  meta: [
    {
      name: "description",
      content: project.description,
    },
  ],
});
</script>
