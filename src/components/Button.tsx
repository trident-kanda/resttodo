import { useContext } from "react";
import { listContext, setListContext } from "../context/contexts";
import { createid } from "../util/util";
type props = {
  inputValue: string;
};
const Button = ({ inputValue }: props) => {
  const setList = useContext(setListContext);
  const list = useContext(listContext);
  console.log(list);
  return (
    <button
      className=" w-1/4 bg-gray-200 rounded-md ml-2 text-black hover:text-blue-500 hover:bg-blue-100"
      onClick={() => {
        const id = createid();
        console.log(id);
        setList([
          ...list,
          {
            id: id,
            name: inputValue,
          },
        ]);
      }}
    >
      登録
    </button>
  );
};

export default Button;
