import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Vote } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indian Election Assistant",
  description: "Learn about the Indian Election process interactively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Vote className="h-6 w-6 text-saffron" />
              <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Election Assistant</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/learn" className="transition-colors hover:text-saffron">Learn</Link>
              <Link href="/process" className="transition-colors hover:text-saffron">Process</Link>
              <Link href="/flashcards" className="transition-colors hover:text-saffron">Flashcards</Link>
              <Link href="/quiz" className="transition-colors hover:text-saffron">Quiz</Link>
              <Link href="/assistant" className="transition-colors hover:text-saffron">AI Assistant</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <footer className="border-t py-6 md:py-0 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-sm leading-loose text-muted-foreground text-center md:text-left">
              Built to educate citizens on the Indian electoral process.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
