import BlogHero from "@/components/blog/blog-hero";
import BlogCategories from "@/components/blog/blog-categories";
import BlogPosts from "@/components/blog/blog-posts";
import BlogNewsletter from "@/components/blog/blog-newsletter";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Blog({ params }: PageProps) {
  await params;
  
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogPosts />
      <BlogNewsletter />
    </>
  );
}
