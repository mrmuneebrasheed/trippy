import React, { useEffect, useState } from "react";

export default function Hotels() {
    const [hotels, setHotels] = useState();
    useEffect(() => {
        fetch(`http://localhost:3002/api/hotels/city/paris`).then((res) =>
            console.log(res.json())
        );
    }, []);
    return <h1>Hotels</h1>;
}
