
import { render } from "@testing-library/react";
import { Table,Tag } from "antd";

export default function Products({ data,selected }) {
    
    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            render: (images) => {
                return <img className="thumbnail" src={images[images.length-1]} alt="productimage" height="50px"></img>
            }
        },
        {
          title: "Name",
          dataIndex: "title",
         
        },
        {
          title: "Price",
          dataIndex: "price",
          render: (text,record) =>{
            return selected[record.key] ? <Tag color="geekblue">{text}</Tag> : <p>{text}</p>

          },
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: "Discount",
          dataIndex: "discountPercentage",
          render: (text,record) =>{
            return selected[record.key] ? <Tag color="geekblue">{text}</Tag> : <p>{text}</p>

          },
          sorter: (a, b) => a.discountPercentage - b.discountPercentage,
        },
        {
          title: "Rating",
          dataIndex: "rating",
          render: (text,record) =>{
            return selected[record.key] ? <Tag color="geekblue">{text}</Tag> : <p>{text}</p>

          },
          sorter: (a, b) => a.rating - b.rating,
        },
        {
          title: "Stock",
          dataIndex: "stock",
          render: (text,record) =>{
            return selected[record.key] ? <Tag color="geekblue">{text}</Tag> : <p>{text}</p>

          },
          sorter: (a, b) => a.stock - b.stock,
        },
        {
          title: "Brand",
          dataIndex: "brand",
        },
        {
            title: "Category",
            dataIndex: "category"
        },
        {
          title: "Compare products",
          dataIndex: "compare",
        },
      ];
  return (
    <div className="products">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
