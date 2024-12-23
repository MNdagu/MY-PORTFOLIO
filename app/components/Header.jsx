import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/60 border-b border-primary/10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">Mark Ndagu</Link>
        <ul className="flex space-x-6">
          <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
          <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="#resume" className="hover:text-primary transition-colors">Resume</Link></li>
          <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

