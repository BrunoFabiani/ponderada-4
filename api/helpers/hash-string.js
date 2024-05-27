const crypto = require('crypto');

function generateRandomString() {
  // Gera uma string aleatória
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = {
  exits: {
    success: {
      description: 'String encriptada com sucesso.',
    },
  },
  fn: async function() {
    let randomString = generateRandomString();

    // const cipher = crypto.createCipheriv('aes-256-cbc', encriptionKey);
    // let encrypted = cipher.update(randomString, 'utf8', 'hex');
    // encrypted += cipher.final('hex');
    // return encrypted;

    const algorithm = 'aes-256-ctr';
    const ENCRYPTION_KEY = Buffer.from('FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=', 'base64');
    const IV_LENGTH = 16;

    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let encrypted = cipher.update(randomString);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');

    // function decrypt(text) {
    //   let textParts = text.split(':');
    //   let iv = Buffer.from(textParts.shift(), 'hex');
    //   let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    //   let decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    //   let decrypted = decipher.update(encryptedText);
    //   decrypted = Buffer.concat([decrypted, decipher.final()]);
    //   return decrypted.toString();
    // }
  },
};
