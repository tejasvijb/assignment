
import { Table } from "antd";

export default function Products({ data,selected }) {
    
    const columns = [
        {
          title: "Name",
          dataIndex: "title",
         
        },
        {
          title: "Price",
          dataIndex: "price",
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: "Discount",
          dataIndex: "discountPercentage",
          sorter: (a, b) => a.discountPercentage - b.discountPercentage,
        },
        {
          title: "Rating",
          dataIndex: "rating",
          sorter: (a, b) => a.rating - b.rating,
        },
        {
          title: "Stock",
          dataIndex: "stock",
          sorter: (a, b) => a.stock - b.stock,
        },
        {
          title: "Brand",
          dataIndex: "brand",
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
