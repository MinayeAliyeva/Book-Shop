// import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Books.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../store/slices/BookSlice";
// const BASE_URL = "http://localhost:3000/books";
const Books = () => {
  const dispatch = useDispatch();
  const data=useSelector((state)=>{
    return state.books.data
    })
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(BASE_URL)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="books">
      {data.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <h2>{book.name}</h2>
          <p>{book.price}</p>
          <button onClick={() => dispatch(deleteData(book.id))}>
            Delete
          </button>{" "}
          <br /> <br />
          <button>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Books;
