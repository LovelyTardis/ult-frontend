import type { UltType } from "../../../types";

interface Props {
  ult: UltType;
}

const styles = {
  "div-all": {
    display: "flex",
    flexDirection: "row",
  },
  left: {
    paddingRight: "2rem",
  },
  right: { marginLeft: "auto" },
};

function CardFooter({ ult }: Props) {
  const { likes, datetime } = ult;

  return (
    <div style={styles["div-all"]}>
      <p className="left" style={styles.left}>
        {likes} &#10084;
      </p>
      <p className="left" style={styles.left}>
        {likes} comments
      </p>
      <p className="right" style={styles.right}>
        {new Date(datetime).toLocaleTimeString()} -{" "}
        {new Date(datetime).toLocaleDateString()}
      </p>
    </div>
  );
}

export default CardFooter;
