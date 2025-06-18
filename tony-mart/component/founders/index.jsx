import "./index.scss";

function FoundersSection() {
    return (
        <section className="founders-section">
            <h2>Meet the Founders</h2>
            <div className="founder-grid">
                <div className="founder-card">
                    <img src="/images/founder.jpg" alt="CEO of Tony-Marts" />
                    <h3>Mr. Nwoke Anthony Martins</h3>
                    <p>Founder and CEO</p>
                    <small>
                        With a deep-rooted passion for agriculture and 
                        community growth, Mr. Martins leads Tony-Marts with 
                        a clear vision for food security and livestock excellence in Africa.
                    </small>
                </div>

                <div className="founder-card">
                    <img src="/images/Co founder.jpg" alt="Co-founder of Tony-Marts" />
                    <h3>Mrs. Nwoke-Nnannah Chinyere</h3>
                    <p>Co-Founder & MD</p>
                    <small>
                        Adaora brings hands-on expertise in aquaculture and farm 
                        operations, ensuring the smooth daily running of 
                        Tony-Marts' fishery and poultry units.
                    </small>
                </div>
            </div>
        </section>
    );
}

export default FoundersSection;
