let regions = require("../data/regions");
// const { v4: uuidv4 } = require("uuid");
// const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(regions);
  });
}

function findByRegionName(rName, srName, ssrName) {
  return new Promise((resolve, reject) => {
    const region = regions.find((r) => r.name.toLowerCase() === rName);

    if (ssrName) {
      const subRegion = region.subRegions.find(
        (sr) => sr.name.toLowerCase() === srName
      );
      const subSubRegion = subRegion.subSubRegions.find(
        (ssr) => ssr.name.toLowerCase() === ssrName
      );

      resolve(subSubRegion);
    }

    if (srName) {
      const subRegion = region.subRegions.find(
        (sr) => sr.name.toLowerCase() === srName
      );

      resolve(subRegion);
    }

    resolve(region);
  });
}

// function create(product) {
//   return new Promise((resolve, reject) => {
//     const newProduct = { id: uuidv4(), ...product };
//     regions.push(newProduct);
//     if (process.env.NODE_ENV !== "test") {
//       writeDataToFile("./data/regions.json", regions);
//     }

//     resolve(newProduct);
//   });
// }

// function update(id, product) {
//   return new Promise((resolve, reject) => {
//     const index = regions.findIndex((p) => p.id === id);
//     regions[index] = { id, ...product };
//     if (process.env.NODE_ENV !== "test") {
//       writeDataToFile("./data/regions.json", regions);
//     }

//     resolve(regions[index]);
//   });
// }

// function remove(id) {
//   return new Promise((resolve, reject) => {
//     regions = regions.filter((p) => p.id !== id);
//     if (process.env.NODE_ENV !== "test") {
//       writeDataToFile("./data/regions.json", regions);
//     }

//     resolve();
//   });
// }

module.exports = {
  findAll,
  findByRegionName
  // create,
  // update,
  // remove
};
