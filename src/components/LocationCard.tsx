"use client";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

interface Location {
    lat: number;
    lng: number;
}

export default function LocationCard() {
    const [location, setLocation] = useState<Location | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setLoading(false);
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    setLoading(false);
                }
            );
        } else {
            console.error("Geolocation not supported by this browser.");
            setLoading(false);
        }
    }, []);

    return (
        <div className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <LoadScript googleMapsApiKey="AIzaSyCT4gBQr00XohSl2PMUKrjxzSdj6c20RFc">
                {!loading && location ? (
                    <GoogleMap 
                        mapContainerClassName="h-full w-full"
                        center={location}
                        zoom={13}
                    >
                        <Marker position={location} />
                    </GoogleMap>
                ) : (
                    <p>Loading map...</p>
                )}
            </LoadScript>
        </div>
    );
}
