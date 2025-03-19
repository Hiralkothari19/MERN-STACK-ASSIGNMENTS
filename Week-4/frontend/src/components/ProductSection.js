// src/components/ProductSection.js
import { useNavigate } from 'react-router-dom';

function ProductSection() {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: 'Product 1', price: '$20', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$30', image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$25', image: '/images/product3.jpg' },
  ];

  const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => goToDetails(product.id)}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
          <p className="text-lg mt-2">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
