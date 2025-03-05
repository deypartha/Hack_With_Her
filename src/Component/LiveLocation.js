import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const LiveLocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
            (position) => {
              setLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              });
            },
            (error) => {
              console.error("Error getting location:", error);
              if (error.code === 1) alert("Please enable location access!");
            },
            { enableHighAccuracy: true }
          );
    } else {
      console.error("Geolocation is not available");
    }
  }, []);

  return (
    <div className="container mt-5 text-center">
      <Card className="p-4 shadow-lg">
        <Card.Body>
          <h2>Live Location Tracker</h2>
          {location.lat && location.lon ? (
            <>
              <p><strong>Latitude:</strong> {location.lat}</p>
              <p><strong>Longitude:</strong> {location.lon}</p>
              <a
                href={`https://www.google.com/maps?q=${location.lat},${location.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open in Google Maps
              </a>
            </>
          ) : (
            <p>Fetching location...</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default LiveLocation;

