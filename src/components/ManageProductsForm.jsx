import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import { useLocation } from "react-router-dom";

export default function ManageProductsForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productIdFromUrl = params.get("id");

  const [action, setAction] = useState("create");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    tags: "",
    sku: "",
    weight: "",
    dimensions: {
      width: "",
      height: "",
      depth: "",
    },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: "",
    meta: {
      barcode: "",
      qrCode: "",
    },
    images: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (productIdFromUrl) {
      setAction("update");
      const product = data.find(
        (item) => item.id.toString() === productIdFromUrl
      );
      if (product) {
        setSelectedProductId(product.id.toString());
        setFormData({
          ...product,
          tags: product.tags.join(", "),
          images: product.images.join(", "),
        });
      }
    }
  }, [productIdFromUrl]);

  const handleActionChange = (e) => {
    const newAction = e.target.value;
    setAction(newAction);
    setSelectedProductId("");
    setFormData({
      title: "",
      description: "",
      category: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      tags: "",
      sku: "",
      weight: "",
      dimensions: {
        width: "",
        height: "",
        depth: "",
      },
      warrantyInformation: "",
      shippingInformation: "",
      availabilityStatus: "",
      returnPolicy: "",
      minimumOrderQuantity: "",
      meta: {
        barcode: "",
        qrCode: "",
      },
      images: "",
      thumbnail: "",
    });
  };

  const handleProductSelect = (e) => {
    const id = e.target.value;
    setSelectedProductId(id);
    const product = data.find((item) => item.id.toString() === id);
    if (product) {
      setFormData({
        ...product,
        tags: product.tags.join(", "),
        images: product.images.join(", "),
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.dimensions) {
      setFormData({
        ...formData,
        dimensions: {
          ...formData.dimensions,
          [name]: value,
        },
      });
    } else if (name.startsWith("meta.")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        meta: {
          ...formData.meta,
          [key]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const preparedData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      images: formData.images.split(",").map((img) => img.trim()),
    };
    console.log("Submitted Product:", preparedData);
    alert(
      "Product " +
        (action === "create" ? "created" : "updated") +
        " successfully!"
    );
  };

  const fields = [
    { name: "title", label: "Title" },
    { name: "description", label: "Description" },
    { name: "category", label: "Category" },
    { name: "price", label: "Price" },
    { name: "discountPercentage", label: "Discount (%)" },
    { name: "rating", label: "Rating" },
    { name: "stock", label: "Stock" },
    { name: "tags", label: "Tags (comma separated)" },
    { name: "sku", label: "SKU" },
    { name: "weight", label: "Weight" },
    { name: "warrantyInformation", label: "Warranty Info" },
    { name: "shippingInformation", label: "Shipping Info" },
    { name: "availabilityStatus", label: "Availability Status" },
    { name: "returnPolicy", label: "Return Policy" },
    { name: "minimumOrderQuantity", label: "Min Order Qty" },
    { name: "meta.barcode", label: "Barcode" },
    { name: "meta.qrCode", label: "QR Code" },
    { name: "images", label: "Images (comma separated URLs)" },
    { name: "thumbnail", label: "Thumbnail URL" },
  ];

  return (
    <div className="manage-products">
      <h2>Manage Products</h2>
      <form className="manage-form" onSubmit={handleSubmit}>
        <label>
          Action:
          <select value={action} onChange={handleActionChange}>
            <option value="create">Create</option>
            <option value="update">Update</option>
          </select>
        </label>

        {action === "update" && (
          <label>
            Select Product:
            <input
              type="text"
              placeholder="Search by ID"
              list="products"
              value={selectedProductId}
              onChange={handleProductSelect}
            />
            <datalist id="products">
              {data.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </datalist>
          </label>
        )}

        {fields.map(({ name, label }) => (
          <label key={name}>
            {label}:
            <input
              type="text"
              name={name}
              value={
                name.includes(".")
                  ? formData[name.split(".")[0]][name.split(".")[1]]
                  : formData[name] || ""
              }
              onChange={handleChange}
            />
          </label>
        ))}

        <fieldset>
          <legend>Dimensions</legend>
          <label>
            Width:
            <input
              name="width"
              value={formData.dimensions.width}
              onChange={handleChange}
            />
          </label>
          <label>
            Height:
            <input
              name="height"
              value={formData.dimensions.height}
              onChange={handleChange}
            />
          </label>
          <label>
            Depth:
            <input
              name="depth"
              value={formData.dimensions.depth}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
