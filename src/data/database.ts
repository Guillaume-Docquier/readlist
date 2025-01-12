/* eslint-disable @typescript-eslint/no-magic-numbers -- We enter dates with numbers */

import type { LearningContent } from "./LearningContent.ts";
import { estDate } from "./estDate.ts";
import { Rating } from "./Rating.ts";

export const DATABASE: LearningContent[] = [
  {
    title: "10 Years of Software Architecture: Best And Worst Decisions",
    author: "CodeOpinion",
    url: "https://youtu.be/36I_eW8K1EY?si=ZcHQDwP9cS8aIvfv",
    summary:
      "Create clear boundaries and use the right tool within each boundary.",
    rating: Rating.AVERAGE,
    thoughts:
      "It was a bit shallow for a 15 minutes video. I expected more concrete examples but it stayed very high level. Still a good take, though.",
    date: estDate(2025, 1, 12),
  },
  {
    title: "Apply Functional Programming Principles",
    author: "Edward Garson",
    url: "https://97-things-every-x-should-know.gitbooks.io/97-things-every-programmer-should-know/content/en/thing_02/",
    summary:
      "Referential transparency and the absence of side effects makes code easier to maintain.",
    rating: Rating.GOOD,
    thoughts:
      "You will need side effects at some point, but if you can defer side effects to a high level in your program, you'll have an easier time dealing with the core logic.",
    date: estDate(2025, 1, 12),
  },
];
