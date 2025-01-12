import type { Rating } from "./Rating.ts";

export interface LearningContent {
  title: string;
  author: string;
  url: string;
  /**
   * The essence of the content.
   */
  summary: string;
  rating: Rating;
  /**
   * Your thoughts about the content. Should usually explain the rating and expand on the summary.
   */
  thoughts: string;
  /**
   * The date at which you consumed the content.
   */
  date: Date;
}
