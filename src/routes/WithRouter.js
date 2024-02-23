import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    // const history = useHistory();

    return <Component {...props} {...{ location, navigate, params }} />;
};
