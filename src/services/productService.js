const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

const createProduct = async (reqData) => {
  try {
    let topLevel = await Category.findOne({ name: reqData.topLavelCategory });
    if (!topLevel) {
      topLevel = new Category({
        name: reqData.topLavelCategory,
        level: 1,
      });
      topLevel.save();
    }

    let secondLevel = await Category.findOne({
      name: reqData.secondLavelCategory,
      parentCategory: topLevel._id,
    });
    if (!secondLevel) {
      secondLevel = new Category({
        name: reqData.secondLavelCategory,
        parentCategory: topLevel._id,
        level: 2,
      });
      secondLevel.save();
    }

    let thirdLevel = await Category.findOne({
      name: reqData.thirdLavelCategory,
      parentCategory: secondLevel._id,
    });
    if (!thirdLevel) {
      thirdLevel = new Category({
        name: reqData.thirdLavelCategory,
        parentCategory: secondLevel._id,
        level: 3,
      });
      thirdLevel.save();
    }

    const product = new Product({
      title: reqData.title,
      color: reqData.color,
      description: reqData.description,
      discountedPrice: reqData.discountedPrice,
      discountPresent: reqData.discountPersent,
      imageUrl: reqData.imageUrl,
      brand: reqData.brand,
      price: reqData.price,
      sizes: reqData.size,
      quantity: reqData.quantity,
      category: thirdLevel._id,
    });
    return await product.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteProduct = async (productId) => {
  try {
    const product = await findProductById(productId);
    if (product) {
      await Product.findByIdAndDelete(product._id);
      return;
    }
    return "Product not found.";
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProduct = async (productId, reqData) => {
  try {
    const product = await findProductById(productId);
    if (product) {
      await Product.findByIdAndUpdate(product._id, reqData);
      return;
    }
    return "Product not found.";
  } catch (error) {
    throw new Error(error.message);
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findById(id).populate("category").exec();
    if (!product) {
      throw new Error("Product not found.");
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllProducts = async (reqQuery) => {
  try {
    let {
      category,
      color,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      sort,
      stock,
      pageNumber,
      pageSize,
    } = reqQuery;

    pageSize = pageSize || 10;

    let query = Product.find().populate("category");

    if (category) {
      const existCategory = await Category.findOne({ name: category });
      if (existCategory) {
        query = query.where("category").equals(existCategory._id);
      } else {
        return { content: [], currentPage: 1, totalPages: 0 };
      }
    }

    if (color) {
      const colorSet = new Set(
        color.split(",").map((color) => color.trim().toLowerCase())
      );
      const colorRegex =
        colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
      query = query.where("color").regex(colorRegex);
    }

    if (sizes) {
      const sizesSet = new Set(sizes);
      query = query.where("sizes.name").in([...sizesSet]);
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }

    if (minDiscount !== undefined && minDiscount !== null) {
      query = query.where("discountPresent").gte(minDiscount);
    }

    if (stock) {
      if (stock === "in_stock") {
        query = query.where("quantity").gt(0);
      } else if (stock === "out_of_stock") {
        query = query.where("quantity").eq(0);
      }
    }

    if (sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({ discountedPrice: sortDirection });
    }

    const totalProducts = await Product.countDocuments(query);
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);
    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);
    return {
      content: products,
      currentPage: pageNumber,
      totalPages: totalPages,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const createMultipleProduct = async (products) => {
  try {
    for (let product of products) {
      await createProduct(product);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
