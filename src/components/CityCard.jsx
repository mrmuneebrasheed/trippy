import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 20px;
    border: 2px solid white;
    border-radius: 15px;
    box-shadow: 0 0 20px 10px grey;
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
