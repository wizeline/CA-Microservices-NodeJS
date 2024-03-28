export const DatabaseConnection = (req, res, next) => {
  req.db = { client: jest.fn(), release: jest.fn() };
  next();
};
