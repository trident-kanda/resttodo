import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Task from "../components/Task";
import Title from "../components/Title";
import Input from "../components/Input";
import { deleteContext, setListContext } from "../context/contexts";

export default function Home() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "勉強",
    },
    {
      id: 2,
      name: "運動",
    },
  ]);

  const deleteList = (id: number) => {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <Layout>
      <Head>
        <title>TODOLIST</title>
      </Head>
      <div className="bg-white h-screen shadow-lg p-6">
        <Title title={"LIST"} />
        <setListContext.Provider value={setList}>
          <deleteContext.Provider value={deleteList}>
            <div className="px-14">
              {list.map((item) => {
                return <Task task={item.name} key={item.id} id={item.id} />;
              })}
            </div>
          </deleteContext.Provider>
        </setListContext.Provider>
        <Title title={"ADD"} />
        <div className="px-14">
          <Input />
        </div>
      </div>
    </Layout>
  );
}
