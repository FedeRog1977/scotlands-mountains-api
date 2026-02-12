import express from 'express';

/**
 * `express` is a CommonJS module which only
 * supports default imports in ESModules
 */
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

export const cors = (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | undefined => {
  response.header('Access-Control-Allow-Origin', request.header('origin'));
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  response.header('Access-Control-Allow-Credentials', 'true');

  if (request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

    return response.status(200).json({});
  }

  next();
};
