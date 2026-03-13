import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="nav-header">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="Tigers Mark home">
          <Image
            src="/brand-logo.png"
            alt="Tigers Mark Corporation logo"
            width={142}
            height={51}
            className="nav-logo-image"
            priority
          />
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/partners">Partners</Link>
        </nav>
        <Link href="/contact" className="btn btn-primary nav-cta">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
