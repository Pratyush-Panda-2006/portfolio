import Link from 'next/link';

export const metadata = {
  title: '404: Document Not Found | Pratyush Panda',
  description: 'The requested archival document or transmission could not be located.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper text-ink-primary flex flex-col items-center justify-center p-6 select-none">
      <div className="bg-white border border-[#D5CFC3] rounded-xs p-8 sm:p-12 max-w-lg w-full text-center shadow-card relative transform -rotate-0.5">
        <div className="masking-tape -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 rotate-1" />

        <div className="inline-block border-2 border-marker-red text-marker-red font-mono font-bold text-[10px] tracking-widest px-3 py-1 uppercase rounded-xs mb-6 transform -rotate-2">
          CLASSIFIED 404 // MISSING WIRE
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink-primary tracking-tight mb-4">
          Lost in the <span className="italic text-marker-red">archive</span>.
        </h1>

        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-8 max-w-md mx-auto">
          The document, report, or dispatch code you requested cannot be located in this record ledger. It may have been relocated or purged during a systems refactor.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white font-mono text-xs font-bold px-6 py-3 rounded-xs shadow-md transition transform hover:-translate-y-0.5"
        >
          <span>Return to Front Page</span>
          <span>→</span>
        </Link>

        <div className="mt-8 pt-4 border-t border-dashed border-[#E2DDD4] font-mono text-[10px] text-ink-faint uppercase tracking-wider">
          LEDGER REF: PRATYUSH PANDA // VERIFIED REGISTRY 2026
        </div>
      </div>
    </main>
  );
}

