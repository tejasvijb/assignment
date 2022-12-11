import CompareCard from "./CompareCard";
import { Button } from "antd";
import Mymodal from "./Mymodal"

export const getSelectedData = (data,selected) => {
    const selectedIds = Object.keys(selected);
    return selectedIds.map((id) => {
      let product = data.find((val) => val.id == id);
      return product;
    });
  };
export default function CompareProducts({ data, selected, setSelected }) {

    const selectedData = getSelectedData(data,selected)

  return <div><CompareCard data={selectedData} selected={selected} setSelected={setSelected}/> <Mymodal data={data} selected={selected} setSelected={setSelected}/> </div>;
}
