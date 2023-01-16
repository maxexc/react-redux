import { useDispatch } from "react-redux";
import { logIn } from "redux/userSlice";



export const LoginForm = () => {
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn(form.elements.login.value));
        console.log(form.elements.login.value);
        form.reset();        
        //         or we can do like this:

        // console.log(e.currentTarget.elements.login.value);
        // dispatch(logIn(e.currentTarget.elements.login.value));
        // e.currentTarget.reset()        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'}}>
                <input text="text" name="login" />
                
                 <button type="submit">Log in</button>
            </form>
        </div>
    )
}