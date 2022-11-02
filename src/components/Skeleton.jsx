import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton(props) {
  return (
    <ContentLoader
      speed={3}
      width={364}
      height={391}
      viewBox="0 0 364 391"
      backgroundColor="#9e9a9a"
      foregroundColor="#c7c6c6"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="364" height="391" />
    </ContentLoader>
  );
}

export default Skeleton;
