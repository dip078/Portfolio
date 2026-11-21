import { motion } from 'motion/react';
import { Github, Mail, ArrowUpRight, Download, Code2 } from 'lucide-react';

const projects = [
  { title: 'SafeNex', description: 'Privacy threat detection application using federated learning.', contribution: 'I designed and developed the React interface for SafeNex. The app uses federated learning for privacy threat detection.', tags: ['AI', 'Federated Learning', 'Privacy'], url: '' },
];
const skills = ['Java', 'Python', 'SQL', 'React', 'JavaScript', 'Database Management'];
const fadeUp = { initial: { opacity: 0, y: 25 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

export default function App() {
  return (
    <div className="glow min-h-screen text-zinc-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl"><Code2 className="text-violet-400" /> Portfolio<span className="text-violet-400">.</span></a>
        <nav aria-label="Main navigation" className="hidden gap-7 text-sm text-zinc-300 sm:flex">
          <a href="#about" className="hover:text-white">About</a><a href="#skills" className="hover:text-white">Skills</a><a href="#projects" className="hover:text-white">Projects</a><a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-violet-500/50 px-4 py-2 text-sm hover:bg-violet-500/10">Hire Me</a>
      </header>

      <main id="home">
        <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-sm font-semibold tracking-[.25em] text-violet-400 uppercase">Welcome to my portfolio</p>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">Hi, I'm <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">Dip Bagdi</span></h1>
            <h2 className="mt-5 text-3xl font-semibold text-zinc-200 sm:text-4xl">Full Stack Developer</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">I build practical software and explore intelligent solutions using Java, Python, databases, and modern web technologies.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500">View Projects <ArrowUpRight size={18}/></a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold hover:border-violet-400">Download Resume <Download size={18}/></a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20"><motion.div {...fadeUp}><h2 className="text-3xl font-bold">About Me</h2><p className="mt-5 max-w-3xl leading-8 text-zinc-400">I'm a developer interested in full-stack engineering, backend programming, database systems, and AI. This section is a starting point—replace it with your actual experience and goals.</p></motion.div></section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20"><motion.div {...fadeUp}><h2 className="text-3xl font-bold">Technical Skills</h2><div className="mt-8 flex flex-wrap gap-3">{skills.map(skill => <span key={skill} className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-zinc-200">{skill}</span>)}</div></motion.div></section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20"><motion.div {...fadeUp}><h2 className="text-3xl font-bold">Featured Projects</h2><p className="mt-3 text-zinc-400">Selected work and experiments.</p><div className="mt-8 grid gap-6 md:grid-cols-2">{projects.map(project => <article key={project.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition hover:border-violet-500/70"><h3 className="text-xl font-bold">{project.title}</h3><p className="mt-3 min-h-16 text-zinc-400">{project.description}</p>{project.contribution && (
                <section className="mt-5">
                  <h4 className="font-semibold">What I built</h4>
                  <p className="mt-2 text-zinc-400">{project.contribution}</p>
                </section>
              )}<div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">{tag}</span>)}</div>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-violet-300">View Repository <ArrowUpRight size={16}/></a>}</article>)}</div></motion.div></section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20"><motion.div {...fadeUp} className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-8 sm:p-12"><h2 className="text-3xl font-bold">Let's Work Together</h2><p className="mt-4 text-zinc-400">Interested in collaborating or discussing an opportunity? Reach out by email or find me on GitHub.</p><div className="mt-7 flex flex-wrap gap-4"><a href="mailto:dipabagdi2003@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500"><Mail size={18}/> Email me</a><a href="https://github.com/dip078" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-zinc-700 p-3 hover:border-violet-400"><Github/></a></div></motion.div></section>
      </main>
      <footer className="border-t border-zinc-800 px-6 py-7 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Dip Bagdi. Built with React.</footer>
    </div>
  );
}
