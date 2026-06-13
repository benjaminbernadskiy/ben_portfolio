<template>
  <main class="bg-white text-slate-900">
    <section class="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pt-36">
      <div class="mx-auto max-w-7xl">
        <NuxtLink
          to="/#projects"
          class="inline-flex border-b border-slate-400 pb-1 text-sm font-medium text-slate-600 transition-opacity hover:opacity-55"
        >
          Back to projects
        </NuxtLink>

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
              School-wide web system
            </p>
            <h1 class="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-slate-950 sm:text-7xl lg:text-8xl">
              Early Bird Hub
            </h1>
          </div>

          <div>
            <p class="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              I designed and built the production site solo so teachers across
              SITHS have one place to open the daily morning announcements.
            </p>
            <a
              href="https://earlybirdhub.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 inline-flex border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-55"
            >
              Open Early Bird Hub ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <figure class="bg-[#ed6b49]">
      <img
        src="/early-bird-banner.png"
        alt="Early Bird Hub bridge and sunrise artwork"
        class="mx-auto w-full max-w-[100rem]"
      />
    </figure>

    <section class="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto grid max-w-7xl border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in impact"
          :key="item.label"
          class="border-b border-slate-300 py-7 sm:px-7 lg:border-b-0 lg:border-r first:sm:pl-0 last:lg:border-r-0"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {{ item.label }}
          </p>
          <p class="mt-3 text-lg font-semibold text-slate-950">
            {{ item.value }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
            The hard part
          </p>
          <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Static Nuxt frontend with live Supabase data
          </h2>
        </div>

        <div class="max-w-3xl">
          <p class="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            The public Nuxt app deploys to Netlify, but approved announcements
            stay live through Supabase-backed API routes. A prebuild step also
            mirrors uploaded images from the school-hosted storage into the
            static deploy, so the site is not dependent on every image request
            reaching the school server.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">
              Self-hosting
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Self-hosted Supabase on school hardware
            </h2>
          </div>
          <div>
            <p class="text-lg leading-8 text-slate-300">
              Instead of paying for a managed Supabase subscription, the
              database runs locally on a school computer. That avoids depending
              on a free hosted project that can pause after inactivity and
              keeps the recurring cost at zero.
            </p>
            <p class="mt-6 leading-8 text-slate-400">
              Self-hosting created a second problem: a machine inside the
              school network is not normally reachable from the public
              internet. Opening inbound ports or changing the school router was
              not a realistic option, so the connection had to start from
              inside the network.
            </p>
          </div>
        </div>

        <div class="mt-14 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <figure class="bg-white p-3 sm:p-5">
            <img
              src="/reverse-tunnel-diagram.png"
              alt="Diagram showing an SSH reverse tunnel connecting a server behind a firewall to a public SSH host"
              class="w-full"
            />
          </figure>

          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">
              Reverse tunnel
            </p>
            <h3 class="mt-4 text-3xl font-semibold">
              SSH reverse-tunnel connection
            </h3>
            <p class="mt-6 leading-8 text-slate-300">
              The school computer opens an encrypted SSH connection to a public
              host. That outbound connection is allowed through the network,
              and the host maps a public endpoint back through the tunnel to
              the selected service running inside school.
            </p>
            <p class="mt-5 leading-8 text-slate-400">
              Requests reach the public host, travel through the already-open
              tunnel, and arrive at the local server. The school router does
              not need a new inbound rule, and the database can remain on the
              school machine while the public app and management tools still
              reach it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-end gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">
              System model
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              System architecture
            </h2>
          </div>
          <p class="max-w-2xl text-lg leading-8 text-slate-300">
            The public site, publishing tools, video feed, and school-hosted
            database are separate pieces joined through API routes.
          </p>
        </div>

        <div class="mt-12 overflow-hidden border border-slate-700 bg-slate-900">
          <div class="flex items-center gap-2 border-b border-slate-700 px-5 py-4">
            <span class="h-2.5 w-2.5 rounded-full bg-[#ed6b49]"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            <span class="ml-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
              Early Bird architecture
            </span>
          </div>

          <div class="grid gap-3 p-5 sm:p-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            <div class="border border-slate-600 bg-slate-950 p-6">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-orange-300">
                Input
              </p>
              <h3 class="mt-3 text-xl font-semibold">Staff dashboard</h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                Create, edit, or delete request
              </p>
            </div>
            <span class="hidden text-2xl text-orange-300 lg:block">→</span>
            <div class="border border-orange-300/50 bg-[#2a211f] p-6">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-orange-300">
                Gate
              </p>
              <h3 class="mt-3 text-xl font-semibold">Admin review</h3>
              <p class="mt-2 text-sm leading-6 text-slate-300">
                Compare, approve, or reject
              </p>
            </div>
            <span class="hidden text-2xl text-orange-300 lg:block">→</span>
            <div class="border border-slate-600 bg-slate-950 p-6">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-orange-300">
                Data
              </p>
              <h3 class="mt-3 text-xl font-semibold">Local Supabase</h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                Auth, records, and image storage
              </p>
            </div>
          </div>

          <div class="grid gap-3 border-t border-slate-700 p-5 sm:p-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            <div class="border border-slate-600 bg-slate-950 p-6">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-sky-300">
                External feed
              </p>
              <h3 class="mt-3 text-xl font-semibold">YouTube playlist</h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                Latest morning broadcast
              </p>
            </div>
            <span class="hidden text-2xl text-sky-300 lg:block">→</span>
            <div class="border border-sky-300/50 bg-[#18252d] p-6">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-sky-300">
                Delivery
              </p>
              <h3 class="mt-3 text-xl font-semibold">Nuxt + Netlify</h3>
              <p class="mt-2 text-sm leading-6 text-slate-300">
                Static interface with live API data
              </p>
            </div>
            <span class="hidden text-2xl text-sky-300 lg:block">→</span>
            <div class="border border-slate-600 bg-slate-950 p-6">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-sky-300">
                Output
              </p>
              <h3 class="mt-3 text-xl font-semibold">SITHS classrooms</h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                200+ visits on school days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <figure>
          <img
            src="/early-bird-whiteboard.png"
            alt="The first whiteboard sketch of the Early Bird publishing architecture"
            class="w-full"
          />
          <figcaption class="mt-4 text-sm leading-6 text-slate-500">
            The first architecture sketch. I worked through the publishing flow
            with peers, then implemented the production system solo.
          </figcaption>
        </figure>

        <div class="lg:sticky lg:top-28">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
            First architecture pass
          </p>
          <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Initial publishing architecture
          </h2>
          <p class="mt-7 text-lg leading-8 text-slate-600">
            This was the first pass at separating the people publishing,
            the database storing changes, and the site classrooms actually open.
            The final build keeps records live and mirrors uploaded media during
            deployment.
          </p>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-300 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
              Behind the homepage
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Staff publishing and admin approval
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-600">
            Staff submit changes. The AV teacher reviews them. Only approved
            records reach the public page.
          </p>
        </div>

        <div class="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <figure class="overflow-hidden border border-slate-300 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <div class="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              <span class="ml-3 rounded bg-white px-4 py-1 font-mono text-[10px] text-slate-400">
                /admin
              </span>
            </div>

            <div class="bg-[#101828] px-5 py-5 text-white sm:px-7">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-xs uppercase tracking-[0.14em] text-orange-300">
                    Early Bird
                  </p>
                  <p class="mt-1 text-xl font-semibold">Announcement manager</p>
                </div>
                <img
                  src="/early-bird-announcement.png"
                  alt=""
                  class="h-12 w-12 object-contain"
                />
              </div>
              <div class="mt-6 flex gap-6 border-b border-slate-700 text-sm">
                <span class="border-b-2 border-orange-300 pb-3 font-semibold text-white">
                  Pending
                </span>
                <span class="pb-3 text-slate-400">Approved</span>
                <span class="pb-3 text-slate-400">Create</span>
              </div>
            </div>

            <div class="p-5 sm:p-7">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">
                    Edit request
                  </p>
                  <p class="mt-2 font-semibold text-slate-950">
                    Robotics interest meeting
                  </p>
                </div>
                <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  Pending
                </span>
              </div>

              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div class="border border-slate-200 bg-slate-50 p-4">
                  <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Before
                  </p>
                  <div class="mt-3 h-2 w-3/4 bg-slate-300"></div>
                  <div class="mt-2 h-2 w-1/2 bg-slate-200"></div>
                  <div class="mt-5 h-20 bg-slate-200"></div>
                </div>
                <div class="border border-orange-200 bg-orange-50 p-4">
                  <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-700">
                    Proposed
                  </p>
                  <div class="mt-3 h-2 w-5/6 bg-orange-300"></div>
                  <div class="mt-2 h-2 w-2/3 bg-orange-200"></div>
                  <div class="mt-5 flex h-20 items-center justify-center bg-[#ed6b49]">
                    <img
                      src="/early-bird-announcement.png"
                      alt=""
                      class="h-12 w-12 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-6 flex gap-3">
                <span class="bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">
                  Approve
                </span>
                <span class="border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600">
                  Reject
                </span>
              </div>
            </div>
            <figcaption class="border-t border-slate-200 px-5 py-4 text-sm text-slate-500 sm:px-7">
              Interface model based on the production moderation workflow.
            </figcaption>
          </figure>

          <div class="border-t border-slate-400">
            <article
              v-for="(step, index) in publishingFlow"
              :key="step.title"
              class="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-300 py-6"
            >
              <span class="font-mono text-sm font-semibold text-orange-700">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <div>
                <h3 class="text-xl font-semibold text-slate-950">
                  {{ step.title }}
                </h3>
                <p class="mt-2 leading-7 text-slate-600">{{ step.detail }}</p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-2">
          <article
            v-for="snippet in codeSnippets"
            :key="snippet.title"
            class="overflow-hidden bg-[#101828] text-white"
          >
            <div class="flex items-center justify-between border-b border-slate-700 px-5 py-4">
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
                  {{ snippet.label }}
                </p>
                <h3 class="mt-1 font-semibold">{{ snippet.title }}</h3>
              </div>
              <span class="font-mono text-xs text-slate-500">{{ snippet.file }}</span>
            </div>
            <pre class="overflow-x-auto p-5 text-[12px] leading-6 text-slate-300 sm:p-6 sm:text-[13px]"><code>{{ snippet.code }}</code></pre>
          </article>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
            Actual use
          </p>
          <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            School-day traffic
          </h2>
          <p class="mt-6 leading-8 text-slate-600">
            The repeating traffic spikes line up with school-day announcement
            use, reaching more than 200 visits per day across SITHS classrooms.
          </p>
        </div>

        <figure class="border border-slate-300 bg-white p-3 sm:p-5">
          <img
            src="/early-bird-traffic.png"
            alt="Early Bird Hub traffic chart showing school-day spikes above 200 visits"
            class="w-full"
          />
        </figure>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
          What the project taught me
        </p>
        <div class="mt-8 grid border-t border-slate-400 md:grid-cols-2">
          <article
            v-for="(lesson, index) in lessons"
            :key="lesson"
            class="grid grid-cols-[2rem_1fr] gap-4 border-b border-slate-300 py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
          >
            <span class="text-sm font-semibold text-orange-700">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <p class="leading-7 text-slate-700">{{ lesson }}</p>
          </article>
        </div>

        <div class="mt-12 flex flex-wrap gap-7">
          <a
            href="https://earlybirdhub.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-55"
          >
            Open Early Bird Hub ↗
          </a>
          <NuxtLink
            to="/#projects"
            class="inline-flex border-b border-slate-400 pb-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-600 transition-opacity hover:opacity-55"
          >
            Back to projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Early Bird Hub | Ben",
  meta: [
    {
      name: "description",
      content:
        "How Ben built the school-wide Early Bird morning announcement hub with a static Nuxt frontend, self-hosted Supabase, moderation tools, and a reverse tunnel.",
    },
  ],
});

const impact = [
  { label: "Usage", value: "200+ daily visits" },
  { label: "Reach", value: "SITHS classrooms" },
  { label: "Implementation", value: "Built solo" },
  { label: "Publishing", value: "Staff submissions + admin review" },
];

const publishingFlow = [
  {
    title: "Staff submit",
    detail:
      "Authenticated staff create announcements or request edits and deletions from a dedicated management dashboard.",
  },
  {
    title: "Admin review",
    detail:
      "The AV teacher sees pending actions, including a before-and-after view for edits, then approves or rejects each change.",
  },
  {
    title: "Publish live",
    detail:
      "Approved records appear through the public API and are grouped into today's announcements and earlier posts.",
  },
];

const codeSnippets = [
  {
    label: "Moderation",
    title: "Applying an approved edit",
    file: "approve.post.ts",
    code: `if (action.action_type === "edit" && action.old_id) {
  await supabase
    .from("daily_links")
    .update({
      name: action.name,
      description: action.description,
      url: action.url,
      img: action.img
    })
    .eq("id", action.old_id)

  await supabase
    .from("daily_links")
    .delete()
    .eq("id", actionId)
}`,
  },
  {
    label: "Build pipeline",
    title: "Mirroring locally hosted images",
    file: "prebuild.js",
    code: `try {
  execSync("node scripts/copy-local-images.js", {
    stdio: "inherit"
  })

  console.log("Images bundled for deploy")
} catch (error) {
  console.log("Storage unavailable")
  console.log("Continuing build without copied images")
}`,
  },
];

const lessons = [
  "A static frontend can still serve changing content. The important choice is deciding which parts belong in the deploy and which remain live behind an API.",
  "The admin experience matters as much as the public page. The system only works daily if staff can contribute and the teacher can review changes without developer help.",
  "Cost constraints can lead to real architecture decisions. Self-hosting removed the subscription cost but required a reliable path through the school network.",
  "Deployment is part of the product. Authentication, database access, image storage, API routes, build scripts, tunneling, and hosting all had to work as one system.",
];
</script>
