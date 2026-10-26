import { Suspense } from "react";
import Banner from "../components/home/Banner";

function Home() {
  return (
    <Suspense>
      <Banner />
    </Suspense>
  );
}

export default Home;
