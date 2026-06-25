import BlogSection from "../components/BlogSection";
import data from "../assets/data/data";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";

function Blog() {
  return (
    <div>
      <Hero />
      <div className="max-w-339 mx-auto px-4 py-16">
        <div className="flex justify-between  items-center mb-12">
          <h2 className="text-3xl font-semibold">Recent Blog</h2>
          <button className="underline font-semibold">View All Posts</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {data.Blogs.map((Card) => (
            <BlogCard
              key={Card.id}
              image={Card.image}
              title={Card.title}
              author={Card.author}
              date={Card.date}
            />
          ))}
          {data.Blogs.map((Card) => (
            <BlogCard
              key={Card.id}
              image={Card.image}
              title={Card.title}
              author={Card.author}
              date={Card.date}
            />
          ))}
          {data.Blogs.map((Card) => (
            <BlogCard
              key={Card.id}
              image={Card.image}
              title={Card.title}
              author={Card.author}
              date={Card.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
