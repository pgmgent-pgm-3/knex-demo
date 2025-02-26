/**
 * Interest API Controller
 */

import Interest from "../../models/Interest.js";

/**
 * Get a single interest
 */
export const show = async (req, res, next) => {
  const id = req.params.id;
  const interest = await Interest.query().findById(id);

  if (!interest) {
    return res.status(404).json({ message: "Interest not found." });
  }

  return res.json(interest);
};

/**
 * Get all interests
 */
export const index = async (req, res, next) => {
  const interests = await Interest.query();
  return res.json(interests);
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
