import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useAuth } from '../../hooks/useAuth';
import classes from "./QRGenerator.module.css";

const QRGenerator = () => {

  const { user } = useAuth();
  const [username, setUsername] = useState(user.name);
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    setQrValue(username);
  };

  return (
    <div className={classes.container}>
      <h2>QR Code Generator</h2>
      <div>
       
        <button onClick={generateQRCode}>Generate QR Code</button>
      </div>
      <div>
        {qrValue && (
          <div  className={classes.container}>
        <h3>Generated QR Code for user: {username}</h3>
            <QRCode value={qrValue} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;
