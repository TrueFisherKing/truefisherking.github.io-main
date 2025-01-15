import React from 'react'
import "./Cards.css"
import Card from '../card/Card'

export default function Cards({ user, updateUserName, currentLocation, updateLocation }) {
    // console.log(updateLocation);
    
    return (
        <div className="cards">
            {Array.from({ length: 12 }, (_, index) => (
                <Card
                    key={index}
                    user={user}
                    updateUserName={updateUserName}
                    currentLocation={currentLocation}
                    onChange={updateLocation}
                />
            ))}
        </div>
    );
}
