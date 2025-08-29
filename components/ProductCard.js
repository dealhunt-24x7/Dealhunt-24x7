export default function ProductCard({ title, price, image, link }) {
  return (
    <div className="border p-2 rounded shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-green-600 font-semibold">{price}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        View
      </a>
    </div>
  );
}
