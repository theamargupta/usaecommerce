import { useState } from 'react';
import Button from '../components/Button';
import Image from '../components/Image';
import QuantityPicker from '../components/QuantityPicker';
import CartLink from '../components/CartLink';
import { ContextProviderComponent, SiteContext } from '../context/mainContext';
import { useParams } from 'react-router-dom';
import { GET_ONE_SOFA } from '../graphql';
import { useQuery } from '@apollo/react-hooks';

const ItemView = (props) => {
  const { productId } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_SOFA, {
    variables: { productId: productId },
  });
  const [numberOfitems, updateNumberOfItems] = useState(1);
  data && console.log(data.Sofa);
  // const { price, image, name, description } = data.Sofa;
  const {
    context: { addToCart },
  } = props;

  function addItemToCart() {
    let product = data.Sofa;
    product['quantity'] = numberOfitems;
    addToCart(product);
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1);
  }

  function decrement() {
    if (numberOfitems === 1) return;
    updateNumberOfItems(numberOfitems - 1);
  }

  return loading ? (
    <p>loading</p>
  ) : (
    <>
      <CartLink />
      <div
        className='
        sm:py-12
        md:flex-row
        py-4 w-full flex flex-1 flex-col my-0 mx-auto
      '
      >
        <div className='w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200'>
          <div className='py-16 p10 flex flex-1 justify-center items-center'>
            <Image
              src={data.Sofa.image}
              alt='Inventory item'
              className='max-h-full'
            />
          </div>
        </div>
        <div className='pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2'>
          <h1
            className='
           sm:mt-0 mt-2 text-5xl font-light leading-large
          '
          >
            {data.Sofa.name}
          </h1>
          <h2 className='text-2xl tracking-wide sm:py-8 py-6'>
            ${data.Sofa.price}
          </h2>
          <p className='text-gray-600 leading-7'>{data.Sofa.description}</p>
          <div className='my-6'>
            <QuantityPicker
              increment={increment}
              decrement={decrement}
              numberOfitems={numberOfitems}
            />
          </div>
          <Button full title='Add to Cart' onClick={addItemToCart} />
        </div>
      </div>
    </>
  );
};

function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {(context) => <ItemView {...props} context={context} />}
      </SiteContext.Consumer>
    </ContextProviderComponent>
  );
}

export default ItemViewWithContext;
