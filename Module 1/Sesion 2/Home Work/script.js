const axios = require('axios');

function Alert() {
  alert('Something Wrong');
}

axios
  .get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
  .then((response) => console.log(response.data))
  .catch((err) => Alert());
