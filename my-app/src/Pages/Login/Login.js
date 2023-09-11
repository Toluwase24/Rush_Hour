import {useNavigate} from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    
    const navigateToCreate = () => {
        navigate('/Create');
      };

    return(
        <form onSubmit={navigateToCreate}>
            <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">Email address</label>
                <input type="email" class="form-control w-50" id="exampleInputEmai" aria-describedby="emailHelp" required/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword" class="form-label">Password</label>
                <input type="password" class="form-control w-50" id="exampleInputPassword" required/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    )
}