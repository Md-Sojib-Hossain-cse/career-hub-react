import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Page Not Found!</h1>
            <Link to='/'>Go to Home...</Link>
        </div>
    );
};

export default ErrorPage;