import { useState } from "react"; // Import React's useState for managing state if needed in future extensions
import "./Card.css"; // Importing the CSS for styling

// Importing assets
import tftLogo from "/assets/images/Town Fair Logo_Red Back.png";
import starImage from "/assets/images/star.png";
import googleLogo from "/assets/images/google_logo-667x400.png";

// Importing helper functions
import { getStateName } from "../../data/script";

/**
 * Card Component
 * Displays a user-specific card with a company logo, location, user info, and a feedback prompt.
 *
 * @param {Object} props - The component properties.
 * @param {string} props.user - The name of the user (salesman).
 * @param {Object} props.locations - Location data including state and city.
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card({ user, locations }) {
    // Extract state location from locations.value
    const stateLocation = locations.value.split(", ")[1];

    return (
        <div className="card">
            {/* Image Section */}
            <div className="images">
                <img
                    src={tftLogo}
                    alt="Town Fair Tire Logo"
                    width="70"
                    height="70"
                />
                <img
                    src={`/assets/images/qr-codes/${locations.value
                        .replace(", ", "-")
                        .toLowerCase()}.png`}
                    alt="QR Code for Location"
                />
            </div>

            {/* Text Section */}
            <div className="text">
                {/* Top Section */}
                <div className="top">
                    <p>Guaranteed Lowest Price</p>
                    <p>
                        Town Fair Tire Centers <br />
                        of {getStateName(stateLocation)} LLC <br />
                        {locations.value}
                    </p>

                    {/* Star Ratings */}
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src={starImage} alt="star" />
                        ))}
                    </div>
                </div>

                {/* Middle Section */}
                <p className="mid">{user}</p>

                {/* Bottom Section */}
                <div className="bottom">
                    <p>Your Salesman</p>
                </div>
            </div>

            {/* Footer Section */}
            <footer>
                <p>Satisfied with your service? Let us know on</p>
                <div className="footer-image-container">
                    <img
                        src={googleLogo}
                        alt="Google Logo"
                        width="667"
                        height="400"
                    />
                </div>
            </footer>
        </div>
    );
}
