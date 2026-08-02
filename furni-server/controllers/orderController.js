const Order = require("../models/Order");

const { success, error } = require("../utils/responsehandler");

const createOrder = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    items,
    total,
  } = req.body;

  try {
    const order = await Order.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      items,
      total,
    });
    return success(res, "Order placed successfully", order, 201);
  } catch (err) {
    return error(res, error.message, null, 400);
  }
};

module.exports = {createOrder,};
