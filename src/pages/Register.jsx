import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";


const Register = () => {

    const {createNewUser ,  setUser} = useContext(Authcontext)

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target)
        const name = form.get('name')
        const photo= form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log({name , email , photo , password});

        createNewUser(email , password)
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user);
            
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
          });
        
        
    }
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">

                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                    <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>

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
                    </form>
                    <p className="text-center">Already Have An Account ? Please <Link className="text-red-500" to='/auth/login'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;