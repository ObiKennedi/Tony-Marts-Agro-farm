import { services } from "../../lib"
import { testimonies } from "../../lib"
import ServiceCard from "../service-card"
import TestimonyCard from "../testimonies-card"
import "./index.scss"

function Services() {
    return (
        <section id="services">
            <div>
                {services.map((service, i) => (
                    <ServiceCard key={i} {...service} />
                ))}
            </div>

            <div className="testimony-grid">
                {testimonies.map((t, i) => (
                    <TestimonyCard key={i} {...t} />
                ))}
            </div>

        </section>
    )
}

export default Services