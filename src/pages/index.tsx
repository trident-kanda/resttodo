import Head from "next/head";
import Layout from "../components/Layout";
import Task from "../components/Task";
import Title from "../components/Title";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white h-screen shadow-lg p-6">
        <Title title={"LIST"} />
        <div className="px-14">
          <Task task={"勉強"} />
          <Task task={"1"} />
          <Task task={"1"} />
        </div>
        <Title title={"ADD"} />
      </div>
    </Layout>
  );
}
