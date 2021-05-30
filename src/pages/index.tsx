import Head from "next/head";
import { useCallback, useState } from "react";
import Layout from "../components/Layout";
import Task from "../components/Task";
import Title from "../components/Title";
import {
  deleteContext,
  listContext,
  setListContext,
} from "../context/contexts";
import Add from "../components/Add";
import { GetServerSideProps } from "next";

export default function Home() {
  type value = {
    id: number;
    name: string;
  };
  const [list, setList] = useState<value[]>([]);

  const deleteList = (id: number) => {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const setCallback = useCallback(
    (value: value[]) => {
      setList(value);
    },
    [setList]
  );

  return (
    <Layout>
      <Head>
        <title>TODOLIST</title>
      </Head>
      <div className="bg-white h-screen shadow-lg p-6">
        <Title title={"LIST"} />
        <setListContext.Provider value={setCallback}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
