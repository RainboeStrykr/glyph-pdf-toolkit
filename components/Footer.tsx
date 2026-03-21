import Image from "next/image";
import Link from "next/link";
import glyphLogo from "@/app/glyph_logo_without_bg.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={glyphLogo}
                alt="Glyph logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold text-slate-900 dark:text-slate-100">Glyph</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Unlock the full potential of your PDFs with Glyph. Merge, split, secure, convert – all in one place. Simple, powerful, private. 
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Organize</h4>
            <ul className="space-y-4">
              <li><Link href="/tools/merge" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Merge PDF</Link></li>
              <li><Link href="/tools/split" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Split PDF</Link></li>
              <li><Link href="/tools/organize" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Organize Pages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Convert</h4>
            <ul className="space-y-4">
              <li><Link href="/tools/html-to-pdf" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">HTML to PDF</Link></li>
              <li><Link href="/tools/images-to-pdf" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">PDF to Images</Link></li>
              <li><Link href="/tools/pdf-to-images" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">PDF to Image</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Trust</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Privacy Guaranteed
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                100% Client-Side
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                No Data Collection
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <p className="text-base sm:text-lg font-semibold text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Glyph
          </p>
          <span className="hidden sm:block text-slate-300 dark:text-slate-700 text-lg">•</span>
          <p className="text-base sm:text-lg font-semibold text-slate-500 dark:text-slate-400">
            Made with ❤️ by <a href="https://abhiraj.dev" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-4 decoration-2 decoration-slate-300 dark:decoration-slate-700 hover:text-blue-600 hover:decoration-blue-600 transition-all">Abhiraj</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

