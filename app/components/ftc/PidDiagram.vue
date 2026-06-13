<template>
  <figure class="overflow-hidden border border-white/15 bg-slate-900">
    <div class="border-b border-white/15 px-5 py-4">
      <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300">
        Closed-loop flywheel control
      </p>
      <h3 class="mt-1 font-semibold text-white">
        Flywheel PID feedback loop
      </h3>
    </div>

    <svg
      viewBox="0 0 760 360"
      role="img"
      aria-labelledby="pid-title pid-desc"
      class="h-auto w-full"
    >
      <title id="pid-title">Flywheel PID feedback loop</title>
      <desc id="pid-desc">
        Target RPM is compared with measured RPM. A PID controller changes motor
        power and encoder feedback closes the loop.
      </desc>

      <defs>
        <marker
          id="pid-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#c4b5fd" />
        </marker>
      </defs>

      <rect width="760" height="360" fill="#0f172a" />
      <g fill="none" stroke="#334155" stroke-width="1">
        <path v-for="x in 19" :key="`x-${x}`" :d="`M${x * 38} 0 V360`" />
        <path v-for="y in 9" :key="`y-${y}`" :d="`M0 ${y * 40} H760`" />
      </g>

      <g font-family="ui-monospace, SFMono-Regular, Menlo, monospace">
        <g transform="translate(34 126)">
          <rect width="126" height="76" rx="4" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
          <text x="63" y="29" text-anchor="middle" fill="#c4b5fd" font-size="12">TARGET</text>
          <text x="63" y="53" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">RPM</text>
        </g>

        <circle cx="212" cy="164" r="27" fill="#1e293b" stroke="#cbd5e1" stroke-width="2" />
        <text x="212" y="171" text-anchor="middle" fill="#fff" font-size="24">Σ</text>
        <text x="187" y="135" fill="#a7f3d0" font-size="15">+</text>
        <text x="207" y="208" fill="#fca5a5" font-size="15">−</text>

        <g transform="translate(278 112)">
          <rect width="145" height="104" rx="4" fill="#6d28d9" />
          <text x="72.5" y="31" text-anchor="middle" fill="#ede9fe" font-size="12">CONTROLLER</text>
          <text x="72.5" y="64" text-anchor="middle" fill="#fff" font-size="24" font-weight="700">P + I + D</text>
          <text x="72.5" y="87" text-anchor="middle" fill="#ddd6fe" font-size="11">correct RPM error</text>
        </g>

        <g transform="translate(488 126)">
          <rect width="126" height="76" rx="4" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
          <text x="63" y="29" text-anchor="middle" fill="#c4b5fd" font-size="12">MOTOR POWER</text>
          <text x="63" y="54" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">FLYWHEEL</text>
        </g>

        <g transform="translate(631 247)">
          <rect width="96" height="55" rx="4" fill="#1e293b" stroke="#64748b" />
          <text x="48" y="24" text-anchor="middle" fill="#cbd5e1" font-size="11">ENCODER</text>
          <text x="48" y="41" text-anchor="middle" fill="#fff" font-size="12">measured RPM</text>
        </g>
      </g>

      <g fill="none" stroke="#c4b5fd" stroke-width="3" marker-end="url(#pid-arrow)">
        <path d="M160 164 H183" />
        <path d="M239 164 H274" />
        <path d="M423 164 H484" />
        <path d="M614 164 H679 V243" />
        <path d="M631 275 H212 V195" />
      </g>

      <text x="351" y="75" text-anchor="middle" fill="#94a3b8" font-size="14">
        same control strategy on both robot versions
      </text>
    </svg>

    <figcaption class="border-t border-white/15 px-5 py-4 text-sm leading-6 text-slate-300">
      The controller continuously compared requested and measured flywheel RPM.
      Version 2 kept this loop, but two shooter motors recovered to the target
      speed much faster between shots.
    </figcaption>
  </figure>
</template>
