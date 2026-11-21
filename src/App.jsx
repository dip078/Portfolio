import { motion, MotionConfig, useReducedMotion } from 'motion/react';
import { Github, Facebook, Instagram, Mail, ArrowUpRight, Download, Code2, ShieldCheck } from 'lucide-react';

const contactEmail = 'dipabagdi2003@gmail.com';
const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`;

const projects = [
  { title: 'SafeNex', description: 'Privacy threat detection application using federated learning.', contribution: 'I designed and developed the React interface for SafeNex. The app uses federated learning for privacy threat detection.', tags: ['AI', 'Federated Learning', 'Privacy'], url: '' },
  { title: 'Real-Time Chat App', description: 'Built a real-time messaging application with user authentication and message encryption.', tags: ['Messaging', 'Authentication', 'Encryption'], url: '' },
];
const skills = ['Java', 'Python', 'SQL', 'React', 'JavaScript', 'Database Management'];
function trackPointer(event) {
  if (event.pointerType !== 'mouse' ||
      !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;

  const target = event.currentTarget;
  const bounds = target.parentElement.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
  const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));

  target.style.setProperty('--pointer-tilt', `${-y} ${x} 0 ${Math.hypot(x, y) * 3}deg`);
}

function resetPointer({ currentTarget }) {
  currentTarget.style.removeProperty('--pointer-tilt');
}

const tiltHandlers = { onPointerMove: trackPointer, onPointerLeave: resetPointer };

export default function App() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : {
    initial: { opacity: 0.78, y: 14, rotateX: 7 },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, ease: 'easeOut' },
    style: { transformPerspective: 900 },
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="glow min-h-screen text-zinc-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl"><Code2 className="text-violet-400" /> Dip Bagdi</a>
        <nav aria-label="Main navigation" className="nav-pill hidden gap-1 text-sm text-zinc-300 sm:flex">
          <a href="#about" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">About</a><a href="#skills" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">Skills</a><a href="#projects" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">Projects</a>
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a href="https://www.facebook.com/maxyop007" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-500/70 text-zinc-300 transition-colors hover:border-zinc-300 hover:bg-white/10 hover:text-white">
            <Facebook size={18} aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/dip.__.2003/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-500/70 text-zinc-300 transition-colors hover:border-zinc-300 hover:bg-white/10 hover:text-white">
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a href="#contact" className="ml-1 rounded-full border border-violet-500/50 px-4 py-2 text-sm hover:bg-violet-500/10">Hire Me</a>
        </div>
      </header>

      <main id="home">
        <section className="hero mx-auto max-w-6xl px-6">
          <div className="hero-portrait">
            <img src="/dip-bagdi-portrait.webp" alt="Dip Bagdi" fetchPriority="high" />
          </div>
          <div className="hero-copy">
            <h1 className="hero-name"><span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">Dip Bagdi</span></h1>
            <h2 className="hero-role mt-3 text-zinc-200">Full Stack Developer</h2>
            <p className="hero-intro mt-4">I build web interfaces with React and work with Java, Python, SQL, and database management.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500">View Projects <ArrowUpRight size={18}/></a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold hover:border-violet-400">Download Resume <Download size={18}/></a>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-4 px-6 pb-5 md:grid-cols-[1.25fr_1fr]">
        <section id="about" className="scroll-mt-5 md:col-span-2"><motion.div {...reveal} {...tiltHandlers} className="pointer-tilt surface h-full rounded-2xl p-5 sm:p-7"><h2 className="text-2xl font-bold sm:text-3xl">About Me</h2><p className="mt-3 text-base leading-relaxed sm:text-lg text-zinc-400">I work across web development, programming, and database management. I use React and Vite for frontend projects, Java and Python for application development, and SQL to query and manage data. For SafeNex, I designed and built the React interface for a privacy threat detection app.</p></motion.div></section>

        <section id="education" aria-labelledby="education-title" className="scroll-mt-5">
          <motion.div {...reveal} className="surface h-full rounded-2xl p-5 sm:p-7">
            <h2 id="education-title" className="text-2xl font-bold sm:text-3xl">Education</h2>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-xl font-semibold">Computer Science</h3>
              <p className="text-sm font-medium text-violet-200">2021 batch · Graduated in 2026</p>
            </div>
            <p className="mt-2 max-w-3xl leading-7 text-zinc-400">
              My studies built a foundation in programming and database management that I apply to web and software projects.
            </p>
          </motion.div>
        </section>

        <section id="skills" className="scroll-mt-5"><motion.div {...reveal} {...tiltHandlers} className="pointer-tilt surface h-full rounded-2xl p-5 sm:p-7"><h2 className="text-2xl font-bold sm:text-3xl">Technical Skills</h2><div className="mt-4 flex flex-wrap gap-2.5">{skills.map(skill => <span key={skill} className="skill rounded-xl px-3.5 py-2 text-sm font-medium text-zinc-200">{skill}</span>)}</div></motion.div></section>
        </div>

        <section id="experience" className="mx-auto max-w-6xl scroll-mt-5 px-6 pb-5">
          <motion.div {...reveal} className="surface rounded-2xl p-5 sm:p-7">
            <h2 className="text-2xl font-bold sm:text-3xl">Experience</h2>
            <h3 className="mt-3 text-xl font-semibold">Freelance Developer · Web, Java &amp; Python</h3>
            <p className="mt-2 max-w-3xl leading-7 text-zinc-400">
              Worked on freelance web development projects, built software applications in Java and Python, and handled database management tasks.
            </p>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-5 px-6 py-5 sm:py-7"><motion.div {...reveal}><h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2><div className="mt-4 grid gap-4 md:grid-cols-2">{projects.map(project => <article key={project.title} {...tiltHandlers} className="pointer-tilt surface project-card relative overflow-hidden rounded-2xl p-5 sm:p-7"><h3 className="flex items-center gap-3 text-xl font-bold"><ShieldCheck aria-hidden="true" size={27} className="text-violet-300"/>{project.title}</h3><p className="mt-3 text-zinc-400">{project.description}</p>{project.contribution && (
                <section className="mt-4 border-l-2 border-violet-400/60 pl-4">
                  <h4 className="font-semibold">What I built</h4>
                  <p className="mt-2 text-zinc-400">{project.contribution}</p>
                </section>
              )}<div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">{tag}</span>)}</div>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-violet-300">View Repository <ArrowUpRight size={16}/></a>}</article>)}</div></motion.div></section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-5 px-6 py-5 sm:py-7"><motion.div {...reveal} {...tiltHandlers} className="pointer-tilt rounded-3xl border border-violet-500/20 contact-panel p-5 sm:p-7"><h2 className="text-3xl font-bold">Let's Work Together</h2><p className="mt-4 text-zinc-400">Interested in collaborating or discussing an opportunity? Reach out by email or find me on GitHub.</p><div className="mt-5 flex flex-wrap gap-3"><a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500"><Mail size={18}/> Email me</a><a
          href={gmailCompose}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 font-medium hover:border-violet-400"
        >
          Open in Gmail <ArrowUpRight size={16} aria-hidden="true" />
        </a><a href="https://github.com/dip078" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-zinc-700 p-3 hover:border-violet-400"><Github/></a></div></motion.div></section>
      </main>
      <footer className="border-t border-zinc-800 px-6 py-7 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Dip Bagdi. Built with React.</footer>
    </div>
    </MotionConfig>
  );
}
