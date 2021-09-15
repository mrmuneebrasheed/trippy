import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getHomeData from "../utils/Api";
import CityCard from "./CityCard";

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export default function Home() {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        getHomeData().then((data) => setCities(data.cities));
    }, []);
    console.log(cities);
    return (
        <div>
            <Div>
                {cities?.map((city) => (
                    <CityCard slug={city.slug} name={city.name}></CityCard>
                ))}
            </Div>
        </div>
    );
}
