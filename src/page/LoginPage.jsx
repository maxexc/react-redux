export const LoginPage = () => {
    return(
        <div>
            <form
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