function ErrorMessage (props)
{
    return (
        <>
            {props.isDisplayed? <p className="error-message">{props.children}</p>: ""}            
        </>
    );
}

export default ErrorMessage;