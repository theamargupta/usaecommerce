import CartLink from '../components/CartLink';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchCategory } from '../graphql';
import { titleIfy } from '../utils/helpers';
import ListItem from '../components/ListItem';
import AllCategorieLoader from '../components/Loaders/AllCategorieLoader';

const Category = (props) => {
  let { name } = useParams();
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCategory(name,setLoading).then((data2) => setdata(data2));
  }, [name]);

  return (
    <>
      <CartLink />
      <div className='flex flex-col items-center'>
        <div className='max-w-fw flex flex-col w-full'>
          <div className='pt-4 sm:pt-10 pb-8'>
            <h1 className='text-5xl font-light'>{titleIfy(name)}</h1>
          </div>

          <div>
            <div className='flex flex-1 flex-wrap flex-row'>
              {loading ? (
                <AllCategorieLoader />
              ) : (
                data?.categorie?.sofa.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      link={`/product/${item.id}`}
                      title={item.name}
                      price={item.price}
                      imageSrc={item.image}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
