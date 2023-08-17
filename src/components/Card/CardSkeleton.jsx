import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={322}
    height={370}
    viewBox="0 0 322 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="166" y="24" rx="0" ry="0" width="1" height="0" />
    <rect x="30" y="15" rx="0" ry="0" width="260" height="170" />
    <rect x="30" y="205" rx="0" ry="0" width="260" height="25" />
    <rect x="30" y="246" rx="0" ry="0" width="260" height="55" />
    <rect x="109" y="316" rx="15" ry="15" width="105" height="33" />
  </ContentLoader>
);

export default MyLoader;
