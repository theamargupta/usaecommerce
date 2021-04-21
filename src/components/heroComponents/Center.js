import { Button } from '../';
import { useHistory } from 'react-router-dom';

const Center = ({ price, title, link }) => {
  const router = useHistory();
  function navigate() {
    router.push(link);
  }
  return (
    <div>
      <p className='text-4xl xl:text-5xl font-bold tracking-widest leading-none'>
        {title}
      </p>
      <p className='py-6 tracking-wide'>
        FROM <span>${price}</span>
      </p>
      <Button onClick={navigate} title='Shop Now' />
    </div>
  );
};

export default Center;
