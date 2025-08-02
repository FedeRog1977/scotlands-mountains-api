let regions = require("../data/regions.json");

function findAllNames(rName, srName) {
  return new Promise((resolve, reject) => {
    if (srName) {
      const region = regions.find((r) => r.name.toLowerCase() === rName);
      const subRegion = region.subRegions.find(
        (sr) => sr.name.toLowerCase() === srName
      );
      const regionNames = subRegion.subSubRegions.map((ssr) => ssr.name);

      resolve(regionNames);
    }

    if (rName) {
      const region = regions.find((r) => r.name.toLowerCase() === rName);
      const regionNames = region.subRegions.map((sr) => sr.name);

      resolve(regionNames);
    }

    const regionNames = regions.map((r) => r.name);

    resolve(regionNames);
  });
}

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

module.exports = {
  findAllNames,
  findAll,
  findByRegionName
};
