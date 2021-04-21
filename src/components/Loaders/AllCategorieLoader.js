import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={1100}
    viewBox='0 0 1200 1100'
    backgroundColor='#ebebeb'
    foregroundColor='#ffffff'
    {...props}
  >
    <rect x='256' y='1050' rx='3' ry='3' width='633' height='6' />
    <rect x='7' y='25' rx='0' ry='0' width='251' height='340' />
    <rect x='311' y='27' rx='0' ry='0' width='284' height='335' />
    <rect x='641' y='31' rx='0' ry='0' width='270' height='337' />
    <rect x='942' y='32' rx='0' ry='0' width='242' height='338' />
  </ContentLoader>
);

export default MyLoader;
