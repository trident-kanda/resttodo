import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Task from "../components/Task";
import Title from "../components/Title";
import {
  deleteContext,
  listContext,
  setListContext,
} from "../context/contexts";
import Add from "../components/Add";

export default function Home() {
  type usestate = {
    id: number;
    name: string;
  };
  const [list, setList] = useState<usestate[]>([]);

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

          <Title title={"ADD"} />
          <div className="px-14">
            <listContext.Provider value={list}>
              <Add />
            </listContext.Provider>
          </div>
        </setListContext.Provider>
      </div>
    </Layout>
  );
}
