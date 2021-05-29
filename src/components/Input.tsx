type props = {
  setInput: (value: string) => void;
};
const Input = ({ setInput }: props) => {
  return (
    <input
      type="text"
      className="block w-3/4 focus:outline-none focus:border-blue-500  border-gray-500 border rounded px-6 py-4"
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};

export default Input;
