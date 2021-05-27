import TrashIcon from "./icon/TrashIcon";

type props = {
  task: string;
};
const Task = ({ task }: props) => {
  return (
    <div className="px-6 py-4 rounded-md bg-blue-50 shadow mb-4 flex">
      <h3 className="text-lg text-gray-500 w-11/12">{task}</h3>
      <TrashIcon width={25} height={25} color={"rgb(107, 114, 128)"} />
    </div>
  );
};

export default Task;
