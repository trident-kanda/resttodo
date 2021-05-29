import { useRef, useState } from "react";
import TrashIcon from "./icon/TrashIcon";

type props = {
  task: string;
  id: number;
};
const Task = ({ task, id }: props) => {
  const inputRef = useRef<any>(null);
  const [state, changeState] = useState(false);
  return (
    <div className="px-6 py-4 rounded-md bg-blue-50 shadow mb-4 flex items-center">
      <input
        type="checkbox"
        className=" w-1/12"
        ref={inputRef}
        onChange={() => {
          changeState(inputRef.current.checked);
        }}
      />
      {!state && <h3 className="text-lg text-gray-500 w-10/12 ">{task}</h3>}
      {state && (
        <h3 className="text-lg text-gray-500 w-10/12 line-through">{task}</h3>
      )}
      <TrashIcon width={25} height={25} color={"rgb(107, 114, 128)"} id={id} />
    </div>
  );
};

export default Task;
