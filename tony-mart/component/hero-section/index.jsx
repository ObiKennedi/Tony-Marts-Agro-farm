import "./index.scss"

function HeroSection() {
    return (
        <section className="hero-section">
            <img src="/images/hero-background.jpg" alt="background" />
            <div>
                <img src="/images/logo.png" alt="logo" />
                <h2>Feeding Nations, Cultivating the future</h2>
                <p>Pioneering sustainable agro-solutions, from soil to supply.</p>
            </div>
            <div>
                <a href="#about">
                    <button>Explore our farm</button>
                </a>
                <a href="#contact">
                    <button>Contact us</button>
                </a>
            </div>
        </section>
    )
}

export default HeroSection