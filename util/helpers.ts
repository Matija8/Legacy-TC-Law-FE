export function clamp(min: number, max: number, size: number) {
  return Math.max(min, Math.min(max, size));
}
