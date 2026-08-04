export interface Memory {
  id: number;
  image: string; // put files in /public/images/memories/
  title: string;
  message: string;
}

/**
 * ✏️ EDIT ME
 * Replace `image` with your own photos in /public/images/memories/
 * (e.g. memory-1.jpg ... memory-7.jpg) and rewrite each message.
 */
export const memories: Memory[] = [
  {
    id: 1,
    image: "/images/memories/memory-1.jpg",
    title: "The Day It Began",
    message:
      "My little princess... from this beautiful smile, I knew you've always been the kindest soul I'd ever meet.",
  },
  {
    id: 2,
    image: "/images/memories/memory-2.jpg",
    title: "Golden Afternoons",
    message:
      "Every ordinary afternoon turned into something golden the moment you were in it. You made simple moments feel enchanted.",
  },
  {
    id: 3,
    image: "/images/memories/memory-3.jpg",
    title: "Laughter Like Music",
    message:
      "Your laugh is my favorite sound in the whole world — a melody I never want the orchestra to stop playing.",
  },
  {
    id: 4,
    image: "/images/memories/memory-4.jpg",
    title: "Under the Same Sky",
    message:
      "Wherever we are, we share the same stars. Every one of them has heard me wish for a lifetime with you.",
  },
  {
    id: 5,
    image: "/images/memories/memory-5.jpg",
    title: "Quiet Moments, Loud Love",
    message:
      "It's not just the big adventures — it's the quiet Tuesdays, the sleepy mornings, the nothing-days that I love most with you.",
  },
  {
    id: 6,
    image: "/images/memories/memory-6.jpg",
    title: "You, Always You",
    message:
      "Out of every fairytale ever written, none of them compare to the real story of falling for you, again, every single day.",
  },
  {
    id: 7,
    image: "/images/memories/memory-7.jpg",
    title: "To Forever",
    message:
      "This is only chapter one, my love. There is an entire storybook of us still waiting to be written — and I can't wait to fill every page with you.",
  },
];

export const BIRTHDAY_MONTH = 7; // August (0-indexed)
export const BIRTHDAY_DAY = 17;
