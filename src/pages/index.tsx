import Head from "next/head";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white h-screen ">
        <Title title={"LIST"} />
      </div>
    </Layout>
  );
}
