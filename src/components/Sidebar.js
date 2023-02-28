import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/products/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const initialProduct = {
    title: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  };
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState(initialProduct);

  const newId = (products) => {
    const max = products.reduce((a, b) => Math.max(b.id, a), -1);
    return max + 1;
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, id: newId(products) }));
    setProduct(initialProduct);
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleProductSubmit}
      >
        {/* product name */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            value={product.title}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </div>
        {/* product category */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            value={product.category}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, category: e.target.value }))
            }
            required
          />
        </div>
        {/* product image url */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            value={product.image}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, image: e.target.value }))
            }
            required
          />
        </div>
        {/* price & quantity container */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* price */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              value={product.price}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, price: e.target.value }))
              }
              required
            />
          </div>
          {/* quantity */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              value={product.quantity}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, quantity: e.target.value }))
              }
              required
            />
          </div>
        </div>
        {/* submit button */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
