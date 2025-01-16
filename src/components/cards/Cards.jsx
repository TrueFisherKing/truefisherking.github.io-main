import React from 'react'; // Import React library
import "./Cards.css"; // Import CSS for styling
import Card from '../card/Card'; // Import the Card component

/**
 * Cards Component
 * Renders a collection of 12 `Card` components.
 *
 * @param {Object} props - The component properties.
 * @param {string} props.user - The name of the user to be displayed on each card.
 * @param {Object} props.locations - Location data for the cards.
 * @param {Function} props.updateLocation - Function to update the selected location.
 * @param {number} props.selectedIndex - Index of the currently selected location.
 * @returns {JSX.Element} A rendered collection of cards.
 */
export default function Cards({ user, locations, updateLocation, selectedIndex }) {
    return (
        <div className="cards">
            {/* Render 12 Card components */}
            {Array.from({ length: 12 }, (_, index) => (
                <Card
                    key={index} // Unique key for each card
                    user={user} // User name passed as a prop
                    locations={locations} // Location data passed as a prop
                    onChange={updateLocation} // Callback for updating location
                    selectedIndex={selectedIndex} // Index of the selected location
                />
            ))}
        </div>
    );
}
