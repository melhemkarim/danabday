// Edit everything in this file to personalize the site.
// No need to touch any component code.

export const recipient = {
  name: "Dana",
  occasionDate: "07.07.26",
  fromName: "Karim",
};

export const surprises = [
  {
    key: "journey",
    label: "Journey",
    description: "A look back at where we've been.",
    icon: "camera",
  },
  
  {
    key: "playlist",
    label: "Playlist",
    description: "Songs that remind me of you.",
    icon: "record",
  },
 
  {
    key: "locked",
    label: "Locked",
    description: "Something that isn't ready yet.",
    icon: "lock",
  },
] as const;

// The date the locked message unlocks. Month is 1-12 (not 0-indexed).
export const birthday = {
  month: 8,
  day: 17,
};

// Shown once the countdown above hits zero.
export const lockedMessage =
  "If you're reading this, today is finally here. I hope this year brings you as much happiness as you've brought into my life. Thank you for being my best friend, my peace, and the love of my life. Watching you grow into the incredible woman you are has been the greatest privilege. I can't wait to celebrate many more birthdays with you—and one day, as your husband. I love you endlessly.";

// "You, through the years" gallery. Mix of photos and one video is fine.
// Replace `src` with a real path once you drop the file into /public/photos
// or /public/videos — until then a placeholder shows. Set `type` to
// "video" for a clip instead of a photo.
export const growingUp = [
  { src: "/photos/baby-dana.jpeg", type: "photo", label: "The little girl...", message: "One day, the little girl in this photo grew into the most beautiful woman, not just because of how she looks, but because of the heart she carries. I know she'd be so proud of the person you've become. And I'm grateful that, out of everyone in the world, I get to love you." },
  { src: "/photos/baby-dana2.jpeg", type: "photo", label: "Who kept dreaming", message: "" },
  { src: "/photos/dana6.jpeg", type: "photo", label: "Who never stopped believing", message: "" },
  { src: "/photos/baby-dana3.jpeg", type: "photo", label: "Who kept smiling", message: "" },
  { src: "/photos/dana4.jpeg", type: "photo", label: "Who never gave up", message: "" },
  { src: "/photos/dana5.jpeg", type: "photo", label: "Who smiled through it all", message: "" },
  { src: "/photos/grad.jpeg", type: "photo", label: "Who made everyone proud", message: "" },
  { src: "/photos/v1.mp4", type: "video", label: "Who found her forever", message: "" },
  { src: "/photos/now.jpeg", type: "photo", label: "The woman I love", message: "" },
];

export const letter = {
  heading: "Happy Birthday",
  body: `Happy birthday. With you, even the simplest days feel incredibly special. Thank you for filling my life with so much light and endless love. Wishing you the happiest year yet, my constant, my everything.`,
  signOff: "Love,",
};

export const moment = {
  date: recipient.occasionDate,
  description:
    "The evening we stayed up talking until neither of us could keep our eyes open, and neither of us wanted to leave.",
};

export const messageNote =
  "Before anything else — just know that today is about you, and I'm so glad I get to be here for it.";

export const secretMessage =
  "If you found this, it means you looked a little closer just like you always do. I hope you never forget how deeply you're loved. Thank you for being my peace, my happiness, and my favorite part of every day. No matter how many birthdays come and go, I'll always choose you. I can't wait to call you my wife. I love you endlessly";

// Add the YouTube video ID (the part after "v=" in the URL) to embed the
// music video on the vinyl. Leave blank to show a placeholder instead.
export const playlist = [
  { title: "Fe Eineh", artist: "Tul8te", youtubeId: "voa8jFUA7Q4" },
  { title: "Heat Waves", artist: "Glass animals", youtubeId: "mRD0-GxqHVo" },
  { title: "Opalite", artist: "Taylor Swift", youtubeId: "4FUIEcnvT04" },
  { title: "Estesna'i", artist: "Adonis", youtubeId: "lIoQ7HLqpGA" },
  { title: "Tammaly Maak", artist: "Amr diab", youtubeId: "EgmXTmj62ic" },

];
