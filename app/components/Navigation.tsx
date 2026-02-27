// app/components/Navigation.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="nav-header">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo.svg"
            alt="Tiger's Mark Corporation logo"
            width={220}
            height={64}
            className="nav-logo-image"
            priority
          />
          <span className="sr-only">Tiger's Mark Corporation</span>
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/partners">Partners</Link>
        </nav>
        <Link href="/contact" className="btn btn-primary">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
