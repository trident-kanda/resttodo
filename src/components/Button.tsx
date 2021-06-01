import { useContext } from "react";
import { listContext, setListContext } from "../context/contexts";
import { createid } from "../util/util";
type props = {
  inputValue: string;
};
const Button = ({ inputValue }: props) => {
  const setList = useContext(setListContext);
  const list = useContext(listContext);

  return (
    <button
      className=" w-1/4 bg-gray-200 rounded-md ml-2 text-black hover:text-blue-500 hover:bg-blue-100 focus:outline-none"
      onClick={async () => {
        const id = createid();
        const res = await fetch("/api/setList", {
          method: "POST",
          body: JSON.stringify({ id: id, name: inputValue, state: false }),
        });
        if (setList) {
          setList([
            ...list,
            {
              id: id,
              name: inputValue,
              state: false,
            },
          ]);
        }
      }}
    >
      登録
    </button>
  );
};

export default Button;
