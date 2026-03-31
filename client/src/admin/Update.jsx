import React from "react";
import { useState } from "react";
import api from "../services/api";

const Update = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("category", category);

    if (image) {
      data.append("image", image);
    }

    try {
      const res = await api.put("/product/update/69cbbafb226a2a17bd58e597", data);

      alert("Product updated successfully.!!");
      console.log(res.data);
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
    } catch (error) {
      console.error("Error Details:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Update Product</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="file"
          name="image"
          placeholder="image"
          onChange={handleImage}
        />
        <button>Update Product</button>
      </form>
    </div>
  );
};

export default Update;
