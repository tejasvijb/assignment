import React, { useState } from "react";
import { Button, Modal } from "antd";
import Products from "./Products";
import {error} from '../App'
const Mymodal = ({ data, selected, setSelected }) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [moda120pen, setModa120pen] = useState(false);

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
  return (
    <div className="productModal">
      <Button
        className="addProduct"
        type="primary"
        onClick={() => setModa120pen(true)}
      >
        Add products
      </Button>
      <Modal
        centered
        open={moda120pen}
        onOk={() => setModa120pen(false)}
        onCancel={() => setModa120pen(false)}
      >
        {
          <Products
          selected={selected}
            data={data.map((ele) => ({
              ...ele,
              key: ele.id,
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
      </Modal>
    </div>
  );
};
export default Mymodal;
