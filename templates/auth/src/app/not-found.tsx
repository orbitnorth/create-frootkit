export interface NotFoundProps {
  currentPath?: string;
}

export default function RootNotFound({ currentPath }: NotFoundProps) {
  return (
    <div class="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center font-sans">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-[#635bff] bg-[#635bff]/10 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-[#635bff]" />
        Status 404
      </div>

      <h1 class="text-4xl sm:text-5xl font-light text-[#0a2540] tracking-tight">
        Page Not Found
      </h1>

      <p class="mt-4 max-w-md text-[17px] text-[#425466] leading-relaxed">
        The page you are looking for at{' '}
        <code class="font-mono text-sm bg-[#f6f9fc] border border-[#e6ebf1] px-1.5 py-0.5 rounded text-[#0a2540]">
          {currentPath || 'this URL'}
        </code>{' '}
        does not exist.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="/"
          class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium bg-[#635bff] text-white shadow-card hover:bg-[#5249e6] transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

