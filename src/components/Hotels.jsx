import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useParams } from "react-router";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function Hotels(props) {
    const [hotels, setHotels] = useState();
    const { city } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3002/api/hotels/city/${props.city}`)
            .then((res) => res.json())
            .then((res) => {
                setHotels(res.results);
            });
    }, []);
    const position = [51.505, -0.09];
    console.log(hotels);
    return (
        <div>
            <h1>Hotels</h1>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {hotels?.map((hotel) => (
                            <HotelCard
                                key={hotel.id}
                                price={hotel.price}
                                img={hotel.pictures[0]}
                                name={hotel.name}
                            ></HotelCard>
                        ))}
                    </div>
                </div>
                <div className="col-6">
                    <div
                        style={{
                            width: "100%",
                            height: "90vh",
                            backgroundColor: "grey",
                        }}
                    ></div>
                    {/* <MapContainer
                        center={[51.505, -0.09]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                </div>
            </div>
        </div>
    );
}
