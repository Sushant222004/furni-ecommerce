import BlogCard from "./BlogCard";
import data from "../assets/data/data"
import {Link} from "react-router-dom"

function BlogSection() {
  return (
    <section>
      <div className=" max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16 gap-12">
        <div className="flex justify-between  items-center mb-12">
          <h2 className="text-3xl font-semibold">Recent Blog</h2>
          <Link to="/blog" className="underline font-semibold">View All Posts</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </section>
  );
}

export default BlogSection;
