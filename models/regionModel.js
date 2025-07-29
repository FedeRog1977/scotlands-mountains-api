let regions = require("../data/regions");
// const { v4: uuidv4 } = require("uuid");
// const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(regions);
  });
}

function findByRegionName(regionName) {
  return new Promise((resolve, reject) => {
    const region = regions.find((r) => r.name === regionName);

    resolve(region);
  });
}

function findBySubRegionName(regionName, subRegionName) {
  return new Promise((resolve, reject) => {
    const region = regions.find((r) => r.name === regionName);
    const subRegion = region.subRegions.find((sr) => sr.name === subRegionName);

    resolve(subRegion);
  });
}

function findBySubSubRegionName(regionName, subRegionName, subSubRegionName) {
  return new Promise((resolve, reject) => {
    const region = regions.find((r) => r.name === regionName);
    const subRegion = region.subRegions.find((sr) => sr.name === subRegionName);
    const subSubRegion = subRegion.subSubRegions.find(
      (ssr) => ssr.name === subSubRegionName
    );

    console.log(
      "REGION::",
      region,
      "SUB_REGION::",
      subRegion,
      "SUB_SUB_REGION::",
      subSubRegion
    );

    resolve(subSubRegion);
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
  findByRegionName,
  findBySubRegionName,
  findBySubSubRegionName
  // create,
  // update,
  // remove
};
