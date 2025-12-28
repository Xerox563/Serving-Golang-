import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            padding: "40px",
            borderRadius: "16px",
            textAlign: "center",
            maxWidth: "500px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
            Welcome Home 🏠
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            This is the Home page of our React Router demo. Routing lets us
            change pages without reloading the browser.
          </p>
        </div>
        <button onClick={() => navigate("/about")}>Go to About </button>
      </div>
    </>
  );
}

export default Home;
