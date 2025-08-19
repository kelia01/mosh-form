import { useState } from "react";

const Cart = () => {
  const kfcMenu = [
    { name: "Zinger Burger", price: 5.49 },
    { name: "Bucket of 8 Hot Wings", price: 7.99 },
    { name: "Original Recipe Chicken (2 Pieces)", price: 4.99 },
    { name: "Popcorn Chicken (Regular)", price: 3.49 },
    { name: "Chicken Sandwich Combo", price: 6.99 },
    { name: "Famous Bowl", price: 5.79 },
  ];

  interface Kfc {
    name: string;
    price: number
  }
  const [cart, setCart ] = useState<Kfc[]>([]);

  const toggleItem = (item: Kfc) => {
    const exists = cart.find(i => item.name === i.name);

    if(exists) {
      setCart(cart.filter(i => i.name !== item.name))
    } else {
      setCart([...cart, item]);
    }
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold text-red-600 mb-6">KFC MENU</h1>
      <div className="flex gap-3 p-6">
      <div className="p-4 border rounded shadow w-1/2">
        <h2 className="mb-4 text-xl font-bold">Menu Items</h2>
        <div className="flex flex-col space-y-2">
        {kfcMenu.map((item, index) => (
            <div key={index} className="p-2 flex gap-3 border rounded">
                <input type="checkbox" checked={cart.some(i => i.name === item.name)} onChange={() => toggleItem(item)}/>
                <p className="font-semibold">{item.name}</p>
                <p className="text-green-600 font-semibold">${item.price}</p>
            </div>
        ))}
        </div>
      </div>
      <div className="p-4 border rounded shadow w-1/2">
        <h2 className="mb-4 text-xl font-bold">Your Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items added yet</p>
        ) : (
          <>
           <ul className="mb-4">

            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-1 text-sm">
                <span>{item.name}</span>
                <span className="text-green-600 font-semibold">${item.price}</span>
              </li>
            ))}
           </ul>
           <div className="flex justify-between font-bold mb-4">
            <span>Total: {total}</span>
           </div>
           <button className="bg-red-600 text-white w-full py-2 rounded font-bold hover:bg-red-700"> Place Order - ${total} </button>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default Cart;
