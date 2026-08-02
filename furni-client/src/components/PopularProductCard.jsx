function PopularProductCard({ head, para, image }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="">
        <img
          src={`http://localhost:5000/images/${image}`}
          alt={head}
          className="w-50 h-50 object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">{head}</h2>
        <p className="text-sm text-gray-500 ">{para}</p>
        <button className="font-semibold text-sm self-start text-gray-600">
          Read More
        </button>
      </div>
    </div>
  );
}

export default PopularProductCard;
