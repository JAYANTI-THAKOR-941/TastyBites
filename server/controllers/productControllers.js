import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    const image = req.file ? req.file.path : null;

    const newProduct = await Product.create({
      title,
      description,
      price,
      category,
      image,
    });

    res
      .status(201)
      .json({ message: "Product Created successfully!!", newProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create product.", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(401).json({ message: "Product Not Found.!!" });
    }

    await Product.findByIdAndUpdate(id, req.body,{ new: true });
    res.status(201).json({ message: "Product Updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to update product.", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(401).json({ message: "Product Not Found.!!" });
    }

    await Product.findByIdAndDelete(id);
    res.status(201).json({ message: "Product Deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete product.", error: error.message });
  }
};

export const getAllProduct = async(req,res)=>{
    try{
        const allProducts = await Product.find();
        res.status(200).json(allProducts);
    }
    catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch products.", error: error.message });
  }
}

export const getProductById = async(req,res)=>{
  try{
      const {id} = req.params;
      const product = await Product.findById(id);

      if (!product) {
          return res.status(401).json({ message: "Product Not Found.!!" });
      }
      res.status(201).json(product);
  }
   catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch product.", error: error.message });
  }
}