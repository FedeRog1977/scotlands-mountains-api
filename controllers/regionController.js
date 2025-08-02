const Model = require("../models/regionModel");

// @desc  Gets All Region Names
// @route GET /api/regions/names
async function getRegionNames(req, res) {
  try {
    const regions = await Model.findAllNames();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(regions));
  } catch (error) {
    console.log(error);
  }
}

// @desc  Gets All Sub-Region Names
// @route GET /api/regions/:id/names
async function getSubRegionNames(req, res, rName) {
  try {
    const regions = await Model.findAllNames(rName);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(regions));
  } catch (error) {
    console.log(error);
  }
}

// @desc  Gets All Sub-Sub-Region Names
// @route GET /api/regions/.../names
async function getSubSubRegionNames(req, res, rName, srName) {
  try {
    const regions = await Model.findAllNames(rName, srName);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(regions));
  } catch (error) {
    console.log(error);
  }
}

// @desc  Gets All Regions
// @route GET /api/regions
async function getRegions(req, res) {
  try {
    const regions = await Model.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(regions));
  } catch (error) {
    console.log(error);
  }
}
// // @desc  Gets Single Region
// // @route GET /api/region/:id1
async function getRegion(req, res, rName) {
  try {
    const region = await Model.findByRegionName(rName);

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

// // @desc  Gets Single Sub-Region
// // @route GET /api/region/:id1/:id2
async function getSubRegion(req, res, rName, srName) {
  try {
    const region = await Model.findByRegionName(rName, srName);

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

// // @desc  Gets Single Sub-Sub-Region
// // @route GET /api/region/:id1/:id2/:id3
async function getSubSubRegion(req, res, rName, srName, ssrName) {
  try {
    const region = await Model.findByRegionName(rName, srName, ssrName);

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

module.exports = {
  getRegionNames,
  getSubRegionNames,
  getSubSubRegionNames,
  getRegions,
  getRegion,
  getSubRegion,
  getSubSubRegion
};
