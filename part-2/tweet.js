const Tweet = (props) => {
    return (
        <div>
            <h1>{props.username} <b>{props.name}</b></h1>
            <h3>{props.date}</h3>
            <p>{props.message}</p>
        </div>
    );
}