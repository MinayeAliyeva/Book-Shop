import React from "react";
import "./Admin.scss";
import { useState } from "react";
import axios from "axios";
import {  useDispatch } from "react-redux";
import { getData } from "../../store/slices/BookSlice";
const BASE_URL = "http://localhost:3000/books";
const initialState = {
  name: "",
  price: 0,
  image: "",
};
const Admin = () => {
  const dispatch=useDispatch();

  const [book, setBook] = useState(initialState);
  //converted base64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //destructing
  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setBook((prevs) => ({
        ...prevs,
        [name]: base64,
      }));
    } else {
      setBook((prevs) => ({
        ...prevs,
        [name]: value,
      }));
    }
  };
  const resetImageInput = () => {
    // Resim input'unu sıfırlamak için formun reset methodunu kullan
    document.getElementById("imageInput").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(BASE_URL, book)
      .then(() => {
        setBook(initialState);
        resetImageInput(); // Resim input'unu sıfırla
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
      dispatch(getData(book))
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <label>Name</label>
        <input
          value={book.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <label>Price</label>
        <input
          value={book.price}
          name="price"
          onChange={(e) => handleChange(e)}
          type="number"
        />
        <input
          id="imageInput"
          name="image"
          onChange={(e) => handleChange(e)}
          type="file"
        />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default Admin;
