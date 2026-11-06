// Home motion (GSAP + ScrollTrigger): header state, scroll-scrubbed floaters/parallax, reveals,
// hero video, sideways strips, media lightbox, mobile menu.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));
/** Floater travel is designed at 1440px; scale it down on smaller screens (390px ≈ 0.5). */
const travelScale = () => gsap.utils.clamp(0.5, 1, window.innerWidth / 1440);

/* ---------- header + scroll cue ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const cue = document.querySelector<HTMLElement>('[data-scroll-cue]');

ScrollTrigger.create({
  start: 80,
  end: 'max',
  onToggle: (self) => header?.classList.toggle('is-solid', self.isActive),
});
ScrollTrigger.create({
  start: 40,
  end: 'max',
  onToggle: (self) => cue?.classList.toggle('is-hidden', self.isActive),
});

/* ---------- mobile menu ---------- */
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

function setMenu(open: boolean) {
  if (!menuToggle || !menu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
  if (open && !reduceMotion) {
    gsap.fromTo(menu.querySelectorAll('a'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' });
  }
}
menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu && !menu.hidden) {
    setMenu(false);
    menuToggle?.focus();
  }
});

/* ---------- hero video: always loop ---------- */
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (heroVideo) {
  heroVideo.loop = true;
  heroVideo.muted = true;
  const play = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener('ended', () => {
    heroVideo.currentTime = 0;
    play();
  });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) play();
  });
  play();
}

/* ---------- scroll motion ---------- */
if (!reduceMotion) {
  // reveals: eyebrow → title → text, staggered, once
  $$('[data-reveal]').forEach((block) => {
    // h1 animates line by line; split headings animate letter by letter (below)
    const targets = Array.from(block.children).flatMap((child) => {
      if (child.tagName === 'H1') return Array.from(child.children);
      if (child.hasAttribute('data-split')) return [];
      return [child];
    });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: block.querySelector('h1') ? 0.12 : 0.1,
      scrollTrigger: { trigger: block, start: 'top 85%', once: true },
    });
  });

  // floaters: fly through the section edge, 1:1 with scroll (reverses on scroll up)
  $$('[data-float]').forEach((anchor) => {
    const img = anchor.firstElementChild;
    if (!img) return;
    const x = +(anchor.dataset.x ?? 0);
    const y = +(anchor.dataset.y ?? 0);
    const r = +(anchor.dataset.r ?? 0);
    gsap.fromTo(
      img,
      { x: () => x * travelScale(), y: () => y * travelScale(), rotation: r },
      {
        x: () => -x * travelScale(),
        y: () => -y * travelScale(),
        rotation: -r,
        ease: 'none',
        scrollTrigger: { trigger: anchor, start: 'center 150%', end: 'center -50%', scrub: true, invalidateOnRefresh: true },
      },
    );
  });

  // stage glows + photo outlines: slow parallax layers
  $$('[data-parallax]').forEach((el) => {
    const y = +(el.dataset.parallax ?? 0);
    gsap.fromTo(
      el,
      { y: () => y * travelScale() },
      {
        y: () => -y * travelScale(),
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'center 150%', end: 'center -50%', scrub: true, invalidateOnRefresh: true },
      },
    );
  });

  // section photos: image moves inside its frame (img is 115% of the frame height)
  $$<HTMLImageElement>('[data-photo-parallax]').forEach((img) => {
    const frame = img.parentElement!;
    const travel = () => Math.min(40, frame.offsetHeight * 0.075);
    gsap.fromTo(
      img,
      { y: () => travel() },
      {
        y: () => -travel(),
        ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
      },
    );
  });

  // hero: video slowly scales as it scrolls out and melts into the next section
  const hero = document.querySelector<HTMLElement>('[data-hero-media]');
  if (hero && heroVideo) {
    gsap.to(heroVideo, {
      scale: 1.08,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  // split headings: letters rise out of their line
  $$('[data-split]').forEach((heading) => {
    gsap.to(heading.querySelectorAll('.char'), {
      y: 0,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.04,
      scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
    });
  });

  // studio: drifting background word, photo wipes, numbers
  const studio = document.querySelector<HTMLElement>('[data-studio]');
  if (studio) {
    const word = studio.querySelector('[data-bgword]');
    if (word) {
      gsap.fromTo(word, { xPercent: 0 }, {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: studio, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }
    const strip = studio.querySelector('[data-strip]');
    const media = studio.querySelectorAll('[data-frame-media]');
    if (strip && media.length) {
      const tl = gsap.timeline({ scrollTrigger: { trigger: strip, start: 'top 85%', once: true } });
      tl.from(media, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut', stagger: 0.12 })
        .from(studio.querySelectorAll('[data-frame-media] img'), { scale: 1.35, duration: 1.6, ease: 'power3.out', stagger: 0.12 }, 0)
        .from(studio.querySelectorAll('.num'), { opacity: 0, y: 12, duration: 0.6, ease: 'power2.out', stagger: 0.08 }, 0.7);
    }
  }

  // strips: vertical scroll also nudges the row sideways
  $$('[data-strip-track]').forEach((track) => {
    gsap.fromTo(track, { x: () => 90 * travelScale() }, {
      x: () => -90 * travelScale(),
      ease: 'none',
      scrollTrigger: { trigger: track, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    });
  });

  const heroLight = document.querySelector<HTMLElement>('[data-hero-light]');
  if (hero && heroLight) {
    gsap.fromTo(heroLight, { opacity: 0.85 }, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }
}

/* ---------- sideways strips: auto-drift (ping-pong), drag, swipe ---------- */
class Strip {
  el: HTMLElement;
  pos = 0;
  dir = 1;
  duration: number;
  hovering = false;
  touching = false;
  visible = false;
  dragging = false;
  moved = false;
  resumeAt = 0;
  startX = 0;
  startScroll = 0;

  progress: HTMLElement | null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.duration = +(el.dataset.duration ?? 40);
    this.progress = el.parentElement?.querySelector<HTMLElement>('[data-strip-progress]') ?? null;
    el.addEventListener('scroll', () => this.updateProgress(), { passive: true });

    el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') this.hovering = true; });
    el.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { this.hovering = false; this.endDrag(); } });
    el.addEventListener('focusin', () => { this.hovering = true; });
    el.addEventListener('focusout', () => { this.hovering = false; });
    el.addEventListener('touchstart', () => { this.touching = true; }, { passive: true });
    el.addEventListener('touchend', () => { this.touching = false; this.resumeAt = performance.now() + 2500; }, { passive: true });
    el.addEventListener('scroll', () => { if (!this.isAuto()) this.pos = el.scrollLeft; }, { passive: true });
    el.addEventListener('wheel', () => { this.resumeAt = performance.now() + 2500; }, { passive: true });

    el.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      this.dragging = true;
      this.moved = false;
      this.startX = e.clientX;
      this.startScroll = el.scrollLeft;
    });
    el.addEventListener('pointermove', (e) => {
      if (!this.dragging) return;
      const dx = e.clientX - this.startX;
      if (Math.abs(dx) > 5 && !this.moved) {
        this.moved = true;
        el.classList.add('is-dragging');
        el.setPointerCapture(e.pointerId);
      }
      if (this.moved) {
        el.scrollLeft = this.startScroll - dx;
        this.pos = el.scrollLeft;
      }
    });
    el.addEventListener('pointerup', () => this.endDrag());
    el.addEventListener('pointercancel', () => this.endDrag());
    // a drag must not count as a click on a photo
    el.addEventListener('click', (e) => {
      if (this.moved) {
        e.preventDefault();
        e.stopPropagation();
        this.moved = false;
      }
    }, true);
    el.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      el.scrollBy({ left: e.key === 'ArrowRight' ? 320 : -320, behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => { this.visible = self.isActive; },
    });
  }

  updateProgress() {
    if (!this.progress) return;
    const max = this.el.scrollWidth - this.el.clientWidth;
    this.progress.style.transform = `scaleX(${max > 0 ? (this.el.scrollLeft / max).toFixed(4) : 0})`;
  }

  endDrag() {
    this.dragging = false;
    this.el.classList.remove('is-dragging');
  }

  isAuto() {
    return !reduceMotion && this.visible && !this.hovering && !this.touching && !this.dragging && performance.now() > this.resumeAt;
  }

  tick(dt: number) {
    if (!this.isAuto()) return;
    const max = this.el.scrollWidth - this.el.clientWidth;
    if (max <= 0) return;
    this.pos += this.dir * (max / this.duration) * dt;
    if (this.pos >= max) { this.pos = max; this.dir = -1; }
    if (this.pos <= 0) { this.pos = 0; this.dir = 1; }
    this.el.scrollLeft = this.pos;
  }
}

const strips = $$('[data-strip]').map((el) => new Strip(el));
if (strips.length) {
  gsap.ticker.add((_time, deltaTime) => {
    const dt = Math.min(0.05, deltaTime / 1000);
    strips.forEach((s) => s.tick(dt));
  });
}

/* ---------- media lightbox ---------- */
const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
const dialogImg = dialog?.querySelector<HTMLImageElement>('[data-lightbox-img]');
const dialogCap = dialog?.querySelector<HTMLElement>('[data-lightbox-cap]');

$$<HTMLButtonElement>('[data-lightbox-src]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!dialog || !dialogImg || !dialogCap) return;
    const caption = btn.dataset.lightboxCaption ?? '';
    dialogImg.src = btn.dataset.lightboxSrc ?? '';
    dialogImg.alt = caption;
    dialogCap.textContent = caption;
    dialog.showModal();
    if (!reduceMotion) gsap.fromTo(dialog, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
  });
});
dialog?.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});

/* ---------- CTA cards: cursor-follow light ---------- */
$$('[data-glow-card]').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

/* ---------- mouse effects (desktop, fine pointer only) ---------- */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer && !reduceMotion) {
  // custom cursor ring: grows on links, shows a label ("Drag", "View") where data-cursor is set
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<div class="cursor__ring"><span class="cursor__label"></span></div>';
  document.body.append(cursor);
  const label = cursor.querySelector<HTMLElement>('.cursor__label')!;
  const cx = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
  const cy = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });
  let shown = false;

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    if (!shown) {
      gsap.set(cursor, { x: e.clientX, y: e.clientY });
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      shown = true;
    }
    cx(e.clientX);
    cy(e.clientY);
  });
  document.documentElement.addEventListener('pointerleave', () => {
    gsap.to(cursor, { opacity: 0, duration: 0.3 });
    shown = false;
  });
  document.addEventListener('pointerover', (e) => {
    const target = e.target as HTMLElement;
    const labelled = target.closest<HTMLElement>('[data-cursor]');
    const link = target.closest('a, button, summary, [role="button"]');
    cursor.classList.toggle('is-label', !!labelled);
    cursor.classList.toggle('is-link', !labelled && !!link);
    if (labelled) label.textContent = labelled.dataset.cursor ?? '';
  });
  window.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  window.addEventListener('pointerup', () => cursor.classList.remove('is-down'));

  // magnetic buttons and links
  $$('.btn, .line-link, .header .logo').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - (r.left + r.width / 2)) * 0.3,
        y: (e.clientY - (r.top + r.height / 2)) * 0.4,
        duration: 0.4,
        ease: 'power3.out',
      });
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    });
  });

  // 3D tilt toward the mouse (photos, founder cards, studio frames)
  $$('[data-tilt]').forEach((el) => {
    const max = +(el.dataset.tiltMax ?? 6);
    const lift = +(el.dataset.tiltLift ?? 0);
    const img = el.matches('[data-frame]') ? el.querySelector('img') : null;
    gsap.set(el, { transformPerspective: 900 });
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' });

    el.addEventListener('pointerenter', () => {
      if (lift) gsap.to(el, { y: -lift, duration: 0.4, ease: 'power3.out' });
      if (img) gsap.to(img, { scale: 1.08, duration: 0.8, ease: 'power3.out' });
    });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      ry((px - 0.5) * max * 2);
      rx((0.5 - py) * max * 2);
      el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
    });
    el.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
      if (lift) gsap.to(el, { y: 0, duration: 0.6, ease: 'power3.out' });
      if (img) gsap.to(img, { scale: 1, duration: 0.8, ease: 'power3.out' });
    });
  });

  // per-section mouse spotlight + depth layers (data-depth = px of travel, negative moves against the mouse)
  $$('section').forEach((section) => {
    const spot = section.querySelector<HTMLElement>('[data-spot]');
    const layers = $$('[data-depth]', section).map((el) => ({
      depth: +(el.dataset.depth ?? 0),
      x: gsap.quickTo(el, 'x', { duration: 1, ease: 'power3.out' }),
      y: gsap.quickTo(el, 'y', { duration: 1, ease: 'power3.out' }),
    }));
    if (!spot && !layers.length) return;
    const sx = spot ? gsap.quickTo(spot, 'x', { duration: 0.6, ease: 'power3.out' }) : null;
    const sy = spot ? gsap.quickTo(spot, 'y', { duration: 0.6, ease: 'power3.out' }) : null;

    section.addEventListener('pointerenter', (e) => {
      if (!spot) return;
      const r = section.getBoundingClientRect();
      gsap.set(spot, { x: e.clientX - r.left, y: e.clientY - r.top });
      gsap.to(spot, { opacity: 1, duration: 0.6 });
    });
    section.addEventListener('pointermove', (e) => {
      if (spot && sx && sy) {
        const r = section.getBoundingClientRect();
        sx(e.clientX - r.left);
        sy(e.clientY - r.top);
      }
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      layers.forEach((l) => {
        l.x(nx * l.depth);
        l.y(ny * l.depth);
      });
    });
    section.addEventListener('pointerleave', () => {
      if (spot) gsap.to(spot, { opacity: 0, duration: 0.8 });
      layers.forEach((l) => {
        l.x(0);
        l.y(0);
      });
    });
  });
}

// images/fonts change section heights after load — recalc trigger positions
window.addEventListener('load', () => ScrollTrigger.refresh());
