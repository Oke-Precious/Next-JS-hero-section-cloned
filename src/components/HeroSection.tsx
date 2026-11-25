import React, {useEffect, useRef, useState} from 'react';
import {Check, Copy} from 'lucide-react';

const CREATE_COMMAND = 'npx create-next-app@latest';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyCommand = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CREATE_COMMAND);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = CREATE_COMMAND;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    } catch {
      // Clipboard access denied; still show brief feedback or fail silently
    }

    setCopied(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 pb-16 pt-6">
      <div className="w-full max-w-[920px] flex flex-col items-center text-center">
        {/* Giant Outlined NEXT Backdrop Graphic */}
        <div className="w-full max-w-[850px] select-none pointer-events-none">
          <img
            src="/assets/next-hero-outline.svg"
            alt="NEXT"
            className="w-full h-auto block"
            draggable={false}
          />
        </div>

        {/* Main Display Headline overlapping lower fade of NEXT */}
        <h1 className="relative z-10 -mt-[4.8%] text-[clamp(2.35rem,5.7vw,4.1rem)] font-semibold tracking-[-0.04em] leading-[1.05] text-white text-balance">
          The React Framework
          <br />
          for the Web
        </h1>

        {/* Two-line Subtitle */}
        <p className="mt-6 max-w-[540px] text-[15px] sm:text-[17px] leading-[1.6] text-neutral-400 font-normal">
          Used by the world&apos;s largest companies, Next.js enables you to create{' '}
          <strong className="font-semibold text-white">
            high-<br className="hidden sm:inline" />quality web applications
          </strong>{' '}
          with the power of React components.
        </p>

        {/* Interactive Command Copy Pill */}
        <div className="mt-9">
          <button
            type="button"
            onClick={handleCopyCommand}
            aria-label={copied ? 'Copied command to clipboard' : 'Copy create-next-app command'}
            className="group inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-950/90 px-5 py-2.5 text-[13px] sm:text-[14px] font-mono text-neutral-200 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-colors duration-150 cursor-pointer"
          >
            <span className="text-neutral-500 select-none">$</span>
            <span className="whitespace-nowrap tracking-[-0.01em]">
              {CREATE_COMMAND}
            </span>
            <span className="ml-0.5 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-150 flex items-center justify-center w-4 h-4">
              {copied ? (
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              ) : (
                <Copy className="w-3.5 h-3.5" strokeWidth={1.75} />
              )}
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};
