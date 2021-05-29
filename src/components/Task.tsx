import TrashIcon from "./icon/TrashIcon";

type props = {
  task: string;
  id: number;
};
const Task = ({ task, id }: props) => {
  return (
    <div className="px-6 py-4 rounded-md bg-blue-50 shadow mb-4 flex">
      <h3 className="text-lg text-gray-500 w-11/12">{task}</h3>
      <TrashIcon width={25} height={25} color={"rgb(107, 114, 128)"} id={id} />
    </div>
  );
};

export default Task;
