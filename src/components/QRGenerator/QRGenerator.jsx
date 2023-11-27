import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator = () => {
  const [username, setUsername] = useState('');
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    setQrValue(username);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={generateQRCode}>Generate QR Code</button>
      </div>
      <div>
        {qrValue && (
          <div>
        <h3>Generated QR Code for user: {username}</h3>
            <QRCode value={qrValue} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;
