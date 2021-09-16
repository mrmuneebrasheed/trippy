import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import getHomeData from "../utils/Api";
import CityCard from "./CityCard";
import Hotels from "./Hotels";

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
        <Div>
            {cities?.map((city) => (
                <Link to={`/hotels/city/${city.slug}`}>
                    <CityCard
                        key={city.id}
                        slug={city.slug}
                        name={city.name}
                    ></CityCard>
                </Link>
            ))}
        </Div>
    );
}
