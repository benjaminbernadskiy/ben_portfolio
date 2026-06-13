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

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Robotics · CAD · Electronics
            </p>
            <h1 class="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-slate-950 sm:text-7xl lg:text-8xl">
              Quadruped Robot Dog
            </h1>
          </div>

          <div>
            <p class="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              A 3D-printed quadruped I designed around eight servos, custom
              control electronics, wireless commands, and a diagonal-pair gait.
            </p>
            <a
              href="/robot-dog-build.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 inline-flex border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-55"
            >
              Open build PDF ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <figure class="bg-[#eef0f2] px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
      <img
        src="/robotdog.png"
        alt="Blue and black 3D-printed quadruped robot dog"
        class="mx-auto max-h-[48rem] w-full max-w-7xl object-contain"
      />
    </figure>

    <section class="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="mx-auto grid max-w-7xl border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in snapshot"
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

    <section class="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-end gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              Mechanical design
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Mechanical design and leg prototyping
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-300">
            I tested the two-joint mechanism by itself before printing and
            wiring all four legs. That made servo fit, linkage clearance, and
            the range of motion much easier to debug.
          </p>
        </div>

        <div class="mt-10 grid items-stretch gap-3 sm:grid-cols-2">
          <div class="grid gap-3">
            <figure class="overflow-hidden bg-[#d9e2ee] p-2">
              <img
                src="/robot-cad-assembly.png"
                alt="CAD model of the full quadruped robot dog assembly"
                class="w-full object-contain"
              />
              <figcaption class="px-2 pb-1 pt-2 text-xs leading-5 text-slate-500">
                Full four-leg CAD assembly.
              </figcaption>
            </figure>

            <figure class="overflow-hidden bg-[#171d29] p-2">
              <img
                src="/robot-cad-leg.png"
                alt="Detailed CAD model of one robot dog leg and its servos"
                class="w-full bg-[#d9e2ee] object-contain"
              />
              <figcaption class="px-2 pb-1 pt-2 text-xs leading-5 text-slate-400">
                One two-servo leg in CAD.
              </figcaption>
            </figure>
          </div>

          <figure class="flex h-full flex-col overflow-hidden bg-[#171d29] p-2">
            <img
              src="/robot-leg-prototype.png"
              alt="Gold 3D-printed prototype of one two-joint robot dog leg"
              class="w-full object-cover object-[center_28%] sm:h-0 sm:min-h-0 sm:flex-1"
            />
            <figcaption class="px-2 pb-1 pt-2 text-xs leading-5 text-slate-400">
              Printed single-leg test.
            </figcaption>
          </figure>
        </div>

        <div class="mt-8 grid border-t border-slate-700 lg:grid-cols-3">
          <div
            v-for="(point, index) in mechanicalPoints"
            :key="point.title"
            class="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-700 py-6 lg:border-r lg:px-7 lg:last:border-r-0 lg:first:pl-0"
          >
            <span class="font-mono text-sm font-semibold text-sky-300">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <div>
              <h3 class="font-semibold">{{ point.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                {{ point.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Electronics
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Electronics prototyping and control board
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-600">
            The first version spread the controller, IMU, servo driver, and
            power modules across a breadboard. Once the behavior worked, I moved
            the control stack onto a soldered prototyping board sized for the
            robot's center frame.
          </p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <figure class="overflow-hidden border border-slate-300 bg-[#f2f3f4]">
            <img
              src="/robot-breadboard.png"
              alt="Breadboard prototype and hand-drawn robot dog circuit sketch"
              class="aspect-[4/5] w-full object-cover object-bottom"
            />
            <figcaption class="border-t border-slate-300 bg-white px-4 py-3 text-xs leading-5 text-slate-500">
              Breadboard test and circuit sketch.
            </figcaption>
          </figure>

          <figure class="overflow-hidden border border-slate-300 bg-[#f2f3f4]">
            <img
              src="/robot-control-board.png"
              alt="Soldered ESP32 robot dog control board with servo driver and power modules"
              class="aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption class="border-t border-slate-300 bg-white px-4 py-3 text-xs leading-5 text-slate-500">
              Soldered ESP32 and servo control board.
            </figcaption>
          </figure>
        </div>

        <div class="mt-14 overflow-hidden border border-slate-300">
          <div class="border-b border-slate-300 bg-[#f2f3f4] px-5 py-4">
            <p class="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
              Control path
            </p>
          </div>
          <div class="flex items-stretch gap-3 overflow-x-auto p-5 sm:p-6">
            <div
              v-for="(block, index) in controlPath"
              :key="block.title"
              class="contents"
            >
              <div class="min-w-48 flex-1 border border-slate-300 bg-white p-4">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-sky-700">
                  {{ block.label }}
                </p>
                <h3 class="mt-2 font-semibold text-slate-950">
                  {{ block.title }}
                </h3>
                <p class="mt-1 text-sm leading-5 text-slate-500">
                  {{ block.detail }}
                </p>
              </div>
              <span
                v-if="index < controlPath.length - 1"
                class="flex shrink-0 items-center text-xl text-sky-700"
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#eaf1f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Current gait
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Diagonal pairs, half a cycle apart
            </h2>
          </div>
          <p class="max-w-3xl text-lg leading-8 text-slate-600">
            Front-right moves with back-left. The opposite pair uses the same
            waveform shifted by π, keeping the timing relationship simple
            enough to tune on the physical dog.
          </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="border border-slate-300 bg-white p-5 sm:p-7">
            <div>
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                Leg pairing
              </p>
              <h3 class="mt-2 text-xl font-semibold text-slate-950">
                Two pairs alternate
              </h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">
                Legs in the same pair move together. Pair B starts halfway
                through Pair A's cycle.
              </p>
            </div>

            <div class="mt-6 space-y-3">
              <div class="border-l-4 border-sky-500 bg-sky-50 p-4">
                <div class="flex items-center justify-between gap-4">
                  <p class="font-semibold text-sky-800">Pair A</p>
                  <span class="font-mono text-xs text-sky-700">0°</span>
                </div>
                <p class="mt-2 text-sm font-semibold text-slate-950">
                  Front right + Back left
                </p>
                <p class="mt-1 text-xs text-slate-500">Move at the same time</p>
              </div>

              <div class="border-l-4 border-slate-500 bg-slate-100 p-4">
                <div class="flex items-center justify-between gap-4">
                  <p class="font-semibold text-slate-700">Pair B</p>
                  <span class="font-mono text-xs text-slate-600">180°</span>
                </div>
                <p class="mt-2 text-sm font-semibold text-slate-950">
                  Front left + Back right
                </p>
                <p class="mt-1 text-xs text-slate-500">
                  Move half a cycle later
                </p>
              </div>
            </div>
          </div>

          <article class="overflow-hidden bg-[#101828] text-white">
            <div class="flex items-center justify-between border-b border-slate-700 px-5 py-4">
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.15em] text-sky-300">
                  Motion code
                </p>
                <h3 class="mt-1 font-semibold">Pairing the legs in software</h3>
              </div>
              <span class="font-mono text-xs text-slate-500">walkCycle()</span>
            </div>
            <pre class="overflow-x-auto p-5 text-[12px] leading-6 text-slate-300 sm:p-7 sm:text-[13px]"><code>{{ gaitCode }}</code></pre>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
              Next control model
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Inverse kinematics for foot positioning
            </h2>
            <p class="mt-7 text-lg leading-8 text-slate-300">
              The current gait directly changes servo angles. Inverse
              kinematics flips that around: choose a target foot position, use
              the two link lengths to solve the joints, then apply each servo's
              real calibration offset.
            </p>

            <div class="mt-10 grid gap-3">
              <div
                v-for="(step, index) in ikFlow"
                :key="step"
                class="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/20 py-5"
              >
                <span class="font-mono text-sm text-sky-300">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
                <p class="leading-7 text-slate-300">{{ step }}</p>
              </div>
            </div>
          </div>

          <figure class="mx-auto w-full max-w-lg self-start overflow-hidden bg-white p-3">
            <img
              src="/inverse-kinematics-leg.png"
              alt="Two-joint inverse kinematics diagram showing a target foot position and joint angles"
              class="max-h-[22rem] w-full object-contain"
            />
            <figcaption class="px-2 pb-1 pt-3 text-xs leading-5 text-slate-500">
              A two-link leg model like the mechanism used on the dog.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
              Where it got difficult
            </p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Calibration and mechanical constraints
            </h2>
          </div>
          <div class="border-t border-slate-400">
            <article
              v-for="(challenge, index) in challenges"
              :key="challenge.title"
              class="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-300 py-6"
            >
              <span class="font-mono text-sm font-semibold text-sky-700">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <div>
                <h3 class="text-xl font-semibold text-slate-950">
                  {{ challenge.title }}
                </h3>
                <p class="mt-2 leading-7 text-slate-600">
                  {{ challenge.detail }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-2">
          <article
            v-for="snippet in safetyCode"
            :key="snippet.title"
            class="overflow-hidden bg-[#101828] text-white"
          >
            <div class="flex items-center justify-between border-b border-slate-700 px-5 py-4">
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.15em] text-sky-300">
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

    <section class="bg-[#f2f3f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
          What I would change next
        </p>
        <div class="mt-8 grid border-t border-slate-400 md:grid-cols-2">
          <article
            v-for="(item, index) in nextSteps"
            :key="item"
            class="grid grid-cols-[2rem_1fr] gap-4 border-b border-slate-300 py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
          >
            <span class="font-mono text-sm font-semibold text-sky-700">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <p class="leading-7 text-slate-700">{{ item }}</p>
          </article>
        </div>

        <div class="mt-12 flex flex-wrap gap-7">
          <a
            href="/robot-dog-build.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-55"
          >
            Open build PDF ↗
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
  title: "Quadruped Robot Dog | Ben",
  meta: [
    {
      name: "description",
      content:
        "How Ben designed, printed, wired, and programmed an eight-servo quadruped robot dog.",
    },
  ],
});

const snapshot = [
  { label: "Legs", value: "4 two-joint modules" },
  { label: "Actuation", value: "8 servos" },
  { label: "Controller", value: "ESP32 + PCA9685" },
  { label: "Fabrication", value: "Custom CAD + 3D printing" },
];

const mechanicalPoints = [
  {
    title: "Single-leg prototype",
    detail:
      "A single printed module exposed linkage collisions and servo mounting problems before they were repeated four times.",
  },
  {
    title: "Identical leg modules",
    detail:
      "Matching leg assemblies simplified printing, replacement parts, and the relationship between software channels and physical joints.",
  },
  {
    title: "Hardware access",
    detail:
      "Openings in the chassis make it possible to trace wires, replace a servo, and reach mounting screws without dismantling the whole dog.",
  },
];

const controlPath = [
  {
    label: "Input",
    title: "ESP-NOW remote",
    detail: "Speed, turn bias, and active state",
  },
  {
    label: "Controller",
    title: "ESP32",
    detail: "Gait timing, balance, and shutdown",
  },
  {
    label: "PWM",
    title: "PCA9685",
    detail: "Eight calibrated servo channels",
  },
  {
    label: "Motion",
    title: "Four legs",
    detail: "Two controlled joints per leg",
  },
];

const gaitCode = `// Pair A: front-right + back-left
writeServo(0, neutral[0] + cos(t) * amplitude);
writeServo(1, neutral[1] + sin(t) * amplitude);
writeServo(6, neutral[6] + cos(t) * amplitude);
writeServo(7, neutral[7] + sin(t) * amplitude);

// Pair B: same cycle, shifted by PI
writeServo(2, neutral[2] + cos(t + PI) * amplitude);
writeServo(3, neutral[3] + sin(t + PI) * amplitude);
writeServo(4, neutral[4] + cos(t + PI) * amplitude);
writeServo(5, neutral[5] + sin(t + PI) * amplitude);

t = fmod(t + gaitSpeed, TWO_PI);`;

const ikFlow = [
  "Choose the target foot coordinates relative to the hip joint.",
  "Use the measured upper and lower link lengths to solve both joint angles.",
  "Convert those angles into servo commands using the neutral offset measured for that physical leg.",
];

const challenges = [
  {
    title: "Eight servos do not share one real zero",
    detail:
      "Each installed horn landed differently, so I measured and stored a separate neutral angle for every channel before tuning movement.",
  },
  {
    title: "Sensor noise can become visible twitching",
    detail:
      "The MPU6050 correction uses a dead zone, stepped changes, and a hard cap instead of reacting to every small tilt reading.",
  },
  {
    title: "Power loss should not collapse the pose",
    detail:
      "The shutdown routine first eases every joint toward neutral, waits for the motion to finish, and only then switches the servo power off.",
  },
];

const safetyCode = [
  {
    label: "Feedback",
    title: "Ignoring small tilt changes",
    file: "applyBalance()",
    code: `const float DEAD_ZONE = 10.0;
const float STEP_SIZE = 3.0;

float tilt = -getTilt();
if (abs(tilt) < DEAD_ZONE) return;

float beyond = abs(tilt) - DEAD_ZONE;
float snapped = floor(beyond / STEP_SIZE) * STEP_SIZE;
float effectiveTilt = copysign(snapped, tilt);
float adjust = constrain(effectiveTilt * 0.5, -20, 20);`,
  },
  {
    label: "Power control",
    title: "Returning to neutral before shutdown",
    file: "shutdownPi()",
    code: `void shutdownPi() {
  slowMoveToNeutral();
  delay(1500);

  digitalWrite(MOSFET_PIN, LOW);
  delay(100);

  while (true);
}`,
  },
];

const nextSteps = [
  "Measure the real link lengths and servo offsets, then replace the fixed circular gait with inverse kinematics for deliberate foot placement.",
  "Build foot trajectories with separate lift, forward, and landing phases instead of moving every joint through one continuous circle.",
  "Tune the body geometry and center of mass around the finished battery and electronics rather than treating those as separate additions.",
  "Move the prototype wiring onto a cleaner permanent board once the control behavior and power requirements stop changing.",
];
</script>
