import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getAllTags,
  getPostsByTagSlug,
  groupPostsByYear,
  sortTagsByCount,
} from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostsByTagSlug(posts, tag);
  console.log(displayPosts);

  const groupedPosts = groupPostsByYear(displayPosts);
  console.log(groupedPosts);

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
            {title}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayPosts?.length > 0 ? (
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
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
