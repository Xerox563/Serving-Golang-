function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9966, #ff5e62)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          maxWidth: "500px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>About Us 📘</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          This page proves that React changes components based on the URL
          without talking to the server again.
        </p>
      </div>
    </div>
  );
}

export default About;
