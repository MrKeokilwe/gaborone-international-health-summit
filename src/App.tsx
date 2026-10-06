import { useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  CircleCheckBig,
  Clock3,
  Download,
  Facebook,
  Globe,
  Instagram,
  Landmark,
  MapPin,
  Menu,
  MessageSquareText,
  Microscope,
  MoonStar,
  Pill,
  Plus,
  Stethoscope,
  X,
  Linkedin,
  ShieldCheck,
  Building2,
  HeartPulse,
  Sparkles,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  Ambulance,
  Syringe,
  Smartphone,
  BarChart3,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Programme', href: '#programme' },
  { label: 'Themes', href: '#themes' },
  { label: 'Venue', href: '#venue' },
  { label: 'Registration', href: '#registration' },
  { label: 'Contact', href: '#contact' },
];

const themeCards = [
  {
    icon: Sparkles,
    title: 'Healthcare Innovation & Technology',
    description:
      'Exploring the next generation of service delivery, diagnostics, and digital transformation across the care pathway.',
  },
  {
    icon: Smartphone,
    title: 'Digital Health & AI',
    description:
      'Assessing how AI, data intelligence, and digital tools can improve access, outcomes, and efficiency for patients and providers.',
  },
  {
    icon: ShieldCheck,
    title: 'Public Health & Disease Prevention',
    description:
      'Addressing preventive care, outbreak response, surveillance, and community-level health resilience.',
  },
  {
    icon: Landmark,
    title: 'Health Policy & Leadership',
    description:
      'Examining governance models, financing strategies, and leadership approaches that shape sustainable health systems.',
  },
  {
    icon: HeartPulse,
    title: 'Maternal & Child Health',
    description:
      'Highlighting reproductive, maternal, neonatal, and child health priorities and evidence-based interventions.',
  },
  {
    icon: Microscope,
    title: 'Medical Research & Education',
    description:
      'Advancing clinical research, academic collaboration, and health workforce strengthening across the continent.',
  },
  {
    icon: Building2,
    title: 'Universal Health Coverage',
    description:
      'Discussing equitable financing, primary care, and service integration to advance inclusive healthcare access.',
  },
  {
    icon: MoonStar,
    title: 'Healthcare Systems & Sustainability',
    description:
      'Strengthening resilient systems, resource stewardship, and long-term operational sustainability in healthcare delivery.',
  },
];

const speakers = [
  {
    name: 'Dr. Amina Ndlovu',
    title: 'Chief Medical Officer',
    organization: 'Botswana Ministry of Health',
    country: 'Botswana',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prof. Daniel Okafor',
    title: 'Professor of Global Health',
    organization: 'University of Nairobi',
    country: 'Kenya',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Dr. Leila Mokoena',
    title: 'Infectious Disease Lead',
    organization: 'African Health Research Alliance',
    country: 'South Africa',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prof. Michael Karanja',
    title: 'Director of Health Systems',
    organization: 'World Health Research Forum',
    country: 'United Kingdom',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
];

const agendaItems = [
  {
    time: '08:00',
    title: 'Registration & Networking',
    description: 'Delegates connect with peers, partners, and exhibitors in a relaxed opening session.',
  },
  {
    time: '09:00',
    title: 'Opening Ceremony',
    description: 'A formal welcome and framing of the summit’s priorities for health innovation and leadership.',
  },
  {
    time: '09:30',
    title: 'Keynote Address',
    description: 'A strategic vision for advancing health systems, research, and policy in Africa.',
  },
  {
    time: '10:30',
    title: 'Healthcare Innovation & Technology',
    description: 'Spotlighting digital solutions, clinical innovation, and scalable healthcare delivery models.',
  },
  {
    time: '12:00',
    title: 'Panel Discussion',
    description: 'Cross-sector dialogue on partnerships, investment, and implementation across the continent.',
  },
  {
    time: '14:00',
    title: 'Research & Public Health',
    description: 'Evidence-based presentations focused on disease prevention and resilient public health strategies.',
  },
  {
    time: '15:30',
    title: 'Digital Health & AI',
    description: 'Assessment of AI-driven care models, analytics, and equitable digital transformation.',
  },
  {
    time: '17:00',
    title: 'Networking Reception',
    description: 'An informal evening of collaboration, relationship building, and future-facing conversations.',
  },
];

const benefits = [
  'Connect with global healthcare leaders',
  'Discover emerging healthcare innovations',
  'Share research and expertise',
  'Build strategic partnerships',
  'Explore investment and collaboration opportunities',
  'Influence the future of African healthcare',
];

const audienceGroups = [
  'Doctors & Clinicians',
  'Researchers & Academics',
  'Healthcare Executives',
  'Policymakers',
  'Government Representatives',
  'Health NGOs',
  'Pharmaceutical & Medical Companies',
  'Technology & Digital Health Leaders',
  'Students & Emerging Professionals',
];

const partnerMarks = [
  'Platinum Partner',
  'Gold Partner',
  'Silver Partner',
  'Strategic Partner',
];

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'X', href: 'https://x.com', icon: Globe },
];

const formatYear = new Date().getFullYear();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const speakerHighlights = useMemo(
    () => [
      'International participation',
      'Healthcare leadership',
      'Research & evidence',
      'Medical innovation',
      'Policy dialogue',
      'Strategic partnerships',
    ],
    [],
  );

  const handleNavClose = () => setMenuOpen(false);

  return (
    <div className="bg-[var(--color-ivory)] text-[var(--color-slate-900)]">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[rgba(248,249,246,0.96)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]" aria-label="Gaborone International Health Summit home">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-navy-900)] text-sm font-semibold tracking-[0.2em] text-white">
              GIHS
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy-900)]">
                Summit
              </div>
              <div className="text-base font-semibold text-slate-700">Gaborone</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[var(--color-navy-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#registration"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-teal-700)] bg-[var(--color-teal-700)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-teal-800)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]"
            >
              Register Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition-colors duration-200 hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)] md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClose}
                  className="rounded-md px-2 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-[var(--color-navy-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-inset"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#registration"
                onClick={handleNavClose}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-[var(--color-navy-900)] px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Register Now
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80"
            alt="African healthcare professionals collaborating during a clinical discussion"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" aria-hidden="true" />
          <div className="bot-pattern absolute inset-0 opacity-35" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-100">
                GABORONE INTERNATIONAL HEALTH SUMMIT
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Advancing Health. Inspiring Innovation. Shaping Africa’s Future.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Bringing together healthcare leaders, professionals, researchers, policymakers and innovators to collaborate, share knowledge and shape the future of healthcare in Africa and beyond.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#registration"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-teal-600)] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-teal-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Explore the Summit
                </a>
              </div>

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                    <MapPin className="h-4 w-4" />
                    Location
                  </div>
                  <p className="mt-2 text-base font-medium text-white">Gaborone, Botswana</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                    <CalendarDays className="h-4 w-4" />
                    Dates
                  </div>
                  <p className="mt-2 text-base font-medium text-white">To be announced</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                    <Building2 className="h-4 w-4" />
                    Venue
                  </div>
                  <p className="mt-2 text-base font-medium text-white">To be confirmed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-[var(--color-teal-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                <Stethoscope className="h-4 w-4" />
                About the summit
              </div>
              <h2 className="max-w-xl text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Where Healthcare Leaders Meet to Shape the Future
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                The summit creates a distinctive platform for dialogue, knowledge exchange, networking, research, innovation and partnership-building across the healthcare ecosystem. It brings together institutions, professionals and decision-makers committed to improving health outcomes and strengthening systems across Africa.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {speakerHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-teal-100)] text-[var(--color-teal-800)]">
                      <CircleCheckBig className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
                alt="Healthcare professionals collaborating in a modern clinical setting"
                loading="lazy"
                className="h-[620px] w-full rounded-[1.5rem] object-cover shadow-[0_28px_80px_rgba(6,27,46,0.18)]"
              />
              <div className="absolute -bottom-6 left-6 max-w-xs rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-navy-900)] text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Regional reach</p>
                    <p className="text-xl font-semibold text-[var(--color-navy-900)]">Africa & Beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="themes" className="bg-[var(--color-slate-100)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                Summit themes
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Key Summit Themes
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {themeCards.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex min-h-[230px] flex-col rounded-[1.1rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-teal-50)] text-[var(--color-teal-800)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-navy-900)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="speakers" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-[var(--color-teal-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                  <Users className="h-4 w-4" />
                  Speakers
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                  Meet the Voices Shaping Healthcare
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-800)] transition-colors duration-200 hover:text-[var(--color-navy-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]"
              >
                View All Speakers
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {speakers.map(({ name, title, organization, country, image }, index) => (
                <article key={name} className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-sm">
                  <img
                    src={image}
                    alt={`${name} portrait`}
                    loading={index > 1 ? 'lazy' : 'eager'}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[var(--color-navy-900)]">{name}</h3>
                    <p className="mt-2 text-sm font-medium text-[var(--color-teal-800)]">{title}</p>
                    <p className="mt-2 text-sm text-slate-600">{organization}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{country}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-600">
              Representative speaker profiles — official speaker announcements coming soon.
            </p>
          </div>
        </section>

        <section id="programme" className="bg-[var(--color-slate-100)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                  <Clock3 className="h-4 w-4" />
                  Programme
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                  Summit Programme
                </h2>
              </div>
              <a
                href="#registration"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-navy-900)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-navy-900)] transition-colors duration-200 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-slate-100)]"
              >
                <Download className="h-4 w-4" />
                Download Programme
              </a>
            </div>

            <div className="mt-12 space-y-4">
              {agendaItems.map(({ time, title, description }) => (
                <article key={time} className="grid gap-4 rounded-[1.1rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[140px_1fr] md:items-start md:p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-800)]">{time}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-navy-900)]">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-600">Sample agenda — timetable subject to updates and official confirmation.</p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-[var(--color-teal-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                Why attend
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Why Attend?
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-[1.1rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-navy-900)] text-white">
                    <Plus className="h-4 w-4" />
                  </div>
                  <p className="text-base font-medium leading-7 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-slate-100)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                Audience
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Who Should Attend
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audienceGroups.map((group) => (
                <div key={group} className="flex items-center gap-3 rounded-[1rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-teal-50)] text-[var(--color-teal-800)]">
                    <CircleCheckBig className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-slate-700">{group}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="venue" className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-[var(--color-teal-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                Venue
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Experience Gaborone
              </h2>

              <div className="mt-8 space-y-5 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[var(--color-teal-800)]" />
                  <div>
                    <p className="font-semibold text-[var(--color-navy-900)]">Venue to be confirmed</p>
                    <p>Gaborone, Botswana</p>
                    <p>Address placeholder — forthcoming</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 text-[var(--color-teal-800)]" />
                  <div>
                    <p className="font-semibold text-[var(--color-navy-900)]">Accommodation</p>
                    <p>Accommodation information will be announced soon.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 text-[var(--color-teal-800)]" />
                  <div>
                    <p className="font-semibold text-[var(--color-navy-900)]">Transportation</p>
                    <p>Transportation details and travel guidance are forthcoming.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://maps.google.com/?q=Gaborone,Botswana"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-navy-900)] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-navy-800)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]"
                >
                  View on Map
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] shadow-[0_28px_80px_rgba(6,27,46,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80"
                alt="Scenic Botswana landscape with open, warm terrain and a distant horizon"
                loading="lazy"
                className="h-full min-h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="registration" className="bg-[var(--color-navy-900)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  Registration
                </p>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  Be Part of the Future of Healthcare
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-200">
                  Join healthcare leaders, innovators, researchers and policymakers from across Africa and the world in Gaborone.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://example.com/register-gihs"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--color-teal-600)] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-teal-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy-900)]"
                >
                  Register Now
                </a>
                <a
                  href="https://example.com/become-a-partner"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy-900)]"
                >
                  Become a Partner / Sponsor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-[var(--color-teal-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                Partners
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Our Partners & Sponsors
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partnerMarks.map((partner, index) => (
                <div
                  key={partner}
                  className="flex min-h-[170px] items-center justify-center rounded-[1.2rem] border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <div>
                    <div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border ${
                        index === 0
                          ? 'border-[var(--color-amber-400)] bg-[var(--color-amber-50)] text-[var(--color-amber-700)]'
                          : index === 1
                            ? 'border-[var(--color-slate-300)] bg-[var(--color-slate-100)] text-slate-600'
                            : index === 2
                              ? 'border-[var(--color-emerald-300)] bg-[var(--color-emerald-50)] text-[var(--color-emerald-700)]'
                              : 'border-[var(--color-cyan-300)] bg-[var(--color-cyan-50)] text-cyan-700'
                      }`}
                    >
                      {partner.split(' ')[0].slice(0, 2).toUpperCase()}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{partner}</p>
                    <p className="mt-2 text-xs text-slate-400">Placeholder content</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[var(--color-slate-100)] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-teal-200)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal-800)]">
                Contact
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--color-navy-900)] sm:text-4xl">
                Get in Touch
              </h2>

              <div className="mt-8 space-y-5 text-slate-700">
                <div className="flex items-start gap-3">
                  <MessageSquareText className="mt-1 h-5 w-5 text-[var(--color-teal-800)]" />
                  <span>info@gihsummit.org</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[var(--color-teal-800)]" />
                  <span>+267 000 0000</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[var(--color-teal-800)]" />
                  <span>Gaborone, Botswana</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:text-[var(--color-navy-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-slate-100)]"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <form
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-teal-500)] focus:bg-white"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-teal-500)] focus:bg-white"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-slate-700">
                Organization
                <input
                  type="text"
                  name="organization"
                  placeholder="Your organization"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-teal-500)] focus:bg-white"
                />
              </label>

              <label className="mt-5 block text-sm font-medium text-slate-700">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-teal-500)] focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-navy-900)] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-navy-800)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--color-navy-950)] text-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.75fr_0.75fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-sm font-semibold tracking-[0.2em] text-[var(--color-navy-900)]">
                  GIHS
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Summit</div>
                  <div className="text-base font-semibold text-white">Gaborone International Health Summit</div>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                Advancing Health. Inspiring Innovation. Shaping Africa’s Future.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Navigation</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition-colors duration-200 hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>info@gihsummit.org</li>
                <li>+267 000 0000</li>
                <li>Gaborone, Botswana</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Social</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition-colors duration-200 hover:border-slate-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-6">
              <a href="#" className="transition-colors duration-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">Terms & Conditions</a>
            </div>
            <p>© {formatYear} Gaborone International Health Summit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
