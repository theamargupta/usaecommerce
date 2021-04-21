import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { navItemLength } from '../ecommerce.config';
import { ALL_CATEGORIES } from '../graphql';
import HeaderLoader from '../components/Loaders/HeaderLoader';
import { useQuery } from '@apollo/react-hooks';

export default function Layout({ children, categories }) {
  const { loading, error, data } = useQuery(ALL_CATEGORIES);
  error && console.error('error', error);
  if (data && data.allCategories.length > navItemLength) {
    categories = categories.slice(0, navItemLength);
  }
  return (
    <div>
      <nav>
        <div className='flex justify-center'>
          <div
            className='
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          '
          >
            <div className='mb-4 sm:mr-16 max-w-48 sm:max-w-none'>
              <Link to='/'>
                {/* <a aria-label='Home'> */}
                <img src='/logo.png' alt='logo' width='90' height='28' />
                {/* </a> */}
              </Link>
            </div>
            {loading ? (
              <HeaderLoader />
            ) : (
              <div className='flex flex-wrap mt-1'>
                <Link to='/'>
                  {/* <a aria-label='Home'> */}
                  <p
                    className='
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  '
                  >
                    Home
                  </p>
                  {/* </a> */}
                </Link>
                {data.allCategories.map((category, index) => (
                  <Link to={`/category/${category.value}`} key={index}>
                    {/* <a aria-label={category}> */}
                    <p
                      className='
                          sm:mr-8 sm:mb-0
                          mb-4 text-left text-smaller mr-4
                        '
                    >
                      {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}
                    </p>
                    {/* </a> */}
                  </Link>
                ))}
                <Link to='/categories'>
                  {/* <a aria-label='All categories'> */}
                  <p
                    className='
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  '
                  >
                    All
                  </p>
                  {/* </a> */}
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className='mobile:px-10 px-4 pb-10 flex justify-center'>
        <main className='w-fw'>{children}</main>
      </div>
      <footer className='flex justify-center'>
        <div
          className='
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300'
        >
          <span className='block text-gray-700 text-xs'>
            Copyright © 2021 JAMstack Ecommerce. All rights reserved.
          </span>
          <div
            className='
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          '
          >
            <Link to='/admin'>
              {/* <a aria-label='Admin panel'> */}
              <p className='text-sm font-semibold'>Admins</p>
              {/* </a> */}
            </Link>
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
