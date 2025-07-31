import { useEffect, useRef } from "react";

const WithRenderTracker = (WrappedComp) => {
  return (props) => {
    const countRef = useRef(0);

    useEffect(() => {
      countRef.current += 1;
    }, [props]);

    console.log(`Компонент ${props.name} рендерился ${countRef.current} раз`);

    return <WrappedComp {...props} />;
  };
};

export default WithRenderTracker;
