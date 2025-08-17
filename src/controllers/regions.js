const express = require('express');
const router = express.Router();
const regions = require('../data/regions.json');
// const Region = require('../models/region.js');

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

async function getRegion(req, res, next) {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === req.params.region,
    );

    if (region == null) {
      return res.status(404).json({ message: 'Cannot find region' });
    }

    res.region = region;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getSubRegion(req, res, next) {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === req.params.region,
    );
    const subRegion = region.subRegions.find(
      (sr) => sr.name.replace(/\s+/g, '-').toLowerCase() === req.params.subRegion,
    );

    if (region == null || subRegion === null) {
      return res.status(404).json({ message: 'Cannot find region' });
    }

    res.subRegion = subRegion;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getSubSubRegion(req, res, next) {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === req.params.region,
    );
    const subRegion = region.subRegions.find(
      (sr) => sr.name.replace(/\s+/g, '-').toLowerCase() === req.params.subRegion,
    );
    const subSubRegion = subRegion.subSubRegions.find(
      (ssr) => ssr.name.replace(/\s+/g, '-').toLowerCase() === req.params.subSubRegion,
    );

    if (region == null || subRegion === null || subSubRegion === null) {
      return res.status(404).json({ message: 'Cannot find region' });
    }

    res.subSubRegion = subSubRegion;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getRegionNames(req, res, next) {
  try {
    const regionNames = regions.map((r) => r.name);

    if (regionNames == null) {
      return res.status(404).json({ message: 'Cannot find region names' });
    }

    res.regionNames = regionNames;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getSubRegionNames(req, res, next) {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === req.params.region,
    );
    const regionNames = region.subRegions.map((sr) => sr.name);

    if (regionNames == null) {
      return res.status(404).json({ message: 'Cannot find region names' });
    }

    res.regionNames = regionNames;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getSubSubRegionNames(req, res, next) {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === req.params.region,
    );
    const subRegion = region.subRegions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === req.params.subRegion,
    );
    const regionNames = subRegion.subSubRegions.map((ssr) => ssr.name);

    if (regionNames == null) {
      return res.status(404).json({ message: 'Cannot find region names' });
    }

    res.regionNames = regionNames;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
