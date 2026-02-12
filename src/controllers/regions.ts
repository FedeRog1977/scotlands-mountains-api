/* eslint-disable @typescript-eslint/require-await, new-cap */

import express from 'express';
import regions from '../libs/data/regions.json';
import {
  getData,
  getRegionData,
  getSubRegionData,
  getSubSubRegionData,
  getRegionNames,
  getSubRegionNames,
  getSubSubRegionNames,
} from '../models/regions';

/**
 * `express` is a CommonJS module which only
 * supports default imports in ESModules
 */
type Request = express.Request;
type Response = express.Response;

const router = express.Router();

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
router.get('/data', getData, async (_request, response): Promise<void> => {
  response.json(regions);
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
router.get(
  '/data/:region',
  getRegionData,
  async (_request: Request, response: Response): Promise<void> => {
    // @ts-expect-error: this append is fine
    response.json(response.region);
  },
);

router.get(
  '/data/:region/:subRegion',
  getSubRegionData,
  async (_request: Request, response: Response): Promise<void> => {
    // @ts-expect-error: this append is fine
    response.json(response.subRegion);
  },
);

router.get(
  '/data/:region/:subRegion/:subSubRegion',
  getSubSubRegionData,
  async (_request: Request, response: Response): Promise<void> => {
    // @ts-expect-error: this append is fine
    response.json(response.subSubRegion);
  },
);

router.get(
  '/names',
  getRegionNames,
  async (_request: Request, response: Response): Promise<void> => {
    // @ts-expect-error: this append is fine
    response.json(response.regionNames);
  },
);

router.get(
  '/names/:region',
  getSubRegionNames,
  async (_request: Request, response: Response): Promise<void> => {
    // @ts-expect-error: this append is fine
    response.json(response.regionNames);
  },
);

router.get(
  '/names/:region/:subRegion',
  getSubSubRegionNames,
  async (_request: Request, response: Response): Promise<void> => {
    // @ts-expect-error: this append is fine
    response.json(response.regionNames);
  },
);

export default router;
