# coinspot-api-update 1.0.2

SDK for coinspot api which handle the authentication headers

## Installation

```bash
npm i coinspot-api-update
```

## Usage
coinspot endpoint: https://www.coinspot.com.au/v2/api

```javascript
const { coinspotReadOnly, coinspotPublic } = require("coinspot-api-update");

const key = "";
const secret = "";

//public api
let result = await coinspotPublic("/latest");
console.log(result);

//read only api

//withou option
let result = await coinspotReadOnly("/my/orders/completed",{}, key, secret);
console.log(result);

//with option
let result = await coinspotReadOnly("/my/orders/completed",{cointype: "BTC"}, key, secret);
console.log(result);
```

