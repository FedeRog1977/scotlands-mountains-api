const regions = require('../data/regions.json');

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

module.exports = {
  getRegion,
  getSubRegion,
  getSubSubRegion,
  getRegionNames,
  getSubRegionNames,
  getSubSubRegionNames,
};
