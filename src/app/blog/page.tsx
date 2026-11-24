import BlogBox from "@/components/blog-box/BlogBox";
import { boxs } from "./_data/content";
import { TitleMotion } from "@/components/motions/Motions";

const BlogsPage = () => {
  return (
    <section className="container mx-auto my-28 px-4 md:px-12">
      <TitleMotion
        title="Our Blog"
        titleClass="text-primary  text-center text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-4xl xl:text-5xl"
        classMotion="mx-auto max-w-5xl px-4 text-center mb-24"
      />
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {boxs.map((b) => (
          <BlogBox key={b.id} item={b} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
