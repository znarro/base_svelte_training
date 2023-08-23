import Example from "../models/example.js";

const getAll = async (_req, res) => {
  try {
    const example = new Example();
    const result = await example.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

export default { getAll };
