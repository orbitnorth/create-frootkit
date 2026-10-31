import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootAuth — Authentication & Revenue Infrastructure';
  const description =
    metadata?.description ||
    'Fullstack SaaS authentication, subscription billing, and real-time telemetry powered by FrootKit.';

  return (
    <html lang="en" class="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-white font-sans text-[#425466] antialiased">
        {children}
      </body>
    </html>
  );
}
