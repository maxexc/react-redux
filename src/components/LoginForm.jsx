
export const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget.elements.login.value);
        e.currentTarget.reset()
        //         or we can do like this:
        
        // const form = e.currentTarget;
        // form.reset();
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