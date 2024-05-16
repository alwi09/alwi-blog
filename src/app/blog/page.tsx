import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getAllTags,
  groupPostsByYear,
  sortPosts,
  sortTagsByCount,
} from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "My ramblings on all things tech and dev.",
};

const POST_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

// interface Post {
//   slug: string;
//   title: string;
//   description?: string;
//   date: string;
//   tags?: string[];
//   published: boolean;
// }

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );
  console.log(displayPosts);

  const groupedPosts = groupPostsByYear(displayPosts);

  console.log(groupedPosts);

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things tech and dev.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-6">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          {displayPosts.length > 0 ? (
            <ul className="flex flex-col">
              {Object.keys(groupedPosts)
                .sort((a, b) => Number(b) - Number(a))
                .map((year) => (
                  <div key={year}>
                    <h2 className="text-2xl font-bold text-muted-foreground text-center py-4">
                      {year}
                    </h2>
                    {groupedPosts[year].map((post) => {
                      const { slug, title, description, date, tags } = post;
                      return (
                        <li key={slug}>
                          <hr className="mb-4" />
                          <PostItem
                            slug={slug}
                            title={title}
                            description={description}
                            date={date}
                            tags={tags}
                          />
                        </li>
                      );
                    })}
                  </div>
                ))}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination totalPages={totalPages} className="mt-8" />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} count={tags[tag]} key={tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
