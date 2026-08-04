# A Little Something — digital birthday gift site

Next.js 14 (App Router) + Tailwind CSS. Envelope-seal intro → browse five
surprise categories in any order → confetti → a typewritten letter.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## The flow

1. **Envelope** — press the seal to open
2. **Choose the surprise** — five illustrated cards. Pick any in any order,
   as many as you like — each one takes you into that section with its own
   **back button** (top-left) that returns you to this menu. A gold dot
   marks cards you've already viewed. When you're ready, press
   "I'm ready, continue" at the bottom.
   - Journey → the "you, through the years" flip gallery (photos + one video)
   - Moment → a specific memory, styled like a pocket watch
   - Playlist → a big vinyl with the song's YouTube video on the label,
     plus a track switcher
   - Message → an envelope that opens into a short note
   - Locked → a live countdown to August 17; unlocks automatically into a
     typewritten message once that date arrives
3. **Confetti** — a button that bursts confetti each click; the 10th
   reveals "Happy Birthday"
4. **The letter** — final page, text types itself out, with a "read it
   again" link back to the start

There's also a hidden easter egg: one still (non-twinkling) star tucked in
a corner of every page. Click it for a secret message. There's a small
hint about it on the very first page.

## Customize

Almost everything lives in one file: **`data/content.ts`**
- `recipient` — name, date, your name
- `surprises` — the five card labels/descriptions (icons are fixed to match each card's theme)
- `growingUp` — the "through the years" gallery: label, message, and `type: "photo" | "video"` per item
- `moment` — the date + description shown on the Moment card
- `messageNote` — the short note behind the Message card's envelope
- `birthday` — month/day the locked message unlocks (currently August 17)
- `lockedMessage` — what's revealed once that date arrives
- `secretMessage` — what the hidden star reveals
- `letter` — the final note text (typed out on screen)
- `playlist` — track titles + `youtubeId` for the video-on-vinyl embed

## Add real photos and video

1. Drop image files into `public/photos/` and video files into `public/videos/`
2. In `data/content.ts`, set each `growingUp` entry's `src` to that path
   (e.g. `"/photos/age-3.jpg"` or `"/videos/us-lately.mp4"`) and make sure
   `type` matches ("photo" or "video")
3. Until you add a real path, that card shows a placeholder — flipping
   still works either way

## Add the YouTube video for a song

In `data/content.ts`, find the `playlist` array and set `youtubeId` to the
ID from the video's URL — the part after `v=`. For example, for
`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `"dQw4w9WgXcQ"`.

## If the envelope doesn't seem to respond

- Make sure you ran both `npm install` and `npm run dev` (not just opened
  the files) and are viewing `http://localhost:3000` in a browser.
- Open the browser console (F12) and check for red errors — if
  `npm install` didn't finish cleanly, the page can load with broken JS.
- Hard-refresh the page (Ctrl/Cmd+Shift+R) after any code change.

## Notes

- Built for keyboard accessibility (focus rings) and respects
  `prefers-reduced-motion`.
- Swap the Google Fonts in `app/layout.tsx` (Playfair Display / Caveat / Inter)
  for any others at fonts.google.com.
