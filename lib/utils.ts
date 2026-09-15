export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function pad3(n: number): string {
  return String(Math.max(0, Math.min(100, Math.round(n)))).padStart(3, "0");
}
