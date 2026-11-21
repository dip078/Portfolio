import { motion, MotionConfig, useReducedMotion } from 'motion/react';
import { Github, Mail, ArrowUpRight, Download, Code2, ShieldCheck } from 'lucide-react';

const projects = [
  { title: 'SafeNex', description: 'Privacy threat detection application using federated learning.', contribution: 'I designed and developed the React interface for SafeNex. The app uses federated learning for privacy threat detection.', tags: ['AI', 'Federated Learning', 'Privacy'], url: '' },
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
          <a href="#about" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">About</a><a href="#skills" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">Skills</a><a href="#projects" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">Projects</a><a href="#contact" className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-violet-500/50 px-4 py-2 text-sm hover:bg-violet-500/10">Hire Me</a>
      </header>

      <main id="home">
        <section className="hero mx-auto max-w-6xl px-6 pt-12 pb-9 sm:pt-17 sm:pb-12">
          <div className="hero-orbit" aria-hidden="true"><span className="orbit-ring" /><span className="orbit-hit" /></div>
          <div className="relative">
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl"><span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">Dip Bagdi</span></h1>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-200 sm:text-4xl">Full Stack Developer</h2>
            <p className="mt-4 max-w-xl text-base leading-7 sm:text-lg text-zinc-400">I build practical software and explore intelligent solutions using Java, Python, databases, and modern web technologies.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500">View Projects <ArrowUpRight size={18}/></a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold hover:border-violet-400">Download Resume <Download size={18}/></a>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-4 px-6 pb-5 md:grid-cols-[1.25fr_1fr]">
        <section id="about" className="scroll-mt-5"><motion.div {...reveal} {...tiltHandlers} className="pointer-tilt surface h-full rounded-2xl p-5 sm:p-7"><h2 className="text-2xl font-bold sm:text-3xl">About Me</h2><p className="mt-3 max-w-3xl leading-7 text-zinc-400">I'm a developer interested in full-stack engineering, backend programming, database systems, and AI.</p></motion.div></section>

        <section id="skills" className="scroll-mt-5"><motion.div {...reveal} {...tiltHandlers} className="pointer-tilt surface h-full rounded-2xl p-5 sm:p-7"><h2 className="text-2xl font-bold sm:text-3xl">Technical Skills</h2><div className="mt-4 flex flex-wrap gap-2.5">{skills.map(skill => <span key={skill} className="skill rounded-xl px-3.5 py-2 text-sm font-medium text-zinc-200">{skill}</span>)}</div></motion.div></section>
        </div>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-5 px-6 py-5 sm:py-7"><motion.div {...reveal}><h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2><div className="mt-4 grid gap-4">{projects.map(project => <article key={project.title} {...tiltHandlers} className="pointer-tilt surface project-card relative overflow-hidden rounded-2xl p-5 sm:p-7"><h3 className="flex items-center gap-3 text-xl font-bold"><ShieldCheck aria-hidden="true" size={27} className="text-violet-300"/>{project.title}</h3><p className="mt-3 text-zinc-400">{project.description}</p>{project.contribution && (
                <section className="mt-4 border-l-2 border-violet-400/60 pl-4">
                  <h4 className="font-semibold">What I built</h4>
                  <p className="mt-2 text-zinc-400">{project.contribution}</p>
                </section>
              )}<div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">{tag}</span>)}</div>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-violet-300">View Repository <ArrowUpRight size={16}/></a>}</article>)}</div></motion.div></section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-5 px-6 py-5 sm:py-7"><motion.div {...reveal} {...tiltHandlers} className="pointer-tilt rounded-3xl border border-violet-500/20 contact-panel p-5 sm:p-7"><h2 className="text-3xl font-bold">Let's Work Together</h2><p className="mt-4 text-zinc-400">Interested in collaborating or discussing an opportunity? Reach out by email or find me on GitHub.</p><div className="mt-5 flex flex-wrap gap-3"><a href="mailto:dipabagdi2003@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500"><Mail size={18}/> Email me</a><a href="https://github.com/dip078" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-zinc-700 p-3 hover:border-violet-400"><Github/></a></div></motion.div></section>
      </main>
      <footer className="border-t border-zinc-800 px-6 py-7 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Dip Bagdi. Built with React.</footer>
    </div>
    </MotionConfig>
  );
}
