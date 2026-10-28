/* ═══════════════════════════════════════════════════════════════
   CONSOLE DASHBOARD — MAIN SCRIPT
   ═══════════════════════════════════════════════════════════════ */

// ─── Game Data ───
const games = [
  {
    id: 'shadow-realm',
    title: 'Shadow Realm: Awakening',
    cover: 'assets/covers/shadow_realm.svg',
    progress: 45,
    playtime: '4h 28min',
    rewards: { earned: 10, total: 36 },
    gradient: 'radial-gradient(ellipse at 65% 35%, #3b1d6e 0%, #1a0a2e 40%, #07080C 100%)',
    glowColor: 'rgba(139, 92, 246, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.25) 0%, transparent 70%)',
  },
  {
    id: 'neon-circuit',
    title: 'Neon Circuit',
    cover: 'assets/covers/neon_circuit.svg',
    progress: 78,
    playtime: '12h 15min',
    rewards: { earned: 28, total: 42 },
    gradient: 'radial-gradient(ellipse at 60% 40%, #0e3b5e 0%, #1a0533 40%, #07080C 100%)',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 70%)',
  },
  {
    id: 'celestial-drift',
    title: 'Celestial Drift',
    cover: 'assets/covers/celestial_drift.svg',
    progress: 22,
    playtime: '2h 45min',
    rewards: { earned: 5, total: 50 },
    gradient: 'radial-gradient(ellipse at 70% 30%, #0a2a4a 0%, #0d1b3a 45%, #07080C 100%)',
    glowColor: 'rgba(59, 130, 246, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 55% 35%, rgba(59,130,246,0.2) 0%, transparent 70%)',
  },
  {
    id: 'iron-vanguard',
    title: 'Iron Vanguard',
    cover: 'assets/covers/iron_vanguard.svg',
    progress: 91,
    playtime: '28h 03min',
    rewards: { earned: 38, total: 40 },
    gradient: 'radial-gradient(ellipse at 65% 40%, #4a2000 0%, #2a1000 40%, #07080C 100%)',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 60% 45%, rgba(245,158,11,0.2) 0%, transparent 70%)',
  },
  {
    id: 'whisper-wild',
    title: 'Whisper of the Wild',
    cover: 'assets/covers/whisper_wild.svg',
    progress: 56,
    playtime: '8h 12min',
    rewards: { earned: 18, total: 32 },
    gradient: 'radial-gradient(ellipse at 55% 50%, #0a3a1a 0%, #0a2010 40%, #07080C 100%)',
    glowColor: 'rgba(34, 197, 94, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.2) 0%, transparent 70%)',
  },
  {
    id: 'crimson-depths',
    title: 'Crimson Depths',
    cover: 'assets/covers/crimson_depths.svg',
    progress: 33,
    playtime: '5h 40min',
    rewards: { earned: 12, total: 44 },
    gradient: 'radial-gradient(ellipse at 60% 45%, #3a0a1a 0%, #1a0510 40%, #07080C 100%)',
    glowColor: 'rgba(239, 68, 68, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 55% 45%, rgba(239,68,68,0.2) 0%, transparent 70%)',
  },
  {
    id: 'starfall-legacy',
    title: 'Starfall Legacy',
    cover: 'assets/covers/starfall_legacy.svg',
    progress: 67,
    playtime: '15h 22min',
    rewards: { earned: 22, total: 48 },
    gradient: 'radial-gradient(ellipse at 70% 35%, #0a1a3a 0%, #050d2a 40%, #07080C 100%)',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    ambientColor: 'radial-gradient(ellipse at 60% 35%, rgba(99,102,241,0.2) 0%, transparent 70%)',
  },
  {
    id: 'phantom-edge',
    title: 'Phantom Edge',
    cover: 'assets/covers/phantom_edge.svg',
    progress: 12,
    playtime: '1h 05min',
    rewards: { earned: 3, total: 40 },
    gradient: 'radial-gradient(ellipse at 55% 30%, #1a1a2e 0%, #0a0a15 40%, #07080C 100%)',
    glowColor: 'rgba(148, 163, 184, 0.3)',
    ambientColor: 'radial-gradient(ellipse at 50% 35%, rgba(148,163,184,0.15) 0%, transparent 70%)',
  },
];

// ─── State ───
let activeIndex = 0;
let bgToggle = true;
let navLock = false;
const NAV_COOLDOWN = 200; // ms between nav events

// ─── DOM References ───
const dom = {
  tileRow:      document.getElementById('tileRow'),
  gameTitle:    document.getElementById('gameTitle'),
  gameTag:      document.getElementById('gameTag'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  playtimeText: document.getElementById('playtimeText'),
  rewardsText:  document.getElementById('rewardsText'),
  heroInfo:     document.getElementById('heroInfo'),
  heroBg1:      document.getElementById('heroBg1'),
  heroBg2:      document.getElementById('heroBg2'),
  ambientGlow:  document.getElementById('ambientGlow'),
  clock:        document.getElementById('clock'),
  particles:    document.getElementById('particles'),
  toast:        document.getElementById('toast'),
  scrollLeft:   document.getElementById('scrollLeft'),
  scrollRight:  document.getElementById('scrollRight'),
};


// ═══════════════════════════════════════════════════════════════
// TILE RENDERING
// ═══════════════════════════════════════════════════════════════

function renderTiles() {
  dom.tileRow.innerHTML = '';

  games.forEach((game, i) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.setAttribute('role', 'option');
    tile.setAttribute('aria-selected', 'false');
    tile.setAttribute('aria-label', game.title);
    tile.setAttribute('tabindex', '-1');
    tile.dataset.index = i;
    tile.style.setProperty('--tile-glow', game.glowColor);
    // Gradient fallback background
    tile.style.background = game.gradient;
    // Staggered intro delay
    tile.style.transitionDelay = `${0.5 + i * 0.06}s, ${0.5 + i * 0.06}s, 0s, 0s, 0s, 0s, 0s`;

    const img = document.createElement('img');
    img.src = game.cover;
    img.alt = game.title;
    img.loading = i < 4 ? 'eager' : 'lazy';
    img.draggable = false;
    // On error, hide image — gradient fallback shows
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });

    const label = document.createElement('span');
    label.className = 'tile-label';
    label.textContent = game.title;

    tile.appendChild(img);
    tile.appendChild(label);

    // Click handler
    tile.addEventListener('click', () => setActive(i));

    dom.tileRow.appendChild(tile);
  });
}


// ═══════════════════════════════════════════════════════════════
// ACTIVE STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════

function setActive(index, options = {}) {
  const { animate = true, scroll = true } = options;

  if (index < 0 || index >= games.length) return;
  if (index === activeIndex && animate) return;

  activeIndex = index;
  const game = games[index];
  const tiles = dom.tileRow.querySelectorAll('.tile');

  // Update tile states
  tiles.forEach((t, i) => {
    const isActive = i === index;
    t.classList.toggle('is-active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    t.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  // Scroll into view
  if (scroll && tiles[index]) {
    tiles[index].scrollIntoView({
      behavior: animate ? 'smooth' : 'auto',
      block: 'nearest',
      inline: 'center',
    });
  }

  // Focus tile
  tiles[index]?.focus({ preventScroll: true });

  // Crossfade background
  updateBackground(game, animate);

  // Update hero info
  if (animate) {
    updateHeroInfoAnimated(game);
  } else {
    updateHeroInfoImmediate(game);
  }

  // Update ambient glow
  dom.ambientGlow.style.background = game.ambientColor;

  // Update scroll indicators
  updateScrollIndicators();
}


// ═══════════════════════════════════════════════════════════════
// BACKGROUND CROSSFADE
// ═══════════════════════════════════════════════════════════════

function updateBackground(game, animate = true) {
  const activeBg = bgToggle ? dom.heroBg1 : dom.heroBg2;
  const inactiveBg = bgToggle ? dom.heroBg2 : dom.heroBg1;

  // Set background image (with gradient fallback)
  const bgImage = `url('${game.cover}')`;
  inactiveBg.style.backgroundImage = bgImage;
  inactiveBg.style.background = `${game.gradient}`;

  // Try loading the cover as background; on success use it
  const testImg = new Image();
  testImg.onload = () => {
    inactiveBg.style.backgroundImage = bgImage;
    inactiveBg.style.backgroundSize = 'cover';
    inactiveBg.style.backgroundPosition = 'center right';
  };
  testImg.src = game.cover;

  if (animate) {
    requestAnimationFrame(() => {
      activeBg.classList.remove('active');
      inactiveBg.classList.add('active');
      bgToggle = !bgToggle;
    });
  } else {
    activeBg.classList.remove('active');
    inactiveBg.classList.add('active');
    bgToggle = !bgToggle;
  }
}


// ═══════════════════════════════════════════════════════════════
// HERO INFO UPDATES
// ═══════════════════════════════════════════════════════════════

function updateHeroInfoAnimated(game) {
  dom.heroInfo.classList.add('transitioning');

  setTimeout(() => {
    setHeroContent(game);
    dom.heroInfo.classList.remove('transitioning');
  }, 180);
}

function updateHeroInfoImmediate(game) {
  setHeroContent(game);
}

function setHeroContent(game) {
  dom.gameTitle.textContent = game.title;
  dom.progressFill.style.width = `${game.progress}%`;
  dom.progressText.textContent = `${game.progress}%`;
  dom.playtimeText.textContent = game.playtime;
  dom.rewardsText.textContent = `${game.rewards.earned}/${game.rewards.total} Rewards`;
}


// ═══════════════════════════════════════════════════════════════
// KEYBOARD NAVIGATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      navigateTile(-1);
      break;

    case 'ArrowRight':
      e.preventDefault();
      navigateTile(1);
      break;

    case 'Enter':
    case ' ':
      e.preventDefault();
      handlePlay();
      break;

    case 'i':
    case 'I':
      e.preventDefault();
      handleDetails();
      break;

    case 'Escape':
      e.preventDefault();
      showToast('Kembali');
      break;

    case 'Home':
      e.preventDefault();
      setActive(0);
      break;

    case 'End':
      e.preventDefault();
      setActive(games.length - 1);
      break;
  }
});

function navigateTile(direction) {
  if (navLock) return;

  const newIndex = activeIndex + direction;
  if (newIndex < 0 || newIndex >= games.length) return;

  navLock = true;
  setActive(newIndex);

  // Play tick sound feedback (visual flash as substitute)
  const tile = dom.tileRow.querySelectorAll('.tile')[newIndex];
  if (tile) {
    tile.style.filter = 'brightness(1.3)';
    setTimeout(() => { tile.style.filter = ''; }, 100);
  }

  setTimeout(() => { navLock = false; }, NAV_COOLDOWN);
}


// ═══════════════════════════════════════════════════════════════
// GAMEPAD SUPPORT
// ═══════════════════════════════════════════════════════════════

let gamepadActive = false;
let prevGamepadState = {};

function pollGamepad() {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];

  for (const gp of gamepads) {
    if (!gp) continue;
    gamepadActive = true;

    const id = gp.index;
    const prev = prevGamepadState[id] || {};

    // D-pad left (14) / right (15) — single press detection
    const dLeft = gp.buttons[14]?.pressed;
    const dRight = gp.buttons[15]?.pressed;
    const btnA = gp.buttons[0]?.pressed;
    const btnY = gp.buttons[3]?.pressed;
    const btnB = gp.buttons[1]?.pressed;

    // Left stick
    const stickLeft = gp.axes[0] < -0.5;
    const stickRight = gp.axes[0] > 0.5;

    if ((dLeft || stickLeft) && !prev.left) navigateTile(-1);
    if ((dRight || stickRight) && !prev.right) navigateTile(1);
    if (btnA && !prev.a) handlePlay();
    if (btnY && !prev.y) handleDetails();
    if (btnB && !prev.b) showToast('Kembali');

    prevGamepadState[id] = {
      left: dLeft || stickLeft,
      right: dRight || stickRight,
      a: btnA,
      y: btnY,
      b: btnB,
    };
  }

  requestAnimationFrame(pollGamepad);
}

// Start polling on gamepad connect
window.addEventListener('gamepadconnected', (e) => {
  showToast(`🎮 Controller terhubung: ${e.gamepad.id.split('(')[0].trim()}`);
  if (!gamepadActive) {
    requestAnimationFrame(pollGamepad);
  }
});

window.addEventListener('gamepaddisconnected', () => {
  showToast('🎮 Controller terputus');
});


// ═══════════════════════════════════════════════════════════════
// ACTIONS
// ═══════════════════════════════════════════════════════════════

function handlePlay() {
  const game = games[activeIndex];
  const tile = dom.tileRow.querySelectorAll('.tile')[activeIndex];

  // Button press animation
  if (tile) {
    tile.style.transform = 'scale(0.93)';
    setTimeout(() => { tile.style.transform = ''; }, 200);
  }

  // Play button animation
  const btn = document.getElementById('btnPlay');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => { btn.style.transform = ''; }, 150);

  showToast(`▶ Memulai ${game.title}...`);
}

function handleDetails() {
  const game = games[activeIndex];
  showToast(`ℹ️ Detail: ${game.title}`);
}


// ═══════════════════════════════════════════════════════════════
// CLOCK
// ═══════════════════════════════════════════════════════════════

function updateClock() {
  const now = new Date();
  dom.clock.textContent = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}


// ═══════════════════════════════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════════════════════════════

function createParticles(count = 20) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.width = `${1 + Math.random() * 2}px`;
    p.style.height = p.style.width;
    p.style.opacity = 0.15 + Math.random() * 0.3;
    p.style.animationDuration = `${8 + Math.random() * 16}s`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    dom.particles.appendChild(p);
  }
}


// ═══════════════════════════════════════════════════════════════
// SCROLL INDICATORS
// ═══════════════════════════════════════════════════════════════

function updateScrollIndicators() {
  const row = dom.tileRow;
  const canScrollLeft = row.scrollLeft > 10;
  const canScrollRight = row.scrollLeft < row.scrollWidth - row.clientWidth - 10;

  dom.scrollLeft.classList.toggle('visible', canScrollLeft);
  dom.scrollRight.classList.toggle('visible', canScrollRight);
}

dom.tileRow.addEventListener('scroll', () => {
  requestAnimationFrame(updateScrollIndicators);
});


// ═══════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════

let toastTimer = null;

function showToast(message, duration = 2000) {
  clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add('show');

  toastTimer = setTimeout(() => {
    dom.toast.classList.remove('show');
  }, duration);
}


// ═══════════════════════════════════════════════════════════════
// TOUCH / SWIPE (mobile)
// ═══════════════════════════════════════════════════════════════

let touchStartX = 0;
let touchStartY = 0;

dom.tileRow.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

dom.tileRow.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Only horizontal swipe
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0) {
      navigateTile(-1);
    } else {
      navigateTile(1);
    }
  }
}, { passive: true });


// ═══════════════════════════════════════════════════════════════
// BUTTON EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════

document.getElementById('btnPlay').addEventListener('click', handlePlay);
document.getElementById('btnDetails').addEventListener('click', handleDetails);

document.getElementById('btnVoice').addEventListener('click', () => {
  showToast('🎙 Pencarian suara belum tersedia');
});

document.getElementById('btnSettings').addEventListener('click', () => {
  showToast('⚙️ Pengaturan belum tersedia');
});


// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

function init() {
  // Render tiles
  renderTiles();

  // Set initial active (no animation)
  setActive(0, { animate: false, scroll: false });

  // Start clock
  updateClock();
  setInterval(updateClock, 30000);

  // Create particles
  createParticles(25);

  // Trigger intro animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('loaded');
    });
  });

  // Start gamepad polling if gamepads already connected
  if (navigator.getGamepads) {
    const existing = navigator.getGamepads();
    for (const gp of existing) {
      if (gp) {
        requestAnimationFrame(pollGamepad);
        break;
      }
    }
  }
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
