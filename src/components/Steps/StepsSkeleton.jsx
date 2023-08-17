import React from "react";
import ContentLoader from "react-content-loader";

const StepsSkeleton = (props) => (
  <ContentLoader
    speed={0}
    width={1600}
    height={454}
    viewBox="0 0 1600 377"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="302" rx="0" ry="0" width="400" height="75" />
    <rect x="400" y="227" rx="0" ry="0" width="400" height="150" />
    <rect x="800" y="152" rx="0" ry="0" width="400" height="225" />
    <rect x="1200" y="77" rx="0" ry="0" width="400" height="300" />
  </ContentLoader>
);

export default StepsSkeleton;
