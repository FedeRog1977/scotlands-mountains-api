const http = require('http');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController.js');
const {
  getRegions,
  getRegionNames,
  getSubRegionNames,
  getSubSubRegionNames,
  getRegion,
  getSubRegion,
  getSubSubRegion,
} = require('./controllers/regionController.js');

const server = http.createServer((req, res) => {
  const [id1, id2, id3] = [req.url.split('/')[3], req.url.split('/')[4], req.url.split('/')[5]];

  // --- Regions ---
  if (req.url === ZERO_SLUG_NAMES && REQ_GET) {
    getRegionNames(req, res);
  }
  //
  else if (req.url.match(ONE_SLUG_REGEX_NAMES) && REQ_GET) {
    getSubRegionNames(req, res, id1);
  }
  //
  else if (req.url.match(TWO_SLUG_REGEX_NAMES) && REQ_GET) {
    getSubSubRegionNames(req, res, id1, id2);
  }
  //
  else if (req.url === ZERO_SLUG && REQ_GET) {
    getRegions(req, res);
  }
  //
  else if (!id2 && !id3 && req.url.match(ONE_SLUG_REGEX) && REQ_GET) {
    getRegion(req, res, id1);
  }
  //
  else if (id2 != undefined && !id3 && req.url.match(TWO_SLUG_REGEX) && REQ_GET) {
    getSubRegion(req, res, id1, id2);
  }
  //
  else if (req.url.match(THREE_SLUG_REGEX) && id2 != undefined && id3 != undefined && REQ_GET) {
    getSubSubRegion(req, res, id1, id2, id3);
  }

  // --- Products (test) ---
  else if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
    getProduct(req, res, id1);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
    updateProduct(req, res, id1);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
    deleteProduct(req, res, id1);
  }

  // --- Else ---
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found',
      }),
    );
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
