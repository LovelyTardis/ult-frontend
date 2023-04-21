import "./ProfileContainerPicker.css";

export default function ProfileContainerPicker({ setActiveLikedUlts }) {
  const handleClickUser = () => {
    setActiveLikedUlts(false);
  };

  const handleClickLiked = () => {
    setActiveLikedUlts(true);
  };

  return (
    <div className="container-picker">
      <button onClick={handleClickUser}>User ULTS</button>
      <button onClick={handleClickLiked}>Liked ULTS</button>
    </div>
  );
}
