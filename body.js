function Card(props) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      margin: "20px",
      width: "220px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      transition: "transform 0.2s",
    }}>
      <img
        src={props.cloth}
        height={280}
        width={200}
        alt={props.name}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h3 style={{ fontSize: "18px", margin: "6px 0", color: "#333" }}>{props.name}</h3>
        <p style={{ fontSize: "14px", margin: "4px 0", color: "#777" }}>{props.brand}</p>
        <p style={{ fontWeight: "bold", fontSize: "16px", margin: "6px 0", color: "#000" }}>₹{props.price}</p>
        <p style={{ color: "#f39c12", margin: "4px 0" }}>⭐ {props.rating}</p>
        <p style={{ backgroundColor: "#e0f7e9", color: "#2e7d32", padding: "4px 8px", borderRadius: "5px", display: "inline-block", fontWeight: "bold" }}>
          {props.discount} OFF
        </p>
      </div>
    </div>
  );
}
export default Card;