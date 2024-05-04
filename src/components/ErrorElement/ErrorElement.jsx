import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div>
      <h2>Ooops!!!</h2>
      <Link to="/">Go Back to home</Link>
    </div>
  );
};

export default ErrorElement;
