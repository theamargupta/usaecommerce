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
    <rect x='241' y='105' rx='0' ry='0' width='242' height='297' />
    <rect x='517' y='103' rx='0' ry='0' width='241' height='294' />
    <rect x='791' y='103' rx='0' ry='0' width='263' height='295' />
    <rect x='247' y='471' rx='0' ry='0' width='234' height='349' />
    <rect x='313' y='610' rx='0' ry='0' width='19' height='52' />
    <rect x='521' y='471' rx='0' ry='0' width='246' height='341' />
  </ContentLoader>
);

export default MyLoader;
