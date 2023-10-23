import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import style from './FacebookAuth.module.css'
import { useDispatch } from "react-redux";
import authFacebookUser from "../../redux/Actions/User/authFacebookUser";

const FacebookAuth = () => {
    const dispatch = useDispatch()
    return (
            <LoginSocialFacebook
            appId="2003086770069441"
            onResolve={(response) => {
                const profileObj = response.data;
                console.log(profileObj);
                dispatch(authFacebookUser(profileObj))
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