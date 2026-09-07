<template>
  <main id="main-content" class="overflow-hidden bg-white text-slate-950">
    <section class="hero-shell relative min-h-screen overflow-hidden bg-[#131209] text-white">
      <img
        :src="personal.heroImage"
        :alt="`${personal.name} working on an engineering project`"
        class="absolute inset-0 h-full w-full object-cover object-[38%_center] sm:object-center"
      />
      <div class="hero-scrim absolute inset-0"></div>

      <div class="relative mx-auto flex min-h-screen w-full max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-10">
        <div class="hero-copy">
          <p class="hero-enter hero-eyebrow text-sm font-semibold text-white/75">
            Student portfolio
          </p>
          <h1 class="hero-title hero-enter mt-5 text-5xl font-semibold sm:text-7xl lg:text-8xl">
            {{ personal.name }}
          </h1>
          <p class="hero-enter mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            {{ personal.title }}
          </p>
          <div class="hero-enter mt-8">
            <a href="#about" class="primary-button">
              More about me
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="scroll-mt-32 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="eyebrow" data-reveal>About me</p>

        <div class="mt-6 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div data-reveal>
            <h2 class="max-w-3xl text-4xl font-semibold sm:text-5xl">
              I'm a high school student building robots and electronics.
            </h2>
            <p class="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
              {{ personal.bio }}
            </p>
          </div>

          <div class="relative mx-auto w-full max-w-lg lg:ml-auto" data-reveal>
            <div
              class="profile-stage"
              @mouseenter="pauseRotationTimer"
              @mouseleave="startRotationTimer"
              @focusin="pauseRotationTimer"
              @focusout="startRotationTimer"
            >
              <div
                :class="[
                  'profile-rotator',
                  activeGalleryImage.isLandscape
                    ? 'profile-rotator-landscape'
                    : 'profile-rotator-portrait',
                ]"
                aria-label="Profile photos"
              >
                <div
                  class="profile-track"
                  :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
                >
                  <div
                    v-for="(image, index) in galleryImages"
                    :key="image.src"
                    class="profile-slide"
                  >
                    <img
                      :src="image.src"
                      :alt="`${personal.name}, ${image.label.toLowerCase()}`"
                      class="h-full w-full object-cover"
                      @error="markGalleryImageMissing(index)"
                    />
                    <div
                      v-if="missingGalleryImages[index]"
                      class="absolute inset-0 grid place-items-center bg-slate-900 text-5xl font-semibold text-white"
                    >
                      {{ personalInitial }}
                    </div>
                  </div>
                </div>

                <p class="carousel-count" aria-live="polite">
                  {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
                </p>

                <div class="carousel-controls" aria-label="Profile photo controls">
                  <button
                    type="button"
                    class="carousel-arrow"
                    aria-label="Previous profile photo"
                    @click="showPreviousImage"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <div class="flex items-center gap-2">
                    <button
                      v-for="(image, index) in galleryImages"
                      :key="image.src"
                      type="button"
                      :aria-label="`Show ${image.label}`"
                      :aria-pressed="currentImageIndex === index"
                      :class="['gallery-dot', currentImageIndex === index ? 'is-active' : '']"
                      @click="selectGalleryImage(index)"
                    />
                  </div>

                  <button
                    type="button"
                    class="carousel-arrow"
                    aria-label="Next profile photo"
                    @click="showNextImage"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="scroll-mt-32 bg-[#f2f3f4] px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="section-intro" data-reveal>
          <p class="eyebrow">Projects</p>
          <h2 class="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            What I've been building
          </h2>
        </div>

        <div class="mt-12">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            data-reveal
          />
        </div>
      </div>
    </section>

    <section id="experience" class="scroll-mt-32 bg-[#131209] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div data-reveal>
            <p class="eyebrow eyebrow-dark">Experience</p>
            <h2 class="mt-4 max-w-md text-4xl font-semibold sm:text-5xl">
              Work and internships
            </h2>
            <p class="mt-6 max-w-md leading-7 text-white/60">
              Programs I've worked in through SITHS and the Summer Youth Employment Program.
            </p>
          </div>

          <div class="experience-list" data-reveal>
            <article
              v-for="(item, index) in experience"
              :key="`${item.role}-${item.organization}`"
              class="experience-row"
            >
              <p class="text-sm font-medium text-white/45">0{{ index + 1 }}</p>
              <div>
                <p class="text-sm font-semibold text-sky-300">{{ item.type }}</p>
                <h3 class="mt-2 text-xl font-semibold sm:text-2xl">{{ item.role }}</h3>
                <p class="mt-2 text-white/60">{{ item.organization }}</p>
              </div>
              <p class="text-sm font-medium text-white/55">{{ item.dates }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { usePortfolioStore } from "~/stores/portfolio";

useHead({
  title: "Ben | About Me Portfolio",
  meta: [
    {
      name: "description",
      content: "About me portfolio for Ben, featuring robotics and embedded systems projects.",
    },
  ],
});

const store = usePortfolioStore();
const { personal, experience, projects } = storeToRefs(store);
const featuredProjects = computed(() =>
  projects.value
    .filter((project) => project.featured || project.caseStudy?.enabled)
    .sort(
      (projectA, projectB) =>
        Number(projectB.slug === "ftc-robotics") -
        Number(projectA.slug === "ftc-robotics"),
    ),
);

const personalInitial = computed(() => personal.value.name?.charAt(0) ?? "B");
const configuredGalleryImages = computed(
  () => personal.value.galleryImages ?? [{ src: personal.value.profileImage, label: "profile photo" }],
);
const resolvedGalleryImages = ref([]);
const galleryImages = computed(() =>
  resolvedGalleryImages.value.length
    ? resolvedGalleryImages.value
    : configuredGalleryImages.value.map(normalizeGalleryImage),
);
const currentImageIndex = ref(0);
const activeGalleryImage = computed(
  () => galleryImages.value[currentImageIndex.value] ?? normalizeGalleryImage({ src: personal.value.profileImage, label: "profile photo" }),
);
const missingGalleryImages = ref({});
let rotationTimer;
let revealObserver;

const landscapeImagePattern = /(pfp\d+l)(\.[a-z0-9]+)$/i;
const portraitImagePattern = /(pfp\d+)(\.[a-z0-9]+)$/i;

function normalizeGalleryImage(image) {
  return { ...image, isLandscape: landscapeImagePattern.test(image.src) };
}

function landscapeVariantFor(src) {
  if (landscapeImagePattern.test(src)) return src;
  return src.replace(portraitImagePattern, "$1l$2");
}

function imageExists(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

const resolveLandscapeVariants = async () => {
  resolvedGalleryImages.value = await Promise.all(
    configuredGalleryImages.value.map(async (image) => {
      const landscapeSrc = landscapeVariantFor(image.src);
      if (landscapeSrc !== image.src && landscapeSrc !== personal.value.heroImage && (await imageExists(landscapeSrc))) {
        return { ...image, src: landscapeSrc, isLandscape: true };
      }
      return normalizeGalleryImage(image);
    }),
  );
};

const markGalleryImageMissing = (index) => {
  missingGalleryImages.value = { ...missingGalleryImages.value, [index]: true };
};

const startRotationTimer = () => {
  window.clearInterval(rotationTimer);
  if (!galleryImages.value.length) return;
  rotationTimer = window.setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length;
  }, 5000);
};

const pauseRotationTimer = () => {
  window.clearInterval(rotationTimer);
};

const selectGalleryImage = (index) => {
  currentImageIndex.value = index;
  startRotationTimer();
};

const showPreviousImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + galleryImages.value.length) % galleryImages.value.length;
  startRotationTimer();
};

const showNextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length;
  startRotationTimer();
};

onMounted(() => {
  resolveLandscapeVariants();
  startRotationTimer();

  revealObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
    { threshold: 0.14 },
  );
  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

});

onBeforeUnmount(() => {
  window.clearInterval(rotationTimer);
  revealObserver?.disconnect();
});
</script>
