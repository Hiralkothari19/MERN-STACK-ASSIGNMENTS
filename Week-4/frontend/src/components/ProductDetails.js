// src/components/ProductDetails.js
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Product 1', price: '$20', description: 'This is product 1.', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$30', description: 'This is product 2.', image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$25', description: 'This is product 3.', image: '/images/product3.jpg' },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
      <h2 className="text-4xl font-semibold mt-4">{product.name}</h2>
      <p className="text-xl mt-2">{product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
