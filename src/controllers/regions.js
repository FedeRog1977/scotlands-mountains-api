const express = require('express');
const router = express.Router();
const regions = require('../data/regions.json');
// const Region = require('../models/region.js');
const {
  getRegion,
  getSubRegion,
  getSubSubRegion,
  getRegionNames,
  getSubRegionNames,
  getSubSubRegionNames,
} = require('../models/regions.js');

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Get all region data.
 *     description: Get all region data.
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: Regions not found
 *       '500':
 *         description: Internal server error
 */
router.get('/data', async (req, res) => {
  try {
    // TODO: implement with MongoDB database
    // const regions = await Account.find();
    res.json(regions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /data/{region}:
 *   get:
 *     summary: Get region data by region.
 *     description: Get region data by region.
 *     parameters:
 *       - in: path
 *         name: region
 *         schema:
 *           type: string
 *         required: true
 *         description: Region name.
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: Region not found
 *       '500':
 *         description: Internal server error
 */
router.get('/data/:region', getRegion, (req, res) => {
  res.json(res.region);
});

router.get('/data/:region/:subRegion', getSubRegion, (req, res) => {
  res.json(res.subRegion);
});

router.get('/data/:region/:subRegion/:subSubRegion', getSubSubRegion, (req, res) => {
  res.json(res.subSubRegion);
});

router.get('/names', getRegionNames, (req, res) => {
  res.json(res.regionNames);
});

router.get('/names/:region', getSubRegionNames, (req, res) => {
  res.json(res.regionNames);
});

router.get('/names/:region/:subRegion', getSubSubRegionNames, (req, res) => {
  res.json(res.regionNames);
});

module.exports = router;
