import React from "react";
import styled from "styled-components";

const Card = styled.div`
    & {
        display: flex;
        flex-direction: column;
        margin: 40px 20px;
        border: 2px solid white;
        border-radius: 15px;
        box-shadow: 5px 5px 20px 10px grey;
        transition: all 100ms linear;
    }
    &:hover {
        transform: translate(10px, 10px) scale(1.05);
    }
`;
export default function HotelCard(props) {
    return (
        <Card className="col-5 m-2 border border-dark rounded">
            <div className="d-flex">
                <img
                    width="100%"
                    height="400px"
                    style={{ objectFit: "contain" }}
                    alt={props.name}
                    src={`http://localhost:3002/${props.img}`}
                />
            </div>
            <h2 className="text-primary p-2">{props.name}</h2>
            <div className="h4 p-2">{props.price} €</div>
        </Card>
    );
}
