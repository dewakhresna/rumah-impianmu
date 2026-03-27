import { Button } from "@heroui/react";
import { Building2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-blue-600">
          <Building2 size={32} strokeWidth={1.5} />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Estate<span className="text-blue-600">Prime</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/listings" className="text-blue-600 transition-colors">Listings</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button variant="light" className="hidden sm:flex font-medium text-slate-600">
            Log In
          </Button>
          <Button color="primary" className="bg-blue-600 font-medium rounded-xl shadow-blue-500/30 shadow-lg hover:-translate-y-0.5 transition-transform">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}