import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const authInfo = useContext(AuthContext)
    const navigate = useNavigate()
    const {signInUser,signInWithGoogle} = authInfo;

    const handlSubmit=(e)=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
            navigate('/')

        })
        .catch(error =>{
            console.log(error.message)
        })
        signInWithGoogle()
        .then(result=>console.log(result.user))
        .catch(error=>console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={signInWithGoogle} className="btn btn-ghost">Sign in with google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;