import React from 'react'
import "./Cards.css"
import Card from '../card/Card'

export default function Cards({ user, locations, updateLocation, selectedIndex }) {

    return (
        <div className="cards">
            {Array.from({ length: 12 }, (_, index) => (
                <Card
                    key={index}
                    user={user}
                    locations={locations}
                    onChange={updateLocation}
                    selectedIndex={selectedIndex}
                />
            ))}
        </div>
    );
}
