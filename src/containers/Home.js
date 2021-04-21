import React from 'react';
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from '../components';
import { titleIfy, slugify } from '../utils/helpers';
import { useQuery } from '@apollo/react-hooks';
import { HOME_DATA } from '../graphql';
import CartLink from '../components/CartLink';

const Home = () => {
  const { loading, error, data } = useQuery(HOME_DATA);

  data && console.log('data', data);
  error && console.error('error', error);
  return loading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <CartLink />
      <div className='w-full'>
        <div
          className='bg-blue-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col'
        >
          <div className='pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col'>
            <Tag year='2021' category='SOFAS' />
            <Center
              price={data.Sofa.price}
              title={data.Sofa.name}
              link={`/product/${slugify(data.Sofa.name)}`}
            />
            <Footer designer='Jason Bourne' />
          </div>
          <div className='flex flex-1 justify-center items-center relative'>
            <Showcase imageSrc={data.Sofa.image} />
            <div
              className='absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full'
            />
          </div>
        </div>
      </div>
      <div
        className='
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      '
      >
        <DisplayMedium
          imageSrc={data.newArrivals[0].image}
          subtitle={`${data.newArrivalsCount.count} items`}
          title={titleIfy(data.newArrivals[0].categories[0].name)}
          link={'/category/newArrivals'}
        />
        <DisplayMedium
          imageSrc={data.sofas[0].image}
          subtitle={`${data.sofasCount.count} items`}
          title={titleIfy(data.sofas[0].categories[0].name)}
          link={'/category/sofas'}
        />
      </div>
      <div className='pt-10 pb-6 flex flex-col items-center'>
        <h2 className='text-4xl mb-3'>Trending Now</h2>
        <p className='text-gray-600 text-sm'>
          Find the perfect piece or accessory to finish off your favorite room
          in the house.
        </p>
      </div>
      <div className='my-8 flex flex-col lg:flex-row justify-between'>
        {data &&
          data.trending.map((data, index) => (
            <DisplaySmall
              key={data.name + index}
              imageSrc={data.image}
              title={data.name}
              subtitle={data.categories[0].name}
              link={`/product/${slugify(data.name)}`}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
