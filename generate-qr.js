const QRCode = require('qrcode');
const path = require('path');

// Your local server URL
const url = 'http://192.168.1.199:3000';
const outputPath = path.join(__dirname, 'qr-code.png');

QRCode.toFile(outputPath, url, {
  width: 500,
  margin: 2,
  color: {
    dark: '#2A196B',  // Your purple color
    light: '#FFFFFF'
  }
}, function (err) {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log('✅ QR code generated successfully!');
  console.log(`📱 File saved to: ${outputPath}`);
  console.log(`🔗 URL: ${url}`);
});


