import { Suspense } from "react";
import Header from "../components/home/Header";
import Main from "../components/home/Main";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <Suspense>
      <Header />
      <Main />
      <Footer />
    </Suspense>
  );
}

export default Home;
