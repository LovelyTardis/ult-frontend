import { useNavigate } from "react-router-dom";

export default function NavigateButton({ navigateTo, text, buttonText }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(navigateTo);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
