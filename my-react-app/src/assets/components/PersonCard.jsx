function PersonCard({ person }) {
  const cardStyle = {
    backgroundColor: "#ffffff",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "0",
    margin: "20px auto",
    width: "400px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const contentStyle = {
    backgroundColor: "#ffffff",
    padding: "30px",
    margin: "4px",
    borderRadius: "16px",
    position: "relative",
  };

  const headerStyle = {
    color: "#2d3748",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    textTransform: "capitalize",
    letterSpacing: "0.5px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const labelStyle = {
    color: "#4a5568",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "4px",
    display: "block",
  };

  const valueStyle = {
    color: "#1a202c",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "16px",
    paddingLeft: "12px",
    borderLeft: "3px solid #667eea",
  };

  const iconStyle = {
    display: "inline-block",
    marginRight: "8px",
    fontSize: "16px",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25), 0 2px 12px rgba(0, 0, 0, 0.15)";
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1)";
  };

  const getIcon = (field) => {
    const icons = {
      name: "👤",
      age: "🎂",
      grade: "🎓",
      subject: "📚"
    };
    return icons[field] || "ℹ️";
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <div style={contentStyle}>
        <h2 style={headerStyle}>
          {person.constructor.name}
        </h2>
        
        <div>
          <span style={labelStyle}>
            <span style={iconStyle}>{getIcon('name')}</span>
            Name
          </span>
          <p style={valueStyle}>{person.name}</p>
        </div>

        <div>
          <span style={labelStyle}>
            <span style={iconStyle}>{getIcon('age')}</span>
            Age
          </span>
          <p style={valueStyle}>{person.age}</p>
        </div>

        {person.grade && (
          <div>
            <span style={labelStyle}>
              <span style={iconStyle}>{getIcon('grade')}</span>
              Grade
            </span>
            <p style={valueStyle}>{person.grade}</p>
          </div>
        )}

        {person.subject && (
          <div>
            <span style={labelStyle}>
              <span style={iconStyle}>{getIcon('subject')}</span>
              Subject
            </span>
            <p style={valueStyle}>{person.subject}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonCard;
