export const LoginPage = () => {
    return(
        <div>
            <form
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '20px'}}>
                <input text="text" name="login" />
                <br />
                 <button type="submit">Log in</button>
            </form>
        </div>
    )
}