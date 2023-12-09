import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const VendingPage = () => {
  const [cart, setCart] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);

  const handleAddToCart = (name, price) => {
    setCart([...cart, { name, price }]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotalCart = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleMockPayment = () => {

    setPaymentSuccess(true);

    
    const paymentCode = Math.floor(Math.random() * 1000000).toString();
    setGeneratedCode(paymentCode);
  };

  return (
    <div className='container'>
     

      <div className='container'>
        <h3>Available Items:</h3>
        <ul>
          <li>
            Water - $2.50{' '}
            <button onClick={() => handleAddToCart('Water', 2.50)}>Add to Cart</button>
          </li>
          <li>
            Whey Protein Shake - $3.75{' '}
            <button onClick={() => handleAddToCart('Whey Protein Shake', 3.75)}>Add to Cart</button>
          </li>
          <li>
            Gym Towel - $10.00{' '}
            <button onClick={() => handleAddToCart('Gym Towel ', 10)}>Add to Cart</button>
          </li>
        </ul>
      </div>

      <div>
        <h3>Shopping Cart:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}{' '}
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: {calculateTotalCart()} €</p>
      </div>

      {!paymentSuccess ? (
        <div>
          <button onClick={handleMockPayment}>
            PAY WITH &nbsp;&nbsp; &nbsp;
            <img
              src="/public/paypal.png"
              alt="Payment"
              style={{ width: '150px', height: 'auto' }}
            />
            
          </button>
        </div>
      ) : (
        <div className='container-qr'>
          <p>♥♥ Mock payment to Carlos Calleja Saez account sucessfull. Enjoy your products ♥♥</p>
          <h3>QR CODE for vending machine:</h3>
          <QRCode value={generatedCode} />
          <p>Scan this code in the vending machine to get your products </p>
        </div>
      )}
    </div>
  );
};

export default VendingPage;
