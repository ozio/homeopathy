# homeopathy.js

The power of Homeopathy is now on your website or nodejs backend!

Protect your code and user data with the power of `water()` memory!

## Usage

```bash
npm install --save homeopathy
```

```js
const homeopathy = require('homeopathy');
const remedy = homeopathy.createARemedy(
  eval, // some poison
  30 // grade of dilution
);
remedy();
```
