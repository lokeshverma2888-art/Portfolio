/* ============================================================
   ASTROPHOTOGRAPHY PORTFOLIO — MAIN SCRIPT
   ============================================================ */

// Run reveal on first load too
window.addEventListener('load', () => {
  setTimeout(initReveal, 100);
});

'use strict';

/* ── All Images — distributed across categories ── */
const IMAGES = [
  // Astrophotography
  { file: 'images/18080060836650877.jpg', cat: 'astro', title: 'Galactic Core', caption: 'The Milky Way arches above a forgotten plateau — 25 seconds at f/1.8, ISO 6400.', lens: 'FE 14mm f/1.8 GM', settings: '25s · f/1.8 · ISO 6400' },
  { file: 'images/18056945230943198.jpg', cat: 'astro', title: 'River of Stars', caption: 'A long exposure reveals what the eye barely perceives — the river of light above us all.', lens: 'FE 14mm f/1.8 GM', settings: '20s · f/1.8 · ISO 8000' },
  { file: 'images/18077405557546537.jpg', cat: 'astro', title: 'Night Expanse', caption: 'Standing at the edge of a hill, the cosmos feels within reach.', lens: 'FE 24mm f/1.4 GM', settings: '15s · f/1.4 · ISO 4000' },
  { file: 'images/18079351318550753.jpg', cat: 'astro', title: 'Starfall', caption: 'A meteor cuts silently across the Perseus constellation.', lens: 'FE 14mm f/1.8 GM', settings: '20s · f/1.8 · ISO 6400' },
  { file: 'images/17897523375079287.jpg', cat: 'astro', title: 'Deep Dark', caption: 'The darkest point of the night holds the most light.', lens: 'FE 14mm f/1.8 GM', settings: '30s · f/1.8 · ISO 8000' },
  { file: 'images/18023666279361131.jpg', cat: 'astro', title: 'Zenith', caption: 'Looking straight up into the infinite — the most humbling angle.', lens: 'FE 14mm f/1.8 GM', settings: '25s · f/1.8 · ISO 6400' },
  { file: 'images/17935871090475919.jpg', cat: 'astro', title: 'Starscape I', caption: 'A crisp winter night reveals thousands of stars invisible in summer haze.', lens: 'FE 24mm f/1.4 GM', settings: '15s · f/1.4 · ISO 3200' },
  { file: 'images/17953028462059351.jpg', cat: 'astro', title: 'Blue Hour Universe', caption: 'Shot just after astronomical twilight — the sky still holds a memory of day.', lens: 'FE 14mm f/1.8 GM', settings: '8s · f/1.8 · ISO 3200' },
  { file: 'images/18030455410454321.jpg', cat: 'astro', title: 'Starscape II', caption: 'The sky before a new moon — perfect darkness, infinite depth.', lens: 'FE 14mm f/1.8 GM', settings: '20s · f/1.8 · ISO 8000' },
  { file: 'images/17965090060557637.jpg', cat: 'astro', title: 'Cosmic Weave', caption: 'Nebulae threads visible to long exposures weave between familiar constellations.', lens: 'FE 24mm f/1.4 GM', settings: '25s · f/1.4 · ISO 6400' },
  { file: 'images/18044250602213767.jpg', cat: 'astro', title: 'The Watch', caption: 'Waiting for the Milky Way to rise — patience is the foundation of astrophotography.', lens: 'FE 14mm f/1.8 GM', settings: '20s · f/1.8 · ISO 5000' },
  { file: 'images/17981843557500713.jpg', cat: 'astro', title: 'Void & Light', caption: 'Between voids and clusters, I find a strange comfort.', lens: 'FE 14mm f/1.8 GM', settings: '30s · f/1.8 · ISO 8000' },

  // Silent Spaces
  { file: 'images/17934638192912409.jpg', cat: 'silent', title: 'Empty Road', caption: 'A highway at 4 AM — no one, nothing, just the hum of the world breathing.', lens: 'FE 24mm f/1.4 GM', settings: '8s · f/4 · ISO 400' },
  { file: 'images/17891971817681992.webp', cat: 'silent', title: 'Mist Valley', caption: 'Fog erases everything unnecessary. What remains is pure.', lens: 'FE 85mm f/1.4 GM', settings: '1/125s · f/4 · ISO 800' },
  { file: 'images/17856707966894011.webp', cat: 'silent', title: 'Before Sunrise', caption: 'The 15 minutes before sunrise belong to no one and everything.', lens: 'FE 24mm f/1.4 GM', settings: '1/60s · f/2.8 · ISO 1600' },
  { file: 'images/17859811235670555.jpg', cat: 'silent', title: 'Still Water', caption: 'A lake at dusk holds the sky like a mirror of a quieter world.', lens: 'FE 24mm f/1.4 GM', settings: '2s · f/8 · ISO 200' },
  { file: 'images/17861209508743804.webp', cat: 'silent', title: 'The Empty Bench', caption: 'Every empty seat tells the story of someone who has left.', lens: 'FE 85mm f/1.4 GM', settings: '1/200s · f/2 · ISO 200' },
  { file: 'images/17880720461726024.webp', cat: 'silent', title: 'Fog Morning', caption: 'Silence has a texture — this is it.', lens: 'FE 24mm f/1.4 GM', settings: '1/80s · f/4 · ISO 1000' },
  { file: 'images/18166613917282754.webp', cat: 'silent', title: 'Patience', caption: 'I waited three hours for this light. It stayed for forty seconds.', lens: 'FE 24mm f/1.4 GM', settings: '1/250s · f/5.6 · ISO 400' },
  { file: 'images/17933603510626394.webp', cat: 'silent', title: 'The Abandoned', caption: 'Places forgotten by time hold a dignity that new places cannot.', lens: 'FE 24mm f/1.4 GM', settings: '1/60s · f/2.8 · ISO 2000' },
  { file: 'images/17944842514923812.webp', cat: 'silent', title: 'Moonglow', caption: 'Moonlight on water — everything silver, everything still.', lens: 'FE 24mm f/1.4 GM', settings: '4s · f/2.8 · ISO 1600' },
  { file: 'images/18197561482212627.webp', cat: 'silent', title: 'Vapor Trail', caption: 'A single contrail divides the sky into before and after.', lens: 'FE 85mm f/1.4 GM', settings: '1/500s · f/5.6 · ISO 200' },
  { file: 'images/17918079766820804.jpg', cat: 'silent', title: 'The Season Turns', caption: 'Between seasons, the world holds its breath.', lens: 'FE 24mm f/1.4 GM', settings: '1/125s · f/4 · ISO 800' },
  { file: 'images/18257480341051863.webp', cat: 'silent', title: 'Lonesome Pier', caption: 'At the end of a pier, you are closer to infinity than you think.', lens: 'FE 24mm f/1.4 GM', settings: '30s · f/8 · ISO 100' },
  { file: 'images/18264690844062876.webp', cat: 'silent', title: 'Driftwood', caption: 'The beach remembers everything the sea brings and takes away.', lens: 'FE 24mm f/1.4 GM', settings: '1/400s · f/5.6 · ISO 200' },
  { file: 'images/17934060170395321.webp', cat: 'silent', title: 'Winter Bare', caption: 'A tree stripped of leaves stands more honest than ever before.', lens: 'FE 85mm f/1.4 GM', settings: '1/320s · f/4 · ISO 400' },
  { file: 'images/17972219264227349.webp', cat: 'silent', title: 'Quietude', caption: 'Where everything meets the horizon and there is nowhere left to go.', lens: 'FE 24mm f/1.4 GM', settings: '1/200s · f/8 · ISO 200' },
  { file: 'images/18214952722096141.webp', cat: 'silent', title: 'Atmospheric', caption: 'The air between things is where the real story lives.', lens: 'FE 24mm f/1.4 GM', settings: '1/160s · f/4 · ISO 640' },

  // Urban Nights
  { file: 'images/18034568090255860.jpg', cat: 'urban', title: 'Street Glow', caption: 'City lights on wet pavement — the city doubles in puddles.', lens: 'FE 85mm f/1.4 GM', settings: '1/30s · f/2 · ISO 3200' },
  { file: 'images/17842462379598846.jpg', cat: 'urban', title: 'Night Market', caption: 'Warm light and cold air — the duality of midnight streets.', lens: 'FE 35mm f/1.4 GM', settings: '1/60s · f/2 · ISO 2000' },
  { file: 'images/17857751570046237.jpg', cat: 'urban', title: 'Neon Rain', caption: 'Rain transforms every city into an impressionist painting.', lens: 'FE 85mm f/1.4 GM', settings: '1/40s · f/2 · ISO 4000' },
  { file: 'images/18312666760093685.jpg', cat: 'urban', title: 'Overpass', caption: 'Looking up at urban infrastructure — a cathedral of concrete.', lens: 'FE 24mm f/1.4 GM', settings: '15s · f/8 · ISO 200' },
  { file: 'images/17865811921888231.jpg', cat: 'urban', title: 'Last Bus', caption: 'The last bus of the night carries people who work while others sleep.', lens: 'FE 85mm f/1.4 GM', settings: '1/80s · f/2 · ISO 3200' },
  { file: 'images/17875775651052999.jpg', cat: 'urban', title: 'Arterial', caption: 'Car trails paint the roads in fire. The city breathes neon.', lens: 'FE 24mm f/1.4 GM', settings: '25s · f/8 · ISO 100' },
  { file: 'images/18374597782111608.jpg', cat: 'urban', title: 'Underworld', caption: 'Below the city, another city exists — older, darker, quieter.', lens: 'FE 14mm f/1.8 GM', settings: '6s · f/4 · ISO 1600' },
  { file: 'images/17882615659590980.jpg', cat: 'urban', title: 'Silhouette City', caption: 'Against the light, everything loses its name and becomes shape.', lens: 'FE 85mm f/1.4 GM', settings: '1/250s · f/5.6 · ISO 400' },
  { file: 'images/17888839054943148.jpg', cat: 'urban', title: 'Blue Steel', caption: 'Bridges at night glow with a cold industrial poetry.', lens: 'FE 24mm f/1.4 GM', settings: '10s · f/8 · ISO 400' },
  { file: 'images/17894375002592309.jpg', cat: 'urban', title: 'Corner Store', caption: 'The corner store never closes. Someone always needs something.', lens: 'FE 85mm f/1.4 GM', settings: '1/50s · f/2 · ISO 3200' },
  { file: 'images/17897050322113037.jpg', cat: 'urban', title: 'Fog & Neon', caption: 'Fog in the city turns every light into a glowing ghost.', lens: 'FE 85mm f/1.4 GM', settings: '1/60s · f/2 · ISO 1600' },
  { file: 'images/17903389547010912.jpg', cat: 'urban', title: 'Empty Plaza', caption: 'By 2 AM the plaza belongs to pigeons and photographers.', lens: 'FE 24mm f/1.4 GM', settings: '4s · f/8 · ISO 400' },
  { file: 'images/18009191713958634.webp', cat: 'urban', title: 'Midnight Metro', caption: 'The metro platform at midnight — fluorescence and solitude.', lens: 'FE 35mm f/1.4 GM', settings: '1/30s · f/2 · ISO 3200' },
  { file: 'images/17904953923510255.jpg', cat: 'urban', title: 'Window Light', caption: 'One lit window in a dark building — someone is awake.', lens: 'FE 85mm f/1.4 GM', settings: '1/100s · f/2.8 · ISO 1600' },
  { file: 'images/17905962109538459.jpg', cat: 'urban', title: 'The Pursuit', caption: 'Walking through the city alone at night — the truest freedom.', lens: 'FE 24mm f/1.4 GM', settings: '1/60s · f/2 · ISO 3200' },
  { file: 'images/17907520519953835.jpg', cat: 'urban', title: 'Blueprint City', caption: 'Architecture photographed at night reveals its emotional bones.', lens: 'FE 24mm f/1.4 GM', settings: '8s · f/8 · ISO 200' },
];

/* ─────────────── UTILITIES ─────────────── */
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, mn, mx) { return Math.min(Math.max(v, mn), mx); }
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ─────────────── LOADING SCREEN ─────────────── */
(function initLoader() {
  const loader = $('#loader');
  const fill = $('#loaderBarFill');
  const canvas = $('#loaderCanvas');
  const ctx = canvas.getContext('2d');
  let progress = 0;
  let raf;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Animate stars on loader
  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    a: Math.random(),
    speed: Math.random() * 0.008 + 0.002,
    phase: Math.random() * Math.PI * 2,
  }));

  function drawLoader(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 187, 245, ${s.a})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(drawLoader);
  }
  raf = requestAnimationFrame(drawLoader);

  // Progress simulation
  const interval = setInterval(() => {
    progress += Math.random() * 12 + 4;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    fill.style.width = progress + '%';
    if (progress >= 100) {
      setTimeout(() => {
        loader.classList.add('hidden');
        cancelAnimationFrame(raf);
        document.body.style.overflow = '';
        initReveal();
        // Trigger hero zoom
        const heroImg = $('#heroImg');
        if (heroImg) setTimeout(() => heroImg.classList.add('zoomed'), 100);
      }, 600);
    }
  }, 80);

  document.body.style.overflow = 'hidden';
})();

/* ─────────────── STARFIELD BACKGROUND ─────────────── */
(function initStarfield() {
  const canvas = $('#starfield');
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], animFrame;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(n) {
    return Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      a: Math.random() * 0.7 + 0.2,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      color: Math.random() > 0.85 ? '#b8d4f5' : (Math.random() > 0.7 ? '#ddd0ff' : '#c8bbf5'),
    }));
  }

  resize();
  stars = createStars(220);
  window.addEventListener('resize', () => { resize(); stars = createStars(220); });

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.016;
    stars.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;
      const alpha = s.a * (0.6 + 0.4 * Math.sin(t * s.twinkleSpeed * 60 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba').replace('#b8d4f5', `rgba(184,212,245,${alpha})`).replace('#ddd0ff', `rgba(221,208,255,${alpha})`).replace('#c8bbf5', `rgba(200,187,245,${alpha})`);
      // simplified:
      ctx.fillStyle = `rgba(200, 187, 245, ${alpha})`;
      ctx.fill();
    });
    animFrame = requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────── CUSTOM CURSOR ─────────────── */
(function initCursor() {
  const cursor = $('#cursor');
  const trail = $('#cursorTrail');
  if (!cursor || !trail) return;
  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  (function animTrail() {
    tx = lerp(tx, mx, 0.12);
    ty = lerp(ty, my, 0.12);
    trail.style.left = tx + 'px';
    trail.style.top = ty + 'px';
    requestAnimationFrame(animTrail);
  })();

  document.querySelectorAll('a, button, .masonry-item, .filter-btn, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; trail.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; trail.style.opacity = '1'; });
})();

/* ─────────────── NAVBAR ─────────────── */
(function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger && hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  $$('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active nav highlight on scroll
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = navLinks.find(l => l.getAttribute('data-section') === e.target.id);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
})();

/* ─────────────── HERO PARALLAX ─────────────── */
(function initHeroParallax() {
  const heroBg = $('#heroBg');
  if (!heroBg) return;
  let mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  (function animate() {
    const x = mx * 18;
    const y = my * 12;
    heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
    requestAnimationFrame(animate);
  })();
})();

/* ─────────────── GALLERY ─────────────── */
(function initGallery() {
  const grid = $('#masonryGrid');
  if (!grid) return;

  let currentFilter = 'all';
  let filteredImages = [...IMAGES];
  let currentLightboxIndex = 0;

  // Build masonry items
  function buildGrid(images) {
    grid.innerHTML = '';
    images.forEach((img, i) => {
      const item = document.createElement('div');
      item.className = 'masonry-item';
      item.dataset.index = i;
      item.innerHTML = `
        <img
          src="${img.file}"
          alt="${img.title}"
          loading="lazy"
          style="opacity:0;filter:blur(12px);transition:opacity 0.6s,filter 0.8s"
        />
        <div class="masonry-item-overlay">
          <div class="masonry-item-cat">${catLabel(img.cat)}</div>
          <div class="masonry-item-title">${img.title}</div>
        </div>
        <div class="masonry-item-glow"></div>
      `;

      const imgEl = item.querySelector('img');
      imgEl.addEventListener('load', () => {
        imgEl.style.opacity = '1';
        imgEl.style.filter = 'blur(0)';
      });

      item.addEventListener('click', () => openLightbox(i, images));
      grid.appendChild(item);
    });

    // Observe for scroll reveal
    const mItems = $$('.masonry-item', grid);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    mItems.forEach(m => obs.observe(m));
  }

  function catLabel(cat) {
    return { astro: 'Astrophotography', silent: 'Silent Spaces', urban: 'Urban Nights' }[cat] || cat;
  }

  buildGrid(IMAGES);

  // Filter
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      filteredImages = currentFilter === 'all' ? [...IMAGES] : IMAGES.filter(i => i.cat === currentFilter);
      buildGrid(filteredImages);
    });
  });

  /* ── Lightbox ── */
  const lightbox = $('#lightbox');
  const lbImg = $('#lightboxImg');
  const lbCaption = $('#lightboxCaption');
  const lbLens = $('#exifLens');
  const lbSettings = $('#exifSettings');
  const lbCat = $('#exifCategory');
  const lbClose = $('#lightboxClose');
  const lbPrev = $('#lightboxPrev');
  const lbNext = $('#lightboxNext');
  const lbOverlay = $('#lightboxOverlay');

  function openLightbox(index, images) {
    currentLightboxIndex = index;
    setLightboxImage(images[index]);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Store current images array reference
    lightbox._images = images;
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setLightboxImage(img) {
    lbImg.classList.add('loading');
    lbImg.src = '';
    const tempImg = new Image();
    tempImg.onload = () => {
      lbImg.src = img.file;
      lbImg.classList.remove('loading');
    };
    tempImg.src = img.file;
    lbCaption.textContent = img.caption || img.title;
    lbLens.innerHTML = `<strong>Lens:</strong> ${img.lens}`;
    lbSettings.innerHTML = `<strong>Settings:</strong> ${img.settings}`;
    lbCat.innerHTML = `<strong>Category:</strong> ${catLabel(img.cat)}`;
  }

  function navigate(dir) {
    const imgs = lightbox._images || filteredImages;
    currentLightboxIndex = (currentLightboxIndex + dir + imgs.length) % imgs.length;
    setLightboxImage(imgs[currentLightboxIndex]);
  }

  lbClose && lbClose.addEventListener('click', closeLightbox);
  lbOverlay && lbOverlay.addEventListener('click', closeLightbox);
  lbPrev && lbPrev.addEventListener('click', () => navigate(-1));
  lbNext && lbNext.addEventListener('click', () => navigate(1));

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Touch swipe
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
  });
})();

/* ─────────────── SCROLL REVEAL ─────────────── */
function initReveal() {
  const els = $$('.reveal-up, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ─────────────── SMOOTH SCROLL ─────────────── */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ─────────────── SILENT MODE ─────────────── */
(function initSilentMode() {
  const btn = $('#silentModeBtn');
  if (!btn) return;
  let active = false;
  btn.addEventListener('click', () => {
    active = !active;
    document.body.classList.toggle('silent-active', active);
    btn.classList.toggle('active', active);
    if (active) {
      // Show brief toast
      showToast('Silent Mode On — press again to exit');
    }
  });
  // ESC exits silent mode
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && active) {
      active = false;
      document.body.classList.remove('silent-active');
      btn.classList.remove('active');
    }
  });
})();

/* ─────────────── AMBIENT SOUND ─────────────── */
(function initAmbientSound() {
  const btn = $('#soundBtn');
  if (!btn) return;
  let active = false;
  let audioCtx = null;
  let gainNode = null;
  let windNode = null;

  function createWindSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const bufferSize = audioCtx.sampleRate * 3;
    const buffer = audioCtx.createBuffer(2, bufferSize, audioCtx.sampleRate);

    for (let c = 0; c < 2; c++) {
      const data = buffer.getChannelData(c);
      let last = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 6;
      }
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 280;

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 2);

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    source.start();
    windNode = source;
  }

  btn.addEventListener('click', () => {
    active = !active;
    btn.classList.toggle('active', active);
    btn.title = active ? 'Sound On' : 'Ambient Sound';

    if (active) {
      createWindSound();
      showToast('Ambient sound on');
    } else if (gainNode) {
      gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
      setTimeout(() => { if (audioCtx) { audioCtx.close(); audioCtx = null; } }, 2000);
      showToast('Sound off');
    }
  });
})();

/* ─────────────── TOAST ─────────────── */
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = `
      position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(20px);
      background:rgba(12,12,30,0.9);border:1px solid rgba(124,92,252,0.3);
      backdrop-filter:blur(20px);padding:0.6rem 1.4rem;border-radius:100px;
      font-family:'Space Grotesk',sans-serif;font-size:0.75rem;letter-spacing:0.08em;
      color:#c8bbf5;z-index:9000;opacity:0;transition:all 0.4s;pointer-events:none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 2500);
}

/* ─────────────── CONTACT FORM ─────────────── */
(function initContact() {
  const form = $('#contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = $('#submitBtn');
    btn.classList.add('sending');
    btn.querySelector('span').textContent = 'Sending…';
    setTimeout(() => {
      form.innerHTML = `<div class="form-success show" style="opacity:1;transform:translateY(0);text-align:center;padding:3rem 2rem;font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-style:italic;color:#c8bbf5">
        ✦ Message received — I'll reach out soon
      </div>`;
    }, 1400);
  });
})();

/* ─────────────── SCROLL INERTIA (CSS-based smooth) ─────────────── */
// Native CSS scroll-behavior: smooth is more compatible.
// We add subtle momentum via passive wheel listener (no preventDefault)
(function initSmoothScrollInertia() {
  if (window.innerWidth < 768) return;

  // CSS approach: override scroll behavior per-element
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add subtle eased transitions on anchor clicks (already handled by initSmoothScroll)
  // Extra: track scroll position for parallax
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
  }, { passive: true });
})();

/* ─────────────── SECTION DIVIDERS (aurora lines) ─────────────── */
(function injectDividers() {
  const sections = $$('section:not(#home)');
  sections.forEach(sec => {
    if (sec.querySelector('.aurora-divider')) return;
    const div = document.createElement('div');
    div.className = 'aurora-divider';
    div.style.cssText = `
      position:absolute;top:0;left:10%;right:10%;height:1px;
      background:linear-gradient(90deg,transparent,rgba(124,92,252,0.4),rgba(78,168,222,0.3),transparent);
      pointer-events:none;
    `;
    sec.style.position = sec.style.position || 'relative';
    sec.prepend(div);
  });
})();

console.log('%c✦ Lokesh Portfolio%c — Capturing Silence Between the Stars',
  'color:#7c5cfc;font-size:16px;font-weight:bold',
  'color:#7a7a9a;font-size:12px'
);
