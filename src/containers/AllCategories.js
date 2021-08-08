import { titleIfy } from "../utils/helpers";
import React, { useState, useEffect } from "react";
import { DisplayMedium } from "../components";
import CartLink from "../components/CartLink";
import { fetchAllCategory, fetchOneCategory } from "../graphql";
import CardLoader from "../components/Loaders/CardLoader";
import AllCategorieLoader from "../components/Loaders/AllCategorieLoader";
// import { toast } from 'react-toastify';

const Category = ({ categoryData }) => {
  const [data1, setdata] = useState({
    allSofas: { sofa: [{ image: "" }] },
    countData: { sofa: [] },
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchOneCategory(categoryData.value, setLoading).then((data2) =>
      setdata(data2)
    );
  }, [categoryData.value]);

  return loading ? (
    <CardLoader />
  ) : (
    <DisplayMedium
      imageSrc={data1?.allSofas?.sofa[0]?.image}
      subtitle={`${data1.countData?.sofa?.length} items`}
      title={titleIfy(categoryData.name)}
      link={`/category/${categoryData.value}`}
    />
  );
};
const AllCategories = () => {
  const [data, setdata] = useState({ allCategories: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAllCategory(setLoading).then((data2) => setdata(data2));
  }, []);
  return loading ? (
    <AllCategorieLoader />
  ) : (
    <>
      <div className="w-full">
        <CartLink />
        <div
          className="
          pt-4 sm:pt-10 pb-8
        "
        >
          <h1 className="text-5xl font-light">All categories</h1>
        </div>
        <div className="flex flex-col items-center">
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div
            className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
          >
            {data.allCategories.map((categoryData, index) => (
              <Category key={index} categoryData={categoryData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
