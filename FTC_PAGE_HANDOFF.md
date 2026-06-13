# FTC Portfolio Page Handoff

## Goal

Build the FTC case study gradually as Ben supplies photos, videos, code, and notes.
Keep it visual and skimmable instead of creating one long chronological essay.

The preferred structure is:

1. A short whole-robot timeline for context.
2. Focused chapters for each robot iteration or subsystem.
3. Each chapter follows: **what we built → what failed → what changed → what we learned**.
4. Use only the strongest photos rather than every supplied image.

## Current Page

- Route: `/projects/ftc-robotics`
- Main file: `app/pages/projects/ftc-robotics.vue`
- Homepage project data: `app/data/portfolio.json`
- Homepage card image: `public/ftc-v3-hero.png`

The page currently contains:

- A brief official explanation of the 2025–2026 FTC game, DECODE.
- Version 1's complete ball path:
  - Rubber-band intake
  - Vectored centering wheels
  - Servo kicker
  - Single-motor flywheel with adjustable hood
  - Arducam/AprilTag-guided rotating turret
- A failure-and-response table.
- Selected Version 1 build and field photos.
- A working turret video player.
- A shared shooter-control section before the robot chronology explains
  odometry-based distance, the tested distance-to-RPM regression, and PID
  flywheel correction.
- The real RPM-recovery graph and PID feedback-loop diagram appear together in
  that early shared-control section.
- The original shooter CAD remains in Version 1 as a compact historical
  reference.
- A complete Version 2 chapter covering:
  - Direct-drive rubber-wheel intake
  - Vectored wheels and funnel
  - Floating intake compliance
  - Trapdoor ball control
  - Smaller adjustable hood
  - Dual shooter motors
  - Temporary removal of the turret
  - Odometry and trigonometry-based chassis aiming
  - Distance-to-RPM regression
  - Limelight AprilTag scanning
  - Road Runner autonomous
- A compact three-card explanation of the floating intake.
- Ben's supplied field-targeting reference, with a caption clarifying that
  Version 2 rotated the chassis rather than the turret shown in the graphic.
- Real FTC Dashboard telemetry showing flywheel RPM recovery.
- A portrait rapid-fire video slot.
- The team photo and second-place/Super Qualifier finalist result.
- A complete Version 3/final robot chapter covering:
  - Bumpers replacing the funnel
  - Floating direct-drive intake retained
  - Trapdoor retained
  - Compact drivetrain packaging with motors moved rearward
  - Servo-driven turret
  - Modular gears at a 1:1 ratio
  - Odometry-only turret targeting without an aiming camera
  - NYC Championship use
- The finished Version 3 robot as the full opening hero image.
- A turret-tracking video slot.

Keep each mechanism inside the robot version where it belongs. Do not restore a
standalone shooter chapter between Version 1 and Version 2; it breaks the
chronology and repeats details already explained by each version.

## Version 1 Story

The first robot used rubber bands to collect ARTIFACTS. Vectored wheels were
supposed to move each ball sideways into the firing path. A servo kicker then
attempted to lift the ball into a single-motor flywheel shooter with an
adjustable hood.

The shooter sat on a geared motorized turret. An Arducam scanned AprilTags so
the robot could rotate the turret toward the target.

Testing exposed four major problems:

1. Intake bands stretched, tangled, and failed at useful speed.
2. Vectored wheels lacked compression and centered balls too slowly.
3. The servo kicker was not powerful enough.
4. The turret cable could extend outside the legal 18 × 18 inch footprint.

Temporary or immediate responses:

- Shorter intake bands
- Replacing the servo kicker with a motor-driven feeder wheel
- Zip-tying the turret cable down
- Carrying intake compression and cable management into the next redesign

Both Version 1 and Version 2 used a PID loop to bring the flywheel to a target
RPM. The requested RPM came from a regression built through shooting tests that
mapped distance from the GOAL to flywheel speed.

## Version 2 Story

Version 2 replaced the rubber-band intake with direct-drive rubber wheels.
Vectored wheels and a funnel guided ARTIFACTS toward the shooter. The
vectored-wheel assembly could float upward through a limited range so the
intake, rather than the entire chassis, moved when a ball entered.

The floating intake reduced chassis bounce, but pickup coverage remained weak
at the outer edges of the funnel because those areas extended beyond the
intake's reliable reach.

A trapdoor stopped ARTIFACTS from moving directly into the shooter before the
robot was ready to fire.

The shooter kept its adjustable hood and PID speed control, but used a smaller
hood and two shooter motors. The second motor made spin-up and recovery much
faster.

Because the team was time-crunched, the turret was temporarily removed.
Version 2 aimed by rotating the entire chassis:

1. Odometry supplied the robot's field position and heading.
2. Trigonometry calculated the heading from the robot to the fixed GOAL.
3. The chassis rotated toward that heading.
4. The distance formula calculated range to the GOAL.
5. A tested regression converted distance to target flywheel RPM.
6. The PID loop drove the flywheel to that RPM.

Version 2 also moved from the Arducam to a Limelight for higher-frame-rate
AprilTag scanning and used Road Runner for an autonomous match routine.

This robot reached the Super Qualifier final and finished in second place.

## Version 3 Story

Version 3 was the final and strongest robot, used at the NYC Championship.

The direct-drive rubber-wheel intake, floating compliance, vectored wheels, and
trapdoor were retained. The funnel was removed and replaced with low-profile
bumpers. Testing showed that impacts against the funnel could push ARTIFACTS
away before the vectored wheels established contact. The bumpers deflected the
impact without interrupting the path into the wheels, producing smoother
vectoring.

The turret returned. A servo drove modular gears at a 1:1 ratio to rotate the
complete shooter assembly. Unlike Version 1, this turret did not rely on a
camera. Odometry supplied the robot pose, and the same field geometry used to
rotate the Version 2 chassis now calculated a turret angle. This allowed the
robot to drive in one direction while the shooter tracked the GOAL
independently.

The drivetrain motors were moved toward the rear, reducing the overall robot
size and freeing packaging space around the intake and rotating shooter.

The robot performed well at the NYC Championship but did not advance to Worlds.

## Current Assets

- `public/ftc-v1-cutout.png`
- `public/ftc-v1-field.png`
- `public/ftc-v1-front.png`
- `public/ftc-v1-repair.png`
- `public/ftc-v1-turret-closeup.png`
- `public/ftc-v1-build-night.png`
- `public/ftc-v1-turret.mp4`
- `public/ftc-shooter-oldest.png`
- `public/ftc-shooter-newest.png`
- `public/ftc-v1-footprint-cad.png`
- `public/ftc-v2-intake-cad.png`
- `public/ftc-v2-front.png`
- `public/ftc-v2-field-targeting.png`
- `public/ftc-v2-rpm-recovery.png`
- `public/ftc-v2-engineering-poster.png`
- `public/ftc-v2-super-qualifier-team.png`
- `public/ftc-v2-rapid-fire.mp4`
- `public/ftc-v3-hero.png`
- `public/ftc-v3-overview.png`
- `public/ftc-v3-cad.png`
- `public/ftc-v3-overhead.png`
- `public/ftc-v3-turret-action.png`
- `public/ftc-v3-turret-closeup.png`
- `public/ftc-v3-rear-field.png`
- `public/ftc-v3-competition-side.png`
- `public/ftc-v3-alliance.png`
- `public/ftc-v3-turret-tracking.mp4`

The video slot is designed for the portrait phone recording of three ARTIFACTS
being fired rapidly.

Not every asset is currently displayed. Keep unused images available in case
they support a later comparison.

## How To Add More Detail

The robot iteration story is complete. Future additions should deepen existing
chapters rather than create an unsupported Version 4.

1. Read `app/pages/projects/ftc-robotics.vue`.
2. Add focused details to the relevant existing robot version.
3. Good remaining topics include autonomous paths, odometry implementation,
   turret tracking code, match strategy, and NYC Championship performance.
4. Do not invent match records, awards, performance numbers, or individual
   responsibilities.

## Recommended Information To Ask For

If important details are missing, ask only focused questions:

- What changed mechanically from Version 1?
- Which Version 1 problem was each change meant to solve?
- What worked better in testing or competition?
- What still failed?
- What code changed with the hardware?
- Which photos show the complete robot, the mechanism, and the failure/fix?
- Is there a useful video?

Do not require Ben to answer everything before editing. Build incrementally from
what is available.

## Writing Style

- Use Ben's first-person perspective where appropriate.
- Preserve technical detail but remove repetition.
- Prefer short headings, diagrams, comparison cards, photos, and tables.
- Avoid giant paragraphs and exhaustive event-by-event timelines.
- Explain engineering decisions, not just component names.
- Treat failures as evidence of iteration, not as embarrassing mistakes.
- Do not invent performance numbers, team roles, design reasons, or outcomes.

## Asset Naming

Use predictable names:

- `ftc-v2-overview.png`
- `ftc-v2-intake.png`
- `ftc-v2-shooter.png`
- `ftc-v2-repair.png`
- `ftc-v2-demo.mp4`

Put browser-served media in `public/`.

For video, prefer H.264 MP4 with AAC audio. Use a native `<video>` player with
controls, `playsinline`, `preload="metadata"`, and a poster image.

## Suggested Next-Chat Prompt

> Read `FTC_PAGE_HANDOFF.md` and the current FTC page. Here are additional
> notes or media for [Version 1 / Version 2 / Version 3 / code / competition].
> Add them to the relevant existing chapter, keep the page concise, choose only
> the strongest media, and run the build.
