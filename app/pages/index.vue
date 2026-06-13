<template>
  <main class="bg-white text-slate-900">
    <section
      class="relative flex min-h-[88svh] items-end overflow-hidden bg-slate-800 bg-cover bg-[position:38%_center] sm:bg-center"
      :style="{ backgroundImage: `url(${personal.heroImage})` }"
    >
      <div class="absolute inset-0 bg-black/45"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20"></div>

      <div class="relative mx-auto w-full max-w-7xl px-5 pb-16 text-white sm:px-8 sm:pb-20 lg:px-10">
        <p class="text-sm font-medium uppercase tracking-[0.18em] text-white/80">
          Student portfolio
        </p>
        <h1 class="mt-4 text-6xl font-semibold leading-none sm:text-7xl lg:text-8xl">
          {{ personal.name }}
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-2xl">
          {{ personal.title }}
        </p>
        <a
          href="#about"
          class="mt-8 inline-flex items-center border-b border-white pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-65"
        >
          More about me
        </a>
      </div>
    </section>

    <section id="about" class="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
          About me
        </p>
        <div class="mt-6 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 class="max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              I'm a high school student building robots and electronics.
            </h2>
            <p class="mt-6 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              {{ personal.bio }}
            </p>
          </div>

          <div class="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:ml-auto">
            <div class="profile-stage">
              <div
                :class="[
                  'profile-rotator border-slate-200 bg-slate-100 shadow-slate-900/20',
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
                      :alt="`${personal.name} ${image.label}`"
                      class="h-full w-full object-cover"
                      @error="markGalleryImageMissing(index)"
                    />
                    <div
                      v-if="missingGalleryImages[index]"
                      class="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 px-4 text-center"
                    >
                      <span class="text-5xl font-semibold text-white">
                        {{ index === 0 ? personalInitial : index + 1 }}
                      </span>
                      <span class="mt-3 text-xs leading-5 text-slate-400">
                        Add {{ image.src.replace("/", "public/") }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-5 flex justify-center gap-2"
              aria-label="Choose profile photo"
            >
              <button
                v-for="(image, index) in galleryImages"
                :key="image.src"
                type="button"
                :aria-label="`Show ${image.label}`"
                :class="[
                  'h-2 rounded-full transition-all',
                  currentImageIndex === index
                    ? 'w-8 bg-slate-900'
                    : 'w-2 bg-slate-300 hover:bg-slate-500',
                ]"
                @click="selectGalleryImage(index)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="scroll-mt-24 bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
    >
      <div class="mx-auto max-w-7xl">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
          Projects
        </p>
        <div class="mt-5">
          <h2 class="text-4xl font-semibold text-slate-950 sm:text-5xl">
            What I've been building
          </h2>
        </div>
        <div class="mt-12">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <section
      id="experience"
      class="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
    >
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              Experience
            </p>
            <h2 class="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Work and internships
            </h2>
            <p class="mt-6 max-w-md leading-7 text-slate-300">
              Programs I've worked in through SITHS and the Summer Youth
              Employment Program.
            </p>
          </div>

          <div class="border-t border-white/25">
            <article
              v-for="item in experience"
              :key="`${item.role}-${item.organization}`"
              class="grid gap-3 border-b border-white/25 py-7 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.12em] text-sky-300">
                  {{ item.type }}
                </p>
                <h3 class="mt-2 text-xl font-semibold sm:text-2xl">
                  {{ item.role }}
                </h3>
                <p class="mt-2 text-slate-300">
                  {{ item.organization }}
                </p>
              </div>
              <p class="text-sm font-medium text-slate-300 sm:pt-7">
                {{ item.dates }}
              </p>
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
      content:
        "About me portfolio for Ben, featuring robotics and embedded systems projects.",
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
  () =>
    personal.value.galleryImages ?? [
      {
        src: personal.value.profileImage,
        label: "profile photo",
      },
    ],
);
const resolvedGalleryImages = ref([]);
const galleryImages = computed(() =>
  resolvedGalleryImages.value.length
    ? resolvedGalleryImages.value
    : configuredGalleryImages.value.map(normalizeGalleryImage),
);
const activeGalleryImage = computed(
  () =>
    galleryImages.value[currentImageIndex.value] ??
    normalizeGalleryImage({
      src: personal.value.profileImage,
      label: "profile photo",
    }),
);
const missingGalleryImages = ref({});
const currentImageIndex = ref(0);
let rotationTimer;

const landscapeImagePattern = /(pfp\d+l)(\.[a-z0-9]+)$/i;
const portraitImagePattern = /(pfp\d+)(\.[a-z0-9]+)$/i;

function normalizeGalleryImage(image) {
  return {
    ...image,
    isLandscape: landscapeImagePattern.test(image.src),
  };
}

function landscapeVariantFor(src) {
  if (landscapeImagePattern.test(src)) {
    return src;
  }

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
  const images = await Promise.all(
    configuredGalleryImages.value.map(async (image) => {
      const landscapeSrc = landscapeVariantFor(image.src);

      if (
        landscapeSrc !== image.src &&
        landscapeSrc !== personal.value.heroImage &&
        (await imageExists(landscapeSrc))
      ) {
        return {
          ...image,
          src: landscapeSrc,
          isLandscape: true,
        };
      }

      return normalizeGalleryImage(image);
    }),
  );

  resolvedGalleryImages.value = images;
};

const markGalleryImageMissing = (index) => {
  missingGalleryImages.value = {
    ...missingGalleryImages.value,
    [index]: true,
  };
};

const startRotationTimer = () => {
  window.clearInterval(rotationTimer);

  if (!galleryImages.value.length) {
    return;
  }

  rotationTimer = window.setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % galleryImages.value.length;
  }, 3500);
};

const selectGalleryImage = (index) => {
  currentImageIndex.value = index;
  startRotationTimer();
};

onMounted(() => {
  resolveLandscapeVariants();
  startRotationTimer();
});

onBeforeUnmount(() => {
  window.clearInterval(rotationTimer);
});
</script>
