import { memo } from "react";

const Callback = ({}) => {
  console.log("child render");
  return <>hello</>;
};

export default memo(Callback);
