import React from "react";
const Card = () => {
    return(
        <div className="p-1">
        <div className="card p-1" style={{width: "18rem"}}>
        <img src="https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    )};

export default Card;

