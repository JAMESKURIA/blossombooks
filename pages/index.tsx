import Banner from "components/home/Banner";
import Services from "components/home/Services";
import Header from "components/layout/Header";
import PageFooter from "components/layout/PageFooter";
import { services } from "data";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      {/* <section className="min-h-[70vh] bg-red-500"></section> */}
      <Banner />
      <Services services={services} />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
      <PageFooter />
    </>
  );
};
