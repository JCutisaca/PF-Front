import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import style from './FacebookAuth.module.css'
import { useDispatch, useSelector } from "react-redux";
import authFacebookUser from "../../redux/Actions/User/authFacebookUser";
import { useEffect } from "react";
import getCart from "../../redux/Actions/ShoppingCart/getCart";

const FacebookAuth = ({ handleFacebookLoginSuccess }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.id)
    const accessToken2 = useSelector((state) => state.accessToken)

    useEffect(() => {
        if (userId && accessToken2) {
            dispatch(getCart(userId, accessToken2));
        }
    }, [userId]);
    return (
        <LoginSocialFacebook
            appId="2003086770069441"
            onResolve={(response) => {
                const profileObj = response.data;
                console.log(profileObj);
                dispatch(authFacebookUser(profileObj))
                handleFacebookLoginSuccess()
            }}
            onReject={(error) => {
                console.log(error);
            }}
        >
            <FacebookLoginButton className={style.containerButton} text="Ingresar con Facebook"></FacebookLoginButton>
        </LoginSocialFacebook>
    )
}

export default FacebookAuth;