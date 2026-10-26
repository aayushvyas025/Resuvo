import { Suspense } from "react";
import Header from "../components/home/Header";

function Home() {
  return (
    <Suspense>
     <Header />
    </Suspense>
  );
}

export default Home;
