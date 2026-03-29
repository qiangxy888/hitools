import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiTools — Free AI-Powered Online Tools",
  description: "Free tools for creators, freelancers, and developers. Invoice generator, form builder, AI detector, word counter, background remover, and competitor monitoring.",
  keywords: ["free online tools", "AI tools", "invoice generator", "form builder", "AI detector", "word counter", "background remover"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">🧰</span>
              <span className="text-xl font-bold">Hi<span className="text-indigo-600">Tools</span></span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
              <a href="#tools" className="hover:text-indigo-600">Tools</a>
              <a href="#about" className="hover:text-indigo-600">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-white border-t border-gray-100 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
            <p>© 2026 HiTools. All tools are free to use.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
