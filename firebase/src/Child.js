function Child({onChildData})
{
    const handleClick = () => {
        const newData = "World!";
        onChildData(newData);
    }
    return(
        <div>
            <button onClick={handleClick}> Send data to parent</button>
        </div>
    )
    
}

export default Child;