import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {
    const google = () => {
        window.open("http://localhost:3000/auth/google", "_self");
    };

    const github = () => {
        window.open("http://localhost:3000/auth/github", "_self");
    };

    const discord = () => {
        window.open("http://localhost:3000/auth/discord", "_self");
    };

    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton discord" onClick={discord}>
                        <img src={"https://static.vecteezy.com/system/resources/previews/018/930/604/original/discord-logo-discord-icon-transparent-free-png.png"} alt=""  className="discord_icon" />
                        Discord
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;