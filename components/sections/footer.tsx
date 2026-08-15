export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            Dhanush S
          </p>
          <p className="mt-0.5 text-xs text-muted">Software Developer</p>
          <p className="mt-1 font-mono text-xs text-muted">
            React • Next.js • TypeScript • NestJS
          </p>
        </div>

        {/* <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-200 hover:text-foreground"
          >
            <Github size={17} />
          </a>
          <span className="text-border" aria-hidden>
            |
          </span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-200 hover:text-foreground"
          >
            <Linkedin size={17} />
          </a>
          <span className="text-border" aria-hidden>
            |
          </span>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors duration-200 hover:text-foreground"
          >
            <Mail size={17} />
          </a>
        </div> */}

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Dhanush S
        </p>
      </div>
    </footer>
  );
}
