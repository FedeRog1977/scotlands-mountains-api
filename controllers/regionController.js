const Model = require("../models/regionModel");
const { getPostData } = require("../utils");

// @desc    Gets All Regions
// @route   GET /api/regions
async function getRegions(req, res) {
  try {
    const regions = await Model.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(regions));
  } catch (error) {
    console.log(error);
  }
}

// // @desc    Gets Single Region
// // @route   GET /api/region/:id
async function getRegion(req, res, regionName) {
  try {
    const region = await Model.findByRegionName(regionName);

    if (!region) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Region Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(region));
    }
  } catch (error) {
    console.log(error);
  }
}

// // @desc    Gets Single Sub-Region
// // @route   GET /api/region/:id/:id2
async function getSubRegion(req, res, regionName, subRegionName) {
  try {
    const region = await Model.findByRegionName(regionName, subRegionName);

    if (!region) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Region Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(region));
    }
  } catch (error) {
    console.log(error);
  }
}

// // @desc    Gets Single Sub-Sub-Region
// // @route   GET /api/region/:id/:id2/:id3
async function getSubSubRegion(
  req,
  res,
  regionName,
  subRegionName,
  subSubRegionName
) {
  try {
    const region = await Model.findByRegionName(
      regionName,
      subRegionName,
      subSubRegionName
    );

    if (!region) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Region Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(region));
    }
  } catch (error) {
    console.log(error);
  }
}

// // @desc    Create a Product
// // @route   POST /api/products
// async function createProduct(req, res) {
//   try {
//     const body = await getPostData(req);

//     const { name, description, price } = JSON.parse(body);

//     const product = {
//       name,
//       description,
//       price
//     };

//     const newProduct = await Product.create(product);

//     res.writeHead(201, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(newProduct));
//   } catch (error) {
//     console.log(error);
//   }
// }

// // @desc    Update a Product
// // @route   PUT /api/products/:id
// async function updateProduct(req, res, id) {
//   try {
//     const product = await Product.findById(id);

//     if (!product) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Product Not Found" }));
//     } else {
//       const body = await getPostData(req);

//       const { name, description, price } = JSON.parse(body);

//       const productData = {
//         name: name || product.name,
//         description: description || product.description,
//         price: price || product.price
//       };

//       const updProduct = await Product.update(id, productData);

//       res.writeHead(200, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify(updProduct));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // @desc    Delete Product
// // @route   DELETE /api/product/:id
// async function deleteProduct(req, res, id) {
//   try {
//     const product = await Product.findById(id);

//     if (!product) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Product Not Found" }));
//     } else {
//       await Product.remove(id);

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: `Product ${id} removed` }));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = {
  getRegions,
  getRegion,
  getSubRegion,
  getSubSubRegion
  //   createProduct,
  //   updateProduct,
  //   deleteProduct
};
