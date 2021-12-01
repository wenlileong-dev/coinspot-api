const hmac = require("crypto").createHmac;
const axios = require("axios");

exports.coinspotReadOnly = async (path, postdata, key, secret) => {
  var nonce = new Date().getTime();

  var postdata = postdata || {};
  postdata.nonce = nonce;

  var stringmessage = JSON.stringify(postdata);
  var signedMessage = new hmac("sha512", secret);

  signedMessage.update(stringmessage);

  var sign = signedMessage.digest("hex");

  let result = await axios.post(
    `https://www.coinspot.com.au/api/v2/ro${path}`,
    stringmessage,
    {
      headers: {
        "Content-Type": "application/json",
        sign: sign,
        key: key,
      },
    }
  );
  return result.data;
};

exports.coinspotPublic = async (path) => {
  let result = await axios(`https://www.coinspot.com.au/pubapi/v2${path}`);
  return result.data;
};
