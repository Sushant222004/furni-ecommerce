function BlogCard({ image, title, author, date }) {
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <img className="rounded-2xl" src={image} alt="image-1" />
        <h2 className="text-md font-semibold hover:text-gray-600 cursor-pointer">
          {title}
        </h2>
        <p className="text-sm text-gray-500">
          by <span className="font-semibold text-black">{author}</span> on <span className="font-semibold text-black">{date}</span>
        </p>
      </div>
    </div>
  );
}
export default BlogCard;
