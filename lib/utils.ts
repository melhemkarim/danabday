import { BIRTHDAY_DAY, BIRTHDAY_MONTH } from "@/data/memories";

export function clsx(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

/** Returns the next occurrence of the birthday (this year, or next year if passed). */
export function getNextBirthday(now: Date = new Date()): Date {
  const year = now.getFullYear();
  let target = new Date(year, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
  if (now.getTime() > target.getTime() + 24 * 60 * 60 * 1000 - 1) {
    target = new Date(year + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
  }
  return target;
}

export function isBirthdayToday(now: Date = new Date()): boolean {
  return (
    now.getMonth() === BIRTHDAY_MONTH && now.getDate() === BIRTHDAY_DAY
  );
}

export function isBirthdayUnlocked(now: Date = new Date()): boolean {
  const target = new Date(
    now.getFullYear(),
    BIRTHDAY_MONTH,
    BIRTHDAY_DAY,
    0,
    0,
    0
  );
  return now.getTime() >= target.getTime();
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export function getTimeLeft(target: Date, now: Date = new Date()): TimeLeft {
  const total = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds, total };
}
