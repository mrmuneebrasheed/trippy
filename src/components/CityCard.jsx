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
        transform: translate(10px, 10px) scale(1.05) rotate(-10deg);
    }
`;
export default function CityCard(props) {
    return (
        <Card className="col-12 col-md-4">
            <img
                style={{ borderRadius: "15px 15px 0 0" }}
                width="100%"
                alt={props.name}
                src={`http://localhost:3002/img/${props.slug}.png`}
            ></img>
            <h1 className="text-center text-success p-3">{props.name}</h1>
        </Card>
    );
}
