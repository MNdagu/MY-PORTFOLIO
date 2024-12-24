import Link from 'next/link';
import { WorkOutline, PersonOutline, Description, MailOutline } from '@mui/icons-material';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/60 border-b border-primary/10 bg-slate-950">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-white">
          Mark Ndagu
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {/* Projects */}
          <li className="flex items-center space-x-2 group">
            <WorkOutline className="text-white" />
            <Link
              href="#projects"
              className="text-white transition-colors hover:text-amber-100 relative group-hover:after:scale-x-100 group-hover:after:left-0 group-hover:after:opacity-100"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-100 opacity-0 scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </Link>
          </li>

          {/* About */}
          <li className="flex items-center space-x-2 group">
            <PersonOutline className="text-white" />
            <Link
              href="#about"
              className="text-white transition-colors hover:text-amber-100 relative group-hover:after:scale-x-100 group-hover:after:left-0 group-hover:after:opacity-100"
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-100 opacity-0 scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </Link>
          </li>

          {/* Resume */}
          <li className="flex items-center space-x-2 group">
            <Description className="text-white" />
            <Link
              href="#resume"
              className="text-white transition-colors hover:text-amber-100 relative group-hover:after:scale-x-100 group-hover:after:left-0 group-hover:after:opacity-100"
            >
              Resume
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-100 opacity-0 scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </Link>
          </li>

          {/* Contact */}
          <li className="flex items-center space-x-2 group">
            <MailOutline className="text-white" />
            <Link
              href="#contact"
              className="text-white transition-colors hover:text-amber-100 relative group-hover:after:scale-x-100 group-hover:after:left-0 group-hover:after:opacity-100"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-100 opacity-0 scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
