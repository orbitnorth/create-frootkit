/**
 * Terminal UI and interactive prompt utilities for create-frootkit.
 * Zero-dependency implementation with 24-bit RGB gradients, raw-mode TTY, and animated spinners.
 */

import * as readline from 'node:readline';

// ---------------------------------------------------------------------------
// ANSI Color & Styling Codes
// ---------------------------------------------------------------------------

export const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',

  // Foreground colors
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',

  // 24-bit RGB colors
  emerald: '\x1b[38;2;16;185;129m',
  sky: '\x1b[38;2;14;165;233m',
  violet: '\x1b[38;2;168;85;247m',
  amber: '\x1b[38;2;245;158;11m',
  rose: '\x1b[38;2;244;63;94m',
};

/**
 * Interpolate RGB colors along a multi-stop gradient.
 */
function interpolateRgb(
  colorA: [number, number, number],
  colorB: [number, number, number],
  factor: number
): [number, number, number] {
  return [
    Math.round(colorA[0] + (colorB[0] - colorA[0]) * factor),
    Math.round(colorA[1] + (colorB[1] - colorA[1]) * factor),
    Math.round(colorA[2] + (colorB[2] - colorA[2]) * factor),
  ];
}

/**
 * Apply a multi-color gradient across a line of text.
 */
export function gradientLine(
  text: string,
  stops: [number, number, number][] = [
    [16, 185, 129],  // Emerald
    [14, 165, 233],  // Sky
    [168, 85, 247],  // Violet
  ]
): string {
  const len = text.length;
  if (len === 0) return '';
  if (stops.length < 2) return text;

  let out = '';
  for (let i = 0; i < len; i++) {
    const progress = i / Math.max(1, len - 1);
    const scaled = progress * (stops.length - 1);
    const segmentIndex = Math.min(Math.floor(scaled), stops.length - 2);
    const segmentFactor = scaled - segmentIndex;

    const [r, g, b] = interpolateRgb(
      stops[segmentIndex]!,
      stops[segmentIndex + 1]!,
      segmentFactor
    );
    out += `\x1b[38;2;${r};${g};${b}m${text[i]}`;
  }
  return out + c.reset;
}

// ---------------------------------------------------------------------------
// Header Banner
// ---------------------------------------------------------------------------

export function printBanner(version = '1.1.0'): void {
  const logo = [
    '  ███████╗██████╗  ██████╗  ██████╗ ████████╗██╗  ██╗██╗████████╗',
    '  ██╔════╝██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝██║ ██╔╝██║╚══██╔══╝',
    '  █████╗  ██████╔╝██║   ██║██║   ██║   ██║   █████╔╝ ██║   ██║   ',
    '  ██╔══╝  ██╔══██╗██║   ██║██║   ██║   ██║   ██╔═██╗ ██║   ██║   ',
    '  ██║     ██║  ██║╚██████╔╝╚██████╔╝   ██║   ██║  ██╗██║   ██║   ',
    '  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝   ╚═╝   ',
  ];

  console.log();
  for (const line of logo) {
    console.log(gradientLine(line));
  }
  console.log();
  console.log(
    `  ${c.bold}FrootKit${c.reset} ${c.gray}v${version}${c.reset} — ${c.emerald}The Next.js Alternative for Preact & Froot${c.reset}`
  );
  console.log(
    `  ${c.dim}Next.js App Router • Dynamic Layouts • Tailwind CSS v4 • SSG Export • API Routes${c.reset}`
  );
  console.log();
}

export function printStep(current: number, total: number, title: string): void {
  console.log(
    `  ${c.emerald}${c.bold}[${current}/${total}]${c.reset} ${c.bold}${title}${c.reset}`
  );
}

export function printSuccess(message: string): void {
  console.log(`  ${c.emerald}✓${c.reset} ${message}`);
}

export function printError(message: string): void {
  console.error(`  ${c.rose}✕${c.reset} ${c.rose}${message}${c.reset}`);
}

// ---------------------------------------------------------------------------
// Animated Terminal Spinner
// ---------------------------------------------------------------------------

export class Spinner {
  private frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  private current = 0;
  private timer?: NodeJS.Timeout;
  private text: string;
  private startTime: number = Date.now();
  private showTimer: boolean;

  constructor(text: string, showTimer = false) {
    this.text = text;
    this.showTimer = showTimer;
  }

  update(text: string): this {
    this.text = text;
    return this;
  }

  start(): this {
    this.startTime = Date.now();
    if (!process.stdout.isTTY) {
      console.log(`  ${c.gray}${this.text}...${c.reset}`);
      return this;
    }
    process.stdout.write('\x1b[?25l');
    this.timer = setInterval(() => {
      const frame = this.frames[this.current % this.frames.length];
      this.current++;
      const elapsed = this.showTimer
        ? ` ${c.gray}(${((Date.now() - this.startTime) / 1000).toFixed(1)}s)${c.reset}`
        : '';
      process.stdout.write(`\r  ${c.emerald}${frame}${c.reset} ${this.text}${elapsed}`);
    }, 80);
    return this;
  }

  stop(successMessage?: string): void {
    if (this.timer) clearInterval(this.timer);
    if (process.stdout.isTTY) {
      process.stdout.write('\r\x1b[2K');
      process.stdout.write('\x1b[?25h');
    }
    if (successMessage) {
      const elapsed = this.showTimer
        ? ` ${c.gray}(${((Date.now() - this.startTime) / 1000).toFixed(1)}s)${c.reset}`
        : '';
      console.log(`  ${c.emerald}✓${c.reset} ${successMessage}${elapsed}`);
    }
  }

  fail(errorMessage: string): void {
    if (this.timer) clearInterval(this.timer);
    if (process.stdout.isTTY) {
      process.stdout.write('\r\x1b[2K');
      process.stdout.write('\x1b[?25h');
    }
    console.log(`  ${c.rose}✕${c.reset} ${c.rose}${errorMessage}${c.reset}`);
  }
}

// ---------------------------------------------------------------------------
// Interactive Terminal Prompts
// ---------------------------------------------------------------------------

export interface SelectOption<T = string> {
  value: T;
  label: string;
  hint?: string;
}

export async function promptSelect<T = string>(
  title: string,
  options: SelectOption<T>[],
  defaultIndex = 0
): Promise<T> {
  if (!process.stdin.isTTY) {
    return options[defaultIndex]!.value;
  }

  let selected = Math.max(0, Math.min(defaultIndex, options.length - 1));
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const render = (isInitial = false) => {
    if (!isInitial) {
      readline.moveCursor(process.stdout, 0, -options.length - 1);
    }
    console.log(`  ${c.cyan}?${c.reset} ${c.bold}${title}${c.reset}`);
    for (let i = 0; i < options.length; i++) {
      const opt = options[i]!;
      const isCurrent = i === selected;
      const marker = isCurrent ? `${c.emerald}❯${c.reset}` : ' ';
      const text = isCurrent
        ? `${c.bold}${c.emerald}${opt.label}${c.reset}`
        : `${c.gray}${opt.label}${c.reset}`;
      const hint = opt.hint ? `  ${c.dim}${opt.hint}${c.reset}` : '';
      console.log(`    ${marker} ${text}${hint}`);
    }
  };

  render(true);

  return new Promise<T>((resolve) => {
    process.stdin.setRawMode(true);
    process.stdin.resume();

    const onKeypress = (_str: string, key: readline.Key) => {
      if (!key) return;

      if (key.ctrl && key.name === 'c') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.exit(130);
      }

      if (key.name === 'up' || (key.ctrl && key.name === 'p')) {
        selected = (selected - 1 + options.length) % options.length;
        render();
      } else if (key.name === 'down' || (key.ctrl && key.name === 'n')) {
        selected = (selected + 1) % options.length;
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        process.stdin.removeListener('keypress', onKeypress);
        process.stdin.setRawMode(false);
        rl.close();
        resolve(options[selected]!.value);
      }
    };

    readline.emitKeypressEvents(process.stdin, rl);
    process.stdin.on('keypress', onKeypress);
  });
}

export async function promptConfirm(title: string, defaultVal = true): Promise<boolean> {
  const defaultText = defaultVal ? 'Y/n' : 'y/N';
  const answer = await promptText(`${title} (${defaultText})`, defaultVal ? 'y' : 'n');
  const lower = answer.trim().toLowerCase();
  if (lower === '') return defaultVal;
  return lower === 'y' || lower === 'yes';
}

export async function promptText(
  title: string,
  defaultValue = '',
  validate?: (val: string) => boolean | string
): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const ask = (): Promise<string> => {
    return new Promise((resolve) => {
      const hint = defaultValue ? ` ${c.dim}(${defaultValue})${c.reset}` : '';
      rl.question(`  ${c.cyan}?${c.reset} ${c.bold}${title}${hint}: `, (answer) => {
        const val = answer.trim() || defaultValue;
        if (validate) {
          const res = validate(val);
          if (res !== true) {
            console.log(`    ${c.rose}⚠ ${typeof res === 'string' ? res : 'Invalid input'}${c.reset}`);
            return resolve(ask());
          }
        }
        resolve(val);
      });
    });
  };

  const result = await ask();
  rl.close();
  return result;
}

export function printNextSteps(
  projectDir: string,
  pkgManager: 'pnpm' | 'npm' | 'yarn' | 'bun',
  installed: boolean
): void {
  const cdCmd = `cd ${projectDir}`;
  const runCmd = pkgManager === 'npm' ? 'npm run dev' : `${pkgManager} dev`;
  const buildCmd = pkgManager === 'npm' ? 'npm run build' : `${pkgManager} build`;

  console.log(`
  ${c.bold}${c.emerald}Success! Created FrootKit application.${c.reset}

  ${c.bold}To get started:${c.reset}
    ${c.cyan}$ ${cdCmd}${c.reset}
    ${installed ? '' : `${c.cyan}$ ${pkgManager} install${c.reset}\n    `}${c.cyan}$ ${runCmd}${c.reset}

  ${c.bold}Available Commands:${c.reset}
    ${c.dim}${runCmd.padEnd(20)}${c.reset} Starts development server with Tailwind hot-reload
    ${c.dim}${buildCmd.padEnd(20)}${c.reset} Builds production SSG HTML and assets into .froot/
    ${c.dim}${(pkgManager === 'npm' ? 'npm run start' : `${pkgManager} start`).padEnd(20)}${c.reset} Serves production build with dynamic API routes
`);
}

