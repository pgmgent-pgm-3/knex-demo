/**
 * Interest API Controller
 */

/**
 * Get a single interest
 */
export const show = async (req, res, next) => {
  res.send("Show one interest");
};

/**
 * Get all interests
 */
export const index = async (req, res, next) => {
  res.send("Show all interests");
};

/**
 * Create a new interest
 */
export const store = async (req, res, next) => {
  res.send("Create a new interest");
};

/**
 * Update an interest
 */
export const update = async (req, res, next) => {
  res.send("Update an interest");
};

/**
 * Delete an interest
 */
export const destroy = async (req, res, next) => {
  res.send("Delete an interest");
};
