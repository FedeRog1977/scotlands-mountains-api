const http = require("http");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("./controllers/productController");
const {
  getRegions,
  getRegion,
  getSubRegion,
  getSubSubRegion
  // createRegion,
  // updateRegion,
  // deleteRegion
} = require("./controllers/regionController");

const server = http.createServer((req, res) => {
  const [id1, id2, id3] = [
    req.url.split("/")[3],
    req.url.split("/")[4],
    req.url.split("/")[5]
  ];

  // --- Regions ---
  if (req.url === "/api/regions" && req.method === "GET") {
    getRegions(req, res);
  } else if (
    id2 === undefined &&
    id3 === undefined &&
    req.url.match(/\/api\/regions\/\w+/) &&
    req.method === "GET"
  ) {
    getRegion(req, res, id1);
  } else if (
    id2 != undefined &&
    id3 === undefined &&
    req.url.match(/\/api\/regions\/\w+/) &&
    req.method === "GET"
  ) {
    getSubRegion(req, res, id1, id2);
  } else if (
    req.url.match(/\/api\/regions\/\w+/) &&
    id2 != undefined &&
    id3 != undefined &&
    req.method === "GET"
  ) {
    getSubSubRegion(req, res, id1, id2, id3);
  }

  // --- Products (test) ---
  else if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "GET") {
    getProduct(req, res, id1);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "PUT") {
    updateProduct(req, res, id1);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "DELETE") {
    deleteProduct(req, res, id1);
  }

  // --- Else ---
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Route Not Found"
      })
    );
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
