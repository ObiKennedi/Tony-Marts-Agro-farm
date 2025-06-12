import "./index.scss";

function TestimonyCard({ name, occupation, message }) {
  return (
    <div className="testimony-card">
      <div className="quote">“</div>
      <p className="message">{message}</p>
      <div className="customer-info">
        <p className="name">{name}</p>
        <span className="occupation">{occupation}</span>
      </div>
    </div>
  );
}

export default TestimonyCard;
