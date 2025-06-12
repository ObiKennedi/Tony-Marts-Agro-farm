import Slider from "react-slick";
import "./index.scss"

function ServiceCard({ title, description, subItems, images }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="service-card">
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    {images.map((src, idx) => (
                        <img key={idx} src={src} alt={`${title} ${idx + 1}`} />
                    ))}
                </Slider>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    {subItems.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceCard;
