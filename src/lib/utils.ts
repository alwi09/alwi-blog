import { Avatar } from "@/components/ui/avatar";
import { Post } from "#site/content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { slug } from "github-slugger";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format date
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // weekday: "long",
    // hour: "numeric",
    // minute: "numeric",
  });
}

// posts
export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function groupPostsByYear(posts: Post[]) {
  return posts.reduce((acc: { [year: string]: Post[] }, post: Post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
}

// tags
export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });

  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter((post) => {
    if (!post.tags) return false;
    const slugifiedTags = post.tags.map((tag) => slug(tag));
    return slugifiedTags.includes(tag);
  });
}
