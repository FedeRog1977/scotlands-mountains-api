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
  getRegion
  // createRegion,
  // updateRegion,
  // deleteRegion
} = require("./controllers/regionController");

const server = http.createServer((req, res) => {
  const id = req.url.split("/")[3];
  const id2 = req.url.split("/")[4];
  const id3 = req.url.split("/")[5];

  // const { idOne, idTwo, idThree } = [
  //   req.url.split("/")[3],
  //   req.url.split("/")[4],
  //   req.url.split("/")[5]
  // ];

  // --- Regions ---
  if (req.url === "/api/regions" && req.method === "GET") {
    getRegions(req, res);
  } else if (
    id2 === undefined &&
    id3 === undefined &&
    req.url.match(/\/api\/regions\/\w+/) &&
    req.method === "GET"
  ) {
    getRegion(req, res, id, undefined, undefined, "REGION");
  } else if (
    id2 != undefined &&
    id3 === undefined &&
    req.url.match(/\/api\/regions\/\w+/) &&
    req.method === "GET"
  ) {
    getRegion(req, res, id, id2, undefined, "SUB_REGION");
  } else if (
    req.url.match(/\/api\/regions\/\w+/) &&
    id2 != undefined &&
    id3 != undefined &&
    req.method === "GET"
  ) {
    getRegion(req, res, id, id2, id3, "SUB_SUB_REGION");
  }

  // --- Products (test) ---
  else if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "GET") {
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "PUT") {
    updateProduct(req, res, id);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === "DELETE") {
    deleteProduct(req, res, id);
  }

  // --- else ---
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
