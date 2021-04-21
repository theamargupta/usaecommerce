import { titleIfy, slugify } from '../utils/helpers';
import { DisplayMedium } from '../components';
import CartLink from '../components/CartLink';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CATEGORIES, GET_ONE_CATEGORY } from '../graphql';
const Category = ({ categoryData }) => {
  const { loading, error, data } = useQuery(GET_ONE_CATEGORY, {
    variables: { value: categoryData.value },
  });
  data && console.log(data);
  return loading ? (
    <p>Loading ...</p>
  ) : (
    <DisplayMedium
      imageSrc={data.allSofas[0].image}
      subtitle={`${data.countData.count} items`}
      title={titleIfy(categoryData.name)}
      link={`/category/${categoryData.value}`}
    />
  );
};
const AllCategories = () => {
  const { loading, error, data } = useQuery(ALL_CATEGORIES);
  return loading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className='w-full'>
        <CartLink />
        <div
          className='
          pt-4 sm:pt-10 pb-8
        '
        >
          <h1 className='text-5xl font-light'>All categories</h1>
        </div>
        <div className='flex flex-col items-center'>
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div
            className='grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1'
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
