import { Suspense } from "react";
import Header from "../components/home/Header";
import Main from "../components/home/Main";

function Home() {
  return (
    <Suspense>
      <Header />
      <Main />
    </Suspense>
  );
}

export default Home;
