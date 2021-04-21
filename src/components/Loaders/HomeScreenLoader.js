import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={2000}
    height={1100}
    viewBox='0 0 2000 1100'
    backgroundColor='#ebebeb'
    foregroundColor='#ffffff'
    {...props}
  >
    <rect x='241' y='105' rx='0' ry='0' width='898' height='297' />
    <rect x='216' y='483' rx='0' ry='0' width='439' height='267' />
    <rect x='547' y='851' rx='0' ry='0' width='254' height='49' />
    <rect x='485' y='820' rx='0' ry='0' width='345' height='13' />
    <rect x='275' y='920' rx='0' ry='0' width='196' height='167' />
    <rect x='495' y='921' rx='0' ry='0' width='164' height='160' />
    <rect x='686' y='921' rx='0' ry='0' width='161' height='157' />
    <rect x='878' y='924' rx='0' ry='0' width='126' height='148' />
    <rect x='702' y='480' rx='0' ry='0' width='445' height='268' />
  </ContentLoader>
);

export default MyLoader;
