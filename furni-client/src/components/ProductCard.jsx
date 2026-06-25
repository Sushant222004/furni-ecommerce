import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price }) {
  return (
    <Link
      to={`/products/${id}`}
      className="group flex flex-col items-center text-center p-6 hover:bg-gray-100  transition duration-300 rounded-2xl hover:-translate-y-1"
    >
      <img
        className="w-full max-w-87.5 transition duration-300 group-hover:-translate-y-3"
        src={image}
        alt={name}
      />

      <div>
        <h3 className="font-bold"> {name}</h3> 

        <p className="font-semibold ">{price}</p>

        <button className="bg-black mt-3 text-white w-10 h-10 rounded-full opacity-0 translate-y-0 group-hover:opacity-100 transition group-hover:translate-y-4 duration-300">
          +
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
