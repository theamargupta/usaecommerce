import CartLink from '../components/CartLink';
import { useParams } from 'react-router-dom';
import { GET_CATEGORIES } from '../graphql';
import { titleIfy } from '../utils/helpers';
import { useQuery } from '@apollo/react-hooks';
import ListItem from '../components/ListItem';
import AllCategorieLoader from '../components/Loaders/AllCategorieLoader';

const Category = (props) => {
  let { name } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    variables: { value: name },
  });
  data && console.log(data.allSofas);
  error && console.error(error);
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
                data.allSofas.map((item, index) => {
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
