const CardHeroesCharging = () => {
  const styles = {
    width: "160px",
    height: "240px",
    backgroundColor: "rgb(17,17,17)",
    background:
      "linear-gradient(34deg, rgba(17,17,17,1) 0%, rgba(34,34,34,1) 35%, rgba(51,51,51,1) 100%)",
    borderRadius: "2rem",
    margin: "1rem",
  };
  const styles2 = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  return (
    <div style={styles2}>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
      <div style={styles}></div>
    </div>
  );
};

export default CardHeroesCharging;
