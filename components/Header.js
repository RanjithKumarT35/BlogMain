import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-lg" style={{ background: "#000000" }}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fff" }}>
            Revnitro
          </h1>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-white-600">
            Home
          </Link>
          {/* <a href="#" className="text-blue-500">
            Course
          </a>
          <a href="#" className="text-blue-500">
            Blog
          </a> */}
          <Link
            href="https://revnitro.com/team.html"
            className="text-white-600"
          >
            Team
          </Link>
          <Link href="/contact" className="text-white-600">
            Course
          </Link>
        </nav>
      </div>
    </header>
  );
}
