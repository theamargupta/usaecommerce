import React, { useState, useEffect } from "react";
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from "../components";
import { titleIfy } from "../utils/helpers";
// import { useQuery } from "@apollo/react-hooks";
import { fetchHomeData } from "../graphql";
import CartLink from "../components/CartLink";
import HomeScreenLoader from "../components/Loaders/HomeScreenLoader";
// import { toast } from "react-toastify";

const Home = () => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchHomeData(setLoading).then((data2) => setdata(data2));
  }, []);
  // error &&
  //   error?.errors?.map((data) =>
  //     toast.error(data.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     })
  //   );
  return loading ? (
    <HomeScreenLoader />
  ) : data ? (
    <>
      <CartLink />
      {data?.Sofa ? (
        <div className="w-full">
          <div
            className="bg-blue-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col"
          >
            <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
              <Tag year="2021" category="SOFAS" />
              <Center
                price={data.Sofa.price}
                title={data.Sofa.name}
                link={`/product/${data.Sofa.id}`}
              />
              <Footer designer="Jason Bourne" />
            </div>
            <div className="flex flex-1 justify-center items-center relative">
              <Showcase imageSrc={data.Sofa.image} />
              <div
                className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      "
      >
        <DisplayMedium
          imageSrc={data.newArrivals.sofa[0].image}
          subtitle={`${data.newArrivalsCount.sofa.length} items`}
          title={titleIfy("newArrivals")}
          link={"/category/newArrivals"}
        />
        <DisplayMedium
          imageSrc={data.sofas.sofa[0].image}
          subtitle={`${data.sofasCount.sofa.length} items`}
          title={titleIfy("sofas")}
          link={"/category/sofas"}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">
          Find the perfect piece or accessory to finish off your favorite room
          in the house.
        </p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        {data &&
          data.trending.map((data, index) => (
            <DisplaySmall
              key={data.name + index}
              imageSrc={data.image}
              title={data.name}
              subtitle={data.categories[0].name}
              link={`/product/${data.id}`}
            />
          ))}
      </div>
    </>
  ) : (
    <p>Nothing</p>
  );
};

export default Home;
