import Card from "../card/Card"
import "./Cards.css"

export default function Cards() {

    const twelveCards = []
    for (let i = 0; i < 12; i++) {
        twelveCards.push(
            <Card
                key={i}
            />)
    }

    return (
        <div className="cards">
            {twelveCards}
        </div>
    )
}