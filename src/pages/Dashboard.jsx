import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleAlertClick = () => {
    navigate("/dashboard/alerts");
  };

  const handleManageClick = () => {
    navigate("/dashboard/manage");
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p>
        Welcome to the admin panel. Here you will be able to manage products and
        orders.
      </p>

      <button onClick={handleAlertClick}>
        <span role="img" aria-label="alert">
          🚨
        </span>{" "}
        Check Products in Alert
      </button>

      <button onClick={handleManageClick}>
        <span role="img" aria-label="box">
          📦
        </span>{" "}
        Manage Products
      </button>
    </div>
  );
}
