import { Button } from "antd";
import React from "react";
import { Card, Col, Row } from "antd";
const CompareCard = ({ data, selected, setSelected }) => {
  const handleClick = (e) => {
    let selectedId = e.target.id;
    if (!selectedId) {
      selectedId = e.target.parentElement.id;
    }
    const selectedCache = { ...selected };
    delete selectedCache[selectedId];
    setSelected(selectedCache);
  };

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={4}>
          <Card
            style={{
              height: 500,
              minWidth: 150
            }}
            title="*"
            bordered={false}
          >
            <div className="wrapper">
              <div className="cardContent first">Price</div>
              <div className="cardContent first">Discount</div>
              <div className="cardContent first">Rating</div>
              <div className="cardContent first">Stock</div>
              <div className="cardContent first">Description</div>
            </div>
          </Card>
        </Col>

        {data.map(
          ({
            id,
            title,
            price,
            discountPercentage,
            rating,
            stock,
            description,
          }) => (
            <Col key={id} span={5}>
              <Card
                style={{
                  height: 500,
                  minWidth: 150,
                }}
                title={title}
                bordered={false}
              >
                <div className="wrapper">
                  <div className="cardContent">${price}</div>
                  <div className="cardContent">{discountPercentage} %</div>
                  <div className="cardContent">{rating}</div>
                  <div className="cardContent">{stock}</div>
                  
                  <div className="cardContent">{description}</div>
                  <div className="cardContent removeProduct" id={id}>
                    <Button
                      id={id}
                      type="primary"
                      onClick={(e) => handleClick(e)}
                    >
                      Remove{" "}
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};
export default CompareCard;
