@import "tailwindcss";

:root {
  --color-ivory: #f8f9f6;
  --color-slate-100: #eef1ee;
  --color-slate-900: #18212d;
  --color-navy-900: #061b2e;
  --color-navy-800: #0a2340;
  --color-navy-950: #041521;
  --color-teal-50: #ebf7f6;
  --color-teal-100: #d5f0ec;
  --color-teal-200: #b8e0dc;
  --color-teal-500: #2f9b97;
  --color-teal-600: #1a7d7a;
  --color-teal-700: #135f60;
  --color-teal-800: #104d4d;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-ivory);
  color: var(--color-slate-900);
  font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

h1,
h2,
h3,
h4 {
  font-family: Georgia, 'Times New Roman', serif;
  letter-spacing: -0.03em;
  margin: 0;
}

p {
  margin: 0;
}

.bot-pattern {
  background-image:
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(135deg, rgba(47,155,151,0.18), rgba(255,255,255,0.03));
  background-size: 22px 22px, 22px 22px, 100% 100%;
  mask-image: radial-gradient(circle at center, black 55%, transparent 100%);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
