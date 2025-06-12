import { features } from "../../lib"
import "./index.scss"

function Features() {
    return (
        <div className="features">
            {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                    <span className="icon">{feature.icon}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Features