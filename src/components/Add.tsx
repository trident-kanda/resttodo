import { useCallback, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Add = () => {
  const [inputValue, setinput] = useState("");
  const inputCallback = useCallback(
    (value: string) => {
      setinput(value);
    },
    [setinput]
  );
  return (
    <div className=" flex">
      <Input setInput={inputCallback} />
      <Button inputValue={inputValue} />
    </div>
  );
};

export default Add;
