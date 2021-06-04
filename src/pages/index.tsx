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
type value = {
  id: number;
  name: string;
  state: boolean;
};
type props = {
  data: value[];
};
import fetch from "node-fetch";
export default function Home({ data }: props) {
  const [list, setList] = useState<value[]>(data);
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
                return (
                  <Task
                    task={item.name}
                    key={item.id}
                    id={item.id}
                    state={item.state}
                  />
                );
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const host = req.headers.host;
  let url = "";
  if (host === "localhost:3000") {
    url = "http://localhost:3000/api/getList";
  } else {
    url = "https://resttodo.vercel.app/";
  }
  const fetcher = (url: string): Promise<any> =>
    fetch(url)
      .then((res: any) => res.json())
      .catch((err: any) => console.log(err));
  const data = await fetcher(url);
  return {
    props: {
      data,
    },
  };
};
