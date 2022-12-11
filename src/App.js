import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CompareProducts from "./components/CompareProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button,Modal, Table } from "antd";


export const error = () => {
  Modal.error({
    title: 'This is an error message',
    content: 'Cannot compare more than 4 products',
  });
};
function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});
  const [isError, setIserror] = useState(false)

  useEffect(() => {
    getData();
  }, []);

 

  const handleClick = (e) => {
    let length = Object.keys(selected).length;
    if (length >= 4) {
      error()
      return
    }
    let selectedId = e.target.id;
    if (!selectedId) {
      selectedId = e.target.parentElement.id;
    }
    setSelected((prev) => {
      return {
        ...prev,
        [selectedId]: true,
      };
    });
  };

  const getData = async () => {
    let resData = null;

    try {
      const res = await axios.get("https://dummyjson.com/products");
      if (res.status === 200) {
        resData = res.data.products;
      }
    } catch (err) {
      alert("Something went wrong please check the api");
    } finally {
      if (resData) {
        resData.forEach((ele) => {
          ele.key = ele.id;
        });
        setData(resData);
      }
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Products
                  selected={selected}
                  data={data.map((ele) => ({
                    ...ele,
                    compare: (
                      <Button
                        type="primary"
                        id={ele.id}
                        onClick={(e) => handleClick(e)}
                        disabled={selected[ele.id]}
                      >
                        Compare
                      </Button>
                    ),
                  }))}
                />
              }
            ></Route>
            <Route
              path="/compareproducts"
              element={<CompareProducts data={data} selected={selected} setSelected={setSelected}/>}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
