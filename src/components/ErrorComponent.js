import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!</h1>
      <h2>Something Worng</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorComponent;
