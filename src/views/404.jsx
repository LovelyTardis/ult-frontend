import { useNavigate, useParams } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const params = useParams();
  const [param, value] = Object.entries(params)[0];

  const handleClick = () => navigate("/");

  return (
    <div>
      <h1 key={param + value}>
        {param !== "*"
          ? param.charAt(0).toUpperCase() + param.slice(1)
          : "Page"}{" "}
        "{value}" not found
      </h1>
      <button onClick={handleClick}>Return home</button>
    </div>
  );
}
