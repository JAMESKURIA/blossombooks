import Banner from "components/home/Banner";
import Services from "components/home/Services";
import Header from "components/layout/Header";
import PageFooter from "components/layout/PageFooter";
import type { GetStaticProps } from "next";
import { ReactElement } from "react";
import { IService } from "types/data";
import { NextPageWithLayout } from "./_app";

interface IProps {
  services: IService[];
}

const Home: NextPageWithLayout<IProps> = ({ services }) => {
  return (
    <div>
      {/* <section className="min-h-[70vh] bg-red-500"></section> */}
      <Banner />
      <Services services={services} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data: IService[] = await res.json();
  return {
    props: {
      services: data,
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
      <PageFooter />
    </>
  );
};
