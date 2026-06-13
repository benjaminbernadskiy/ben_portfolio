<template>
  <main class="bg-white text-slate-900">
    <section class="bg-slate-950 px-5 pb-6 pt-24 text-white sm:px-8 lg:px-10">
      <div class="relative mx-auto min-h-[38rem] max-w-7xl overflow-hidden sm:min-h-[46rem]">
        <img
          src="/ftc-v3-hero.png"
          alt="Final compact FTC robot with bumper intake and odometry-controlled turret"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10"></div>

        <div class="relative flex min-h-[38rem] flex-col justify-between p-6 sm:min-h-[46rem] sm:p-10 lg:p-14">
          <NuxtLink
            to="/#projects"
            class="w-fit border-b border-white/70 pb-1 text-sm font-medium transition-opacity hover:opacity-55"
          >
            Back to projects
          </NuxtLink>

          <div class="max-w-4xl">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-200">
              FIRST Tech Challenge · 2025–2026
            </p>
            <h1 class="mt-5 text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
              FTC Competition Robot
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Three robot iterations led to this compact turreted design for
              the NYC Championship.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 px-5 py-10 text-white sm:px-8 lg:px-10">
      <div class="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-300">
            Season
          </p>
          <p class="mt-2 font-semibold">Three complete robot iterations</p>
        </div>
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-300">
            Final robot
          </p>
          <p class="mt-2 font-semibold">Bumper intake + servo turret</p>
        </div>
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-300">
            Season finale
          </p>
          <p class="mt-2 font-semibold">NYC Championship</p>
        </div>
      </div>
    </section>

    <section class="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
            The challenge
          </p>
          <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            FTC DECODE game requirements
          </h2>
          <p class="mt-6 text-lg leading-8 text-slate-600">
            In the 2025–2026 game, robots collect purple and green
            <span class="font-semibold text-slate-800">ARTIFACTS</span>, launch
            them into a <span class="font-semibold text-slate-800">GOAL</span>,
            and use their colors to complete patterns.
          </p>
          <a
            href="https://www.firstinspires.org/programs/ftc/game-and-season"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-55"
          >
            Official DECODE overview ↗
          </a>
        </div>

        <figure class="bg-[#eef0f2] p-5 sm:p-8">
          <img
            src="/ftc-v3-cad.png"
            alt="CAD of the final FTC robot with bumper intake and turreted shooter"
            class="mx-auto max-h-[34rem] w-full object-contain"
          />
        </figure>
      </div>

      <div class="mx-auto mt-10 grid max-w-7xl gap-px overflow-hidden border border-slate-300 bg-slate-300 sm:grid-cols-3">
        <div class="bg-white p-5">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
            Game pieces
          </p>
          <p class="mt-2 font-semibold text-slate-950">
            Purple and green ARTIFACTS
          </p>
        </div>
        <div class="bg-white p-5">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
            Main task
          </p>
          <p class="mt-2 font-semibold text-slate-950">
            Collect, aim, and launch into the GOAL
          </p>
        </div>
        <div class="bg-white p-5">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
            Size constraint
          </p>
          <p class="mt-2 font-semibold text-slate-950">
            Fit inside an 18 × 18 inch footprint
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-300">
              Shared shooter control
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Flywheel RPM control
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-300">
            Every robot used the same core shooting strategy. Field position
            determined the distance to the GOAL, testing converted that distance
            into a target flywheel RPM, and closed-loop control kept the
            flywheel near that speed.
          </p>
        </div>

        <div class="mt-10 grid gap-px overflow-hidden bg-white/15 md:grid-cols-3">
          <article class="bg-slate-900 p-6">
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-300">
              01 · Measure
            </p>
            <h3 class="mt-3 text-xl font-semibold">Distance calculation</h3>
            <p class="mt-3 leading-7 text-slate-300">
              Odometry tracked the robot's field position. The distance formula
              compared that pose with the fixed GOAL coordinates.
            </p>
          </article>
          <article class="bg-slate-900 p-6">
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-300">
              02 · Select
            </p>
            <h3 class="mt-3 text-xl font-semibold">Distance-to-RPM regression</h3>
            <p class="mt-3 leading-7 text-slate-300">
              Repeated shooting tests produced a regression that mapped
              distance to the flywheel speed needed for a repeatable shot.
            </p>
          </article>
          <article class="bg-slate-900 p-6">
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-300">
              03 · Correct
            </p>
            <h3 class="mt-3 text-xl font-semibold">PID speed correction</h3>
            <p class="mt-3 leading-7 text-slate-300">
              Encoder feedback measured actual RPM. PID continuously adjusted
              motor power to reduce error and recover after each launch.
            </p>
          </article>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <figure class="overflow-hidden border border-white/15 bg-slate-900">
            <div class="border-b border-white/15 px-5 py-4">
              <p class="font-mono text-[10px] uppercase tracking-[0.15em] text-violet-300">
                Measured flywheel response
              </p>
              <h3 class="mt-1 font-semibold">
                RPM recovery after a shot
              </h3>
            </div>
            <img
              src="/ftc-v2-rpm-recovery.png"
              alt="FTC Dashboard graph showing flywheel RPM dropping after a shot and recovering toward its target"
              class="aspect-[4/3] w-full object-cover object-center"
            />
            <figcaption class="border-t border-white/15 px-5 py-4 text-sm leading-6 text-slate-300">
              The target came from the tested distance regression. The RPM dip
              shows energy leaving the flywheel; the recovery shows the PID
              controller driving it back toward the requested speed.
            </figcaption>
          </figure>

          <FtcPidDiagram />
        </div>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
              Robot version 01
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Version 1 mechanism layout
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-600">
            The first robot tried to create one continuous path from the floor
            to the GOAL. It combined a rubber-band intake, sideways centering,
            a kicker, a flywheel shooter, and an AprilTag-guided turret.
          </p>
        </div>

        <div class="mt-10 flex items-stretch gap-3 overflow-x-auto pb-2">
          <template v-for="(stage, index) in versionOnePath" :key="stage.title">
            <div class="min-w-48 flex-1 border border-slate-300 bg-white p-4">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-700">
                {{ stage.label }}
              </p>
              <h3 class="mt-2 font-semibold text-slate-950">
                {{ stage.title }}
              </h3>
              <p class="mt-1 text-sm leading-5 text-slate-500">
                {{ stage.detail }}
              </p>
            </div>
            <span
              v-if="index < versionOnePath.length - 1"
              class="flex shrink-0 items-center text-xl text-violet-700"
            >
              →
            </span>
          </template>
        </div>

        <div class="mt-10 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
          <figure class="overflow-hidden bg-slate-900">
            <img
              src="/ftc-v1-field.png"
              alt="Version one FTC robot on the DECODE field surrounded by purple and green artifacts"
              class="aspect-[16/10] h-full w-full object-cover"
            />
            <figcaption class="px-4 py-3 text-xs leading-5 text-slate-400">
              Version one on the field with the complete intake-to-shooter path.
            </figcaption>
          </figure>

          <figure class="overflow-hidden bg-slate-900">
            <img
              src="/ftc-v1-turret-closeup.png"
              alt="Close-up of the FTC robot turret, shooter housing, gear ring, camera, and wiring"
              class="aspect-[3/4] h-full w-full object-cover"
            />
            <figcaption class="px-4 py-3 text-xs leading-5 text-slate-400">
              Turret gearing, shooter housing, camera, and cable routing.
            </figcaption>
          </figure>
        </div>

        <div class="mt-12">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
            What testing exposed
          </p>
          <div class="mt-5 border-t border-slate-400">
            <article
              v-for="(item, index) in versionOneProblems"
              :key="item.problem"
              class="grid gap-4 border-b border-slate-300 py-6 md:grid-cols-[3rem_0.9fr_1.1fr] md:gap-8"
            >
              <span class="font-mono text-sm font-semibold text-violet-700">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Problem
                </p>
                <p class="mt-2 font-semibold leading-7 text-slate-950">
                  {{ item.problem }}
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Response
                </p>
                <p class="mt-2 leading-7 text-slate-600">
                  {{ item.response }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <figure class="overflow-hidden border border-slate-300 bg-white">
            <img
              src="/ftc-v1-repair.png"
              alt="FTC team members repairing and rewiring version one of the robot"
              class="aspect-[16/10] h-full w-full object-cover object-center"
            />
            <figcaption class="border-t border-slate-300 px-4 py-3 text-xs leading-5 text-slate-500">
              Between-event fixes included shorter intake bands and restrained
              cable routing.
            </figcaption>
          </figure>

          <figure class="overflow-hidden border border-slate-300 bg-slate-900">
            <img
              src="/ftc-v1-footprint-cad.png"
              alt="Side CAD measurement showing version one's mechanism extending beyond the robot frame"
              class="aspect-[16/10] h-full w-full object-contain"
            />
            <figcaption class="border-t border-white/15 px-4 py-3 text-xs leading-5 text-slate-300">
              CAD measurement used to check how the mechanism and cable path
              related to the legal footprint.
            </figcaption>
          </figure>
        </div>

        <figure class="mt-10 max-w-2xl overflow-hidden border border-slate-300 bg-slate-900">
          <div class="grid sm:grid-cols-[1fr_0.72fr]">
            <div class="relative aspect-[4/3]">
              <img
                v-if="!missingImages.oldest"
                :src="shooterImages.oldest"
                alt="CAD of the original single-motor FTC shooter"
                class="h-full w-full object-contain"
                @error="missingImages.oldest = true"
              />
              <div
                v-else
                class="absolute inset-0 flex items-center justify-center px-8 text-center text-sm leading-6 text-slate-400"
              >
                Add the original shooter CAD as
                public/ftc-shooter-oldest.png
              </div>
            </div>
            <figcaption class="flex items-center border-t border-white/15 p-5 text-sm leading-6 text-slate-300 sm:border-l sm:border-t-0">
              Version 1 used one shooter motor. It ran the shared
              regression-and-PID control strategy explained above; Version 2
              later added a second motor for faster spin-up and recovery.
            </figcaption>
          </div>
        </figure>
      </div>
    </section>

    <section class="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-300">
            Turret test
          </p>
          <h2 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            AprilTag-guided rotation
          </h2>
          <p class="mt-5 leading-7 text-slate-300">
            The front Arducam scanned for AprilTags, and a geared motor rotated
            the shooter turret to face the target. The same rotating assembly
            also created a cable-management problem that pushed the robot
            outside its legal footprint.
          </p>
        </div>

        <div class="relative aspect-video overflow-hidden bg-black">
          <video
            class="h-full w-full object-contain"
            controls
            playsinline
            preload="metadata"
            poster="/ftc-v1-turret-closeup.png"
            @error="turretVideoMissing = true"
          >
            <source :src="turretVideo" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <div
            v-if="turretVideoMissing"
            class="absolute inset-0 flex flex-col items-center justify-center bg-black px-6 text-center"
          >
            <p class="font-semibold">The turret video could not load</p>
            <p class="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Try opening the video directly or re-exporting it as an H.264 MP4.
            </p>
            <a
              :href="turretVideo"
              class="mt-4 border-b border-white pb-1 text-sm font-semibold uppercase tracking-[0.1em]"
            >
              Open video ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
              Robot version 02
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Version 2: floating intake and chassis aiming
            </h2>
          </div>
          <div class="max-w-3xl">
            <p class="text-lg leading-8 text-slate-600">
              The second robot addressed the first intake's reliability and
              compression problems. It kept the same basic shooting idea, but
              doubled the shooter motors and temporarily traded the turret for
              field-oriented chassis aiming.
            </p>
            <p class="mt-4 text-sm leading-6 text-slate-500">
              A time crunch shaped this version: removing the turret simplified
              the build, but moved a much larger part of the aiming problem
              into code.
            </p>
          </div>
        </div>

        <div class="mt-10 flex items-stretch gap-3 overflow-x-auto pb-2">
          <template v-for="(stage, index) in versionTwoPath" :key="stage.title">
            <div class="min-w-48 flex-1 border border-slate-300 bg-white p-4">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-700">
                {{ stage.label }}
              </p>
              <h3 class="mt-2 font-semibold text-slate-950">
                {{ stage.title }}
              </h3>
              <p class="mt-1 text-sm leading-5 text-slate-500">
                {{ stage.detail }}
              </p>
            </div>
            <span
              v-if="index < versionTwoPath.length - 1"
              class="flex shrink-0 items-center text-xl text-violet-700"
            >
              →
            </span>
          </template>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <figure class="overflow-hidden border border-slate-300 bg-slate-900">
            <div class="relative aspect-[4/3]">
              <img
                src="/ftc-v2-intake-cad.png"
                alt="CAD view of version two showing the direct-drive intake, vectored wheels, funnel, trapdoor, and shooter"
                class="h-full w-full object-contain"
              />
            </div>
            <figcaption class="border-t border-white/15 px-5 py-4 text-sm leading-6 text-slate-300">
              Direct-drive rubber wheels pulled ARTIFACTS into vectored wheels
              and a funnel. A trapdoor held them back from the shooter until it
              was time to fire.
            </figcaption>
          </figure>

          <figure class="overflow-hidden border border-slate-300 bg-white">
            <div class="relative aspect-[3/4] bg-[#eef0f2]">
              <img
                src="/ftc-v2-front.png"
                alt="Front view of version two at competition showing its funnel, intake wheels, and Limelight"
                class="h-full w-full object-cover"
              />
            </div>
            <figcaption class="border-t border-slate-300 px-5 py-4 text-sm leading-6 text-slate-600">
              The Version 2 front end at competition, with the Limelight mounted
              above the direct intake path.
            </figcaption>
          </figure>
        </div>

        <div class="mt-6 grid gap-px overflow-hidden border border-slate-300 bg-slate-300 md:grid-cols-3">
          <article class="bg-white p-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-700">
              Problem
            </p>
            <p class="mt-2 font-semibold text-slate-950">
              A rigid intake made the chassis bounce over the ball.
            </p>
          </article>
          <article class="bg-white p-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-700">
              Floating response
            </p>
            <p class="mt-2 font-semibold text-slate-950">
              The vectored-wheel assembly could rise through a limited range.
            </p>
          </article>
          <article class="bg-amber-50 p-5">
            <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800">
              Remaining issue
            </p>
            <p class="mt-2 font-semibold text-slate-950">
              The intake still could not reliably reach the funnel's outer edges.
            </p>
          </article>
        </div>

        <div class="mt-12">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
            Version 1 → Version 2
          </p>
          <div class="mt-5 overflow-hidden border border-slate-300 bg-slate-300">
            <article
              v-for="item in versionTwoChanges"
              :key="item.system"
              class="grid gap-px border-b border-slate-300 bg-slate-300 last:border-b-0 md:grid-cols-[0.5fr_0.9fr_1.15fr_0.95fr]"
            >
              <div class="bg-slate-950 p-5 text-white">
                <p class="font-mono text-[10px] uppercase tracking-[0.14em] text-violet-300">
                  System
                </p>
                <p class="mt-2 font-semibold">{{ item.system }}</p>
              </div>
              <div class="bg-white p-5">
                <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Changed
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  {{ item.changed }}
                </p>
              </div>
              <div class="bg-white p-5">
                <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Why
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  {{ item.why }}
                </p>
              </div>
              <div class="bg-white p-5">
                <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Result
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  {{ item.result }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <figure class="overflow-hidden border border-slate-300 bg-slate-900">
            <div class="border-b border-white/15 px-5 py-4 text-white">
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300">
                Field-oriented targeting
              </p>
              <h3 class="mt-1 font-semibold">
                Pose → goal vector → required heading
              </h3>
            </div>
            <img
              src="/ftc-v2-field-targeting.png"
              alt="Engineering reference showing robot pose, target position, distance vector, and atan2 heading calculation"
              class="aspect-[16/10] w-full object-cover"
            />
            <figcaption class="border-t border-white/15 px-5 py-4 text-sm leading-6 text-slate-300">
              This reference visualizes the same pose and
              <span class="font-mono">atan2</span> math. Although the graphic
              labels a turret servo, Version 2 used the calculated heading to
              rotate the entire chassis.
            </figcaption>
          </figure>

          <div class="grid gap-5">
            <article class="border border-slate-300 bg-slate-950 p-6 text-white">
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300">
                Vision
              </p>
              <h3 class="mt-3 text-xl font-semibold">
                Limelight AprilTag detection
              </h3>
              <p class="mt-3 leading-7 text-slate-300">
                Version 2 moved from the Arducam to a Limelight for higher-frame-rate
                AprilTag scanning. Vision supplemented the robot pose used by
                the field-oriented targeting code.
              </p>
            </article>

            <article class="border border-slate-300 bg-white p-6">
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-700">
                Autonomous
              </p>
              <h3 class="mt-3 text-xl font-semibold text-slate-950">
                Road Runner trajectories
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                By this version, the robot also had an autonomous routine built
                with Road Runner for the autonomous period of each match.
              </p>
            </article>

            <article class="border border-amber-300 bg-amber-50 p-6">
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800">
                What still failed
              </p>
              <h3 class="mt-3 text-xl font-semibold text-slate-950">
                Limited intake coverage at the funnel edges
              </h3>
              <p class="mt-3 leading-7 text-slate-700">
                The funnel helped guide off-center ARTIFACTS, but the outer
                sections extended beyond where the intake wheels could reliably
                grab them. Compliance solved the bounce problem without fully
                solving pickup coverage.
              </p>
            </article>
          </div>
        </div>

        <div class="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
              Rapid-fire test
            </p>
            <h3 class="mt-4 text-3xl font-semibold leading-tight text-slate-950">
              Three-ARTIFACT rapid-fire test
            </h3>
            <p class="mt-4 leading-7 text-slate-600">
              This portrait test clip belongs here because it shows the combined
              result of the trapdoor, direct feed, dual-motor flywheel, and PID
              recovery between shots.
            </p>
          </div>

          <div class="grid min-h-[32rem] place-items-center overflow-hidden bg-slate-950 p-5">
            <div class="relative h-full max-h-[42rem] w-full max-w-sm overflow-hidden bg-black">
              <video
                v-if="!rapidFireVideoMissing"
                class="h-full w-full object-contain"
                controls
                playsinline
                preload="metadata"
                poster="/ftc-v2-front.png"
                @error="rapidFireVideoMissing = true"
              >
                <source :src="rapidFireVideo" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <div
                v-else
                class="absolute inset-0 flex items-center justify-center px-8 text-center text-sm leading-6 text-slate-400"
              >
                Add the portrait firing clip as
                public/ftc-v2-rapid-fire.mp4
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-slate-400 pt-12">
          <div class="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <figure class="overflow-hidden border border-slate-300 bg-slate-900">
              <img
                src="/ftc-v2-super-qualifier-team.png"
                alt="SITHS Mercury FTC team together after finishing as Super Qualifier finalists"
                class="aspect-[16/10] w-full object-cover"
              />
              <figcaption class="border-t border-white/15 px-5 py-4 text-sm leading-6 text-slate-300">
                The team after reaching the Super Qualifier final.
              </figcaption>
            </figure>

            <div class="grid gap-5">
              <article class="bg-violet-700 p-6 text-white sm:p-8">
                <p class="font-mono text-xs uppercase tracking-[0.16em] text-violet-200">
                  Competition result
                </p>
                <p class="mt-4 text-5xl font-semibold">2nd</p>
                <h3 class="mt-3 text-2xl font-semibold">
                  Super Qualifier finalist
                </h3>
                <p class="mt-4 leading-7 text-violet-100">
                  This version carried us through the Super Qualifier bracket
                  and into the final, where we finished in second place.
                </p>
              </article>

              <figure class="overflow-hidden border border-slate-300 bg-white">
                <img
                  src="/ftc-v2-engineering-poster.png"
                  alt="SITHS Mercury engineering and outreach presentation board featuring the FTC robot"
                  class="aspect-[16/10] w-full object-cover"
                />
                <figcaption class="border-t border-slate-300 px-4 py-3 text-xs leading-5 text-slate-500">
                  The robot documented on our engineering and outreach display.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
              Robot version 03 · Final
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Version 3: bumper intake and servo turret
            </h2>
          </div>
          <div class="max-w-3xl">
            <p class="text-lg leading-8 text-slate-600">
              Our final robot kept Version 2's floating direct intake,
              trapdoor, dual-motor shooter, and odometry. It replaced the funnel
              with bumpers, returned to a turret, and compressed the drivetrain
              packaging for the robot we brought to the NYC Championship.
            </p>
            <p class="mt-4 text-sm leading-6 text-slate-500">
              This was our most complete design of the season. We performed
              well at the championship, but our season ended there rather than
              advancing to Worlds.
            </p>
          </div>
        </div>

        <div class="mt-10 flex items-stretch gap-3 overflow-x-auto pb-2">
          <template v-for="(stage, index) in versionThreePath" :key="stage.title">
            <div class="min-w-48 flex-1 border border-slate-300 bg-white p-4">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-violet-700">
                {{ stage.label }}
              </p>
              <h3 class="mt-2 font-semibold text-slate-950">
                {{ stage.title }}
              </h3>
              <p class="mt-1 text-sm leading-5 text-slate-500">
                {{ stage.detail }}
              </p>
            </div>
            <span
              v-if="index < versionThreePath.length - 1"
              class="flex shrink-0 items-center text-xl text-violet-700"
            >
              →
            </span>
          </template>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <figure class="overflow-hidden bg-slate-950">
            <img
              src="/ftc-v3-overhead.png"
              alt="Overhead field view of the final robot showing its compact chassis and rotating shooter"
              class="aspect-[16/10] h-full w-full object-cover"
            />
            <figcaption class="px-5 py-4 text-sm leading-6 text-slate-300">
              Moving the drivetrain motors toward the rear reduced the overall
              packaging around the intake and rotating shooter.
            </figcaption>
          </figure>

          <figure class="overflow-hidden border border-slate-300 bg-white">
            <img
              src="/ftc-v3-turret-closeup.png"
              alt="Close-up of the final robot's shooter turret, servo, and modular gears"
              class="aspect-[4/3] h-full w-full object-cover"
            />
            <figcaption class="border-t border-slate-300 px-5 py-4 text-sm leading-6 text-slate-600">
              A servo drove modular gears at a 1:1 ratio to rotate the complete
              shooter assembly.
            </figcaption>
          </figure>
        </div>

        <div class="mt-12">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
            Version 2 → Version 3
          </p>
          <div class="mt-5 overflow-hidden border border-slate-300 bg-slate-300">
            <article
              v-for="item in versionThreeChanges"
              :key="item.system"
              class="grid gap-px border-b border-slate-300 bg-slate-300 last:border-b-0 md:grid-cols-[0.5fr_0.9fr_1.15fr_0.95fr]"
            >
              <div class="bg-slate-950 p-5 text-white">
                <p class="font-mono text-[10px] uppercase tracking-[0.14em] text-violet-300">
                  System
                </p>
                <p class="mt-2 font-semibold">{{ item.system }}</p>
              </div>
              <div class="bg-white p-5">
                <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Changed
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  {{ item.changed }}
                </p>
              </div>
              <div class="bg-white p-5">
                <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Why
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  {{ item.why }}
                </p>
              </div>
              <div class="bg-white p-5">
                <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Result
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  {{ item.result }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div class="grid gap-5">
            <article class="border border-slate-300 bg-slate-950 p-6 text-white">
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300">
                Camera-free targeting
              </p>
              <h3 class="mt-3 text-2xl font-semibold">
                Odometry-based turret targeting
              </h3>
              <p class="mt-4 leading-7 text-slate-300">
                The robot already knew its field pose and the GOAL's fixed
                coordinates. The same trigonometry from Version 2 now produced
                a turret angle instead of a chassis heading, so the drivetrain
                could keep moving independently of the shot direction.
              </p>
            </article>

            <article class="border border-slate-300 bg-white p-6">
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-700">
                NYC Championship
              </p>
              <h3 class="mt-3 text-2xl font-semibold text-slate-950">
                Championship result
              </h3>
              <p class="mt-4 leading-7 text-slate-600">
                Version 3 combined the best working ideas from the season and
                gave us independent intake, driving, aiming, and shooting at
                the championship level.
              </p>
            </article>
          </div>

          <div class="grid min-h-[30rem] place-items-center overflow-hidden bg-slate-950 p-5">
            <div class="relative h-full max-h-[42rem] w-full overflow-hidden bg-black">
              <video
                v-if="!versionThreeVideoMissing"
                class="h-full w-full object-contain"
                controls
                playsinline
                preload="metadata"
                poster="/ftc-v3-hero.png"
                @error="versionThreeVideoMissing = true"
              >
                <source :src="versionThreeVideo" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <div
                v-else
                class="absolute inset-0 flex items-center justify-center px-8 text-center text-sm leading-6 text-slate-400"
              >
                Add the turret tracking clip as
                public/ftc-v3-turret-tracking.mp4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f2f3f4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-violet-700">
          Season takeaway
        </p>
        <div class="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 class="max-w-xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
            Design changes across three robot versions
          </h2>
          <p class="max-w-2xl leading-7 text-slate-600">
            The final design was not one sudden breakthrough. It combined the
            intake compliance, trapdoor, flywheel control, odometry, and
            packaging lessons earned across the first two robots.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";

const missingImages = reactive({
  oldest: false,
});

const shooterImages = {
  oldest: "/ftc-shooter-oldest.png",
};

const versionOnePath = [
  {
    label: "Collect",
    title: "Rubber-band intake",
    detail: "Pulled ARTIFACTS in from the floor",
  },
  {
    label: "Center",
    title: "Vectored wheels",
    detail: "Moved each ball sideways into the firing path",
  },
  {
    label: "Lift",
    title: "Servo kicker",
    detail: "Tried to push the ball upward",
  },
  {
    label: "Launch",
    title: "Flywheel + hood",
    detail: "Single-motor wheel with an adjustable exit angle",
  },
  {
    label: "Aim",
    title: "Camera turret",
    detail: "Arducam, AprilTags, motor, and gear ring",
  },
];

const versionOneProblems = [
  {
    problem: "The rubber bands stretched, tangled, and failed at useful intake speed.",
    response:
      "We temporarily installed shorter bands, then treated the intake material and geometry as a redesign priority for the next robot.",
  },
  {
    problem: "The vectored wheels did not compress the ARTIFACT enough to center it quickly.",
    response:
      "The slow sideways transfer showed that passive wheel angle was not enough without controlled compression.",
  },
  {
    problem: "The servo kicker could not give the ball enough energy to reach the main flywheel.",
    response:
      "We replaced it with a motor-driven feeder wheel that could shoot the ball upward into the main shooter.",
  },
  {
    problem: "The rotating turret cable could extend beyond the legal 18 × 18 inch footprint.",
    response:
      "We zip-tied the cable down as a temporary competition fix and carried cable management into the next design.",
  },
];

const versionTwoPath = [
  {
    label: "Collect",
    title: "Direct-drive rubber wheels",
    detail: "Pulled ARTIFACTS in without stretchable bands",
  },
  {
    label: "Guide",
    title: "Vectored wheels + funnel",
    detail: "Centered off-axis pickups toward the shooter path",
  },
  {
    label: "Buffer",
    title: "Trapdoor",
    detail: "Stopped the direct intake from feeding too early",
  },
  {
    label: "Launch",
    title: "Dual-motor flywheel",
    detail: "Smaller hood with faster RPM recovery",
  },
  {
    label: "Aim",
    title: "Rotate the chassis",
    detail: "Odometry, trigonometry, regression, and Limelight",
  },
];

const versionTwoChanges = [
  {
    system: "Intake",
    changed: "Rubber bands became direct-drive rubber wheels.",
    why: "The first bands stretched, tangled, and failed at useful speeds.",
    result: "A more positive intake path without elastic bands.",
  },
  {
    system: "Compliance",
    changed: "The vectored-wheel assembly gained limited upward travel.",
    why: "A rigid intake transferred the ball impact into the chassis and made the robot bounce.",
    result: "The intake rose over the ARTIFACT while the chassis stayed planted.",
  },
  {
    system: "Shooter",
    changed: "A smaller adjustable hood and a second flywheel motor.",
    why: "The shooter needed to reach and recover its commanded RPM faster.",
    result: "Much faster spin-up while keeping PID speed control.",
  },
  {
    system: "Aiming",
    changed: "The turret was temporarily removed and the whole chassis aimed instead.",
    why: "The team was time-crunched and could not finish the turret for this version.",
    result: "Odometry and field geometry calculated the heading and shot speed.",
  },
];

const versionThreePath = [
  {
    label: "Collect",
    title: "Floating rubber-wheel intake",
    detail: "Kept the direct-drive intake and controlled compliance",
  },
  {
    label: "Guide",
    title: "Bumpers + vectored wheels",
    detail: "Deflected impacts without pushing ARTIFACTS away",
  },
  {
    label: "Buffer",
    title: "Trapdoor",
    detail: "Retained ARTIFACTS until the shooter was ready",
  },
  {
    label: "Launch",
    title: "Dual-motor flywheel",
    detail: "Kept fast spin-up, PID control, and adjustable exit angle",
  },
  {
    label: "Aim",
    title: "Odometry turret",
    detail: "Servo-driven 1:1 modular gears with no camera",
  },
];

const versionThreeChanges = [
  {
    system: "Ball guidance",
    changed: "The funnel became low-profile bumpers around the vectored wheels.",
    why: "Ball impacts against the funnel could push ARTIFACTS away before the wheels established contact.",
    result: "The bumpers allowed a smoother path into the same vectoring mechanism.",
  },
  {
    system: "Aiming",
    changed: "A servo-powered turret returned with modular gears at a 1:1 ratio.",
    why: "Rotating the whole chassis limited driving and shooting to the same heading.",
    result: "The shooter could track the GOAL while the drivetrain faced or moved elsewhere.",
  },
  {
    system: "Localization",
    changed: "The turret relied on odometry without a dedicated aiming camera.",
    why: "The field pose already supplied the geometry needed to calculate the GOAL angle.",
    result: "The Version 2 targeting math moved from chassis control to turret control.",
  },
  {
    system: "Packaging",
    changed: "The drivetrain motors moved toward the rear of the chassis.",
    why: "The final robot needed less crowded space around the intake and rotating assembly.",
    result: "A smaller overall robot with cleaner mechanism placement.",
  },
];

const turretVideo = "/ftc-v1-turret.mp4";
const turretVideoMissing = ref(false);
const rapidFireVideo = "/ftc-v2-rapid-fire.mp4";
const rapidFireVideoMissing = ref(false);
const versionThreeVideo = "/ftc-v3-turret-tracking.mp4";
const versionThreeVideoMissing = ref(false);

useHead({
  title: "FTC Competition Robot | Ben",
  meta: [
    {
      name: "description",
      content:
        "Three FTC competition robot iterations culminating in a compact odometry-controlled turret design for the NYC Championship.",
    },
  ],
});
</script>
