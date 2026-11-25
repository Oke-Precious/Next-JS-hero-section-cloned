import Image from 'next/image';

export function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      {/* Left Brand Lockup: Vercel Triangle / NEXT.JS */}
      <div className="flex items-center gap-3.5 shrink-0">
        <Image
          src="/assets/vercel-logo.svg"
          alt="Vercel"
          width={24}
          height={21}
          priority
          className="h-[18px] w-auto block select-none"
          draggable={false}
        />

        <span
          aria-hidden="true"
          className="h-5 w-[1px] bg-neutral-700 rotate-[22deg] block"
        />

        <Image
          src="/assets/nextjs-logo.svg"
          alt="Next.js"
          width={90}
          height={18}
          priority
          className="h-[16px] w-auto block select-none translate-y-[1px]"
          draggable={false}
        />
      </div>

      {/* Right Visual Controls: Ask AI, GitHub, Menu */}
      <div className="flex items-center gap-3.5 shrink-0">
        <button
          type="button"
          className="h-8 px-3 rounded-md border border-neutral-800 bg-neutral-950 text-[13px] font-medium text-neutral-200 hover:border-neutral-700 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-default"
        >
          Ask AI
        </button>

        <button
          type="button"
          aria-label="GitHub"
          className="flex items-center justify-center text-neutral-100 hover:text-white transition-colors duration-150 shrink-0 cursor-default"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Menu"
          className="h-8 w-8 rounded-full border border-neutral-800 bg-neutral-950 flex flex-col items-center justify-center gap-[4px] hover:border-neutral-700 transition-colors duration-150 shrink-0 cursor-default"
        >
          <span className="w-3.5 h-[1.5px] bg-neutral-200 rounded-full block" />
          <span className="w-3.5 h-[1.5px] bg-neutral-200 rounded-full block" />
        </button>
      </div>
    </header>
  );
}
