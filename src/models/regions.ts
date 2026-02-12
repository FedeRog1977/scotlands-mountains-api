/* eslint-disable @typescript-eslint/require-await */

import express from 'express';
import regions from '../libs/data/regions.json';

/**
 * `express` is a CommonJS module which only
 * supports default imports in ESModules
 */
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

export const getData = async (
  _request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    response.json(regions);
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};

export const getRegionData = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === request.params.region,
    );

    if (region === undefined) {
      return response.status(404).json({ message: 'Cannot find region' });
    }

    // @ts-expect-error: This is fine
    response.region = region;
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};

export const getSubRegionData = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === request.params.region,
    );

    if (region === undefined) {
      return response.status(404).json({ message: 'Cannot find region' });
    }

    const subRegion = region.subRegions.find(
      (sr) => sr.name.replace(/\s+/g, '-').toLowerCase() === request.params.subRegion,
    );

    if (subRegion === undefined) {
      return response.status(404).json({ message: 'Cannot find sub-region' });
    }

    // @ts-expect-error: This is fine
    response.subRegion = subRegion;
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};

export const getSubSubRegionData = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === request.params.region,
    );

    if (region === undefined) {
      return response.status(404).json({ message: 'Cannot find region' });
    }

    const subRegion = region.subRegions.find(
      (sr) => sr.name.replace(/\s+/g, '-').toLowerCase() === request.params.subRegion,
    );

    if (subRegion === undefined) {
      return response.status(404).json({ message: 'Cannot sub-region region' });
    }

    const subSubRegion = subRegion.subSubRegions.find(
      (ssr) => ssr.name.replace(/\s+/g, '-').toLowerCase() === request.params.subSubRegion,
    );

    if (subSubRegion === undefined) {
      return response.status(404).json({ message: 'Cannot sub-sub-region' });
    }

    // @ts-expect-error: This is fine
    response.subSubRegion = subSubRegion;
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};

export const getRegionNames = async (
  _request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    const regionNames = regions.map((r) => r.name);

    // @ts-expect-error: This is fine
    response.regionNames = regionNames;
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};

export const getSubRegionNames = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === request.params.region,
    );

    if (region === undefined) {
      return response.status(404).json({ message: 'Cannot find region' });
    }

    const regionNames = region.subRegions.map((sr) => sr.name);

    // @ts-expect-error: This is fine
    response.regionNames = regionNames;
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};

export const getSubSubRegionNames = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    const region = regions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === request.params.region,
    );

    if (region === undefined) {
      return response.status(404).json({ message: 'Cannot find region' });
    }

    const subRegion = region.subRegions.find(
      (r) => r.name.replace(/\s+/g, '-').toLowerCase() === request.params.subRegion,
    );

    if (subRegion === undefined) {
      return response.status(404).json({ message: 'Cannot sub-sub-region' });
    }

    const regionNames = subRegion.subSubRegions.map((ssr) => ssr.name);

    // @ts-expect-error: This is fine
    response.regionNames = regionNames;
    next();
  } catch (error: unknown) {
    return response.status(500).json({ error });
  }
};
