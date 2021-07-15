const SocialMedia = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    width: "200px"
  }
  return (
    <div style={styles}>
      <span>
        <a href="http://www.google.com">
          <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt="Instagram"/>
        </a>
      </span>
      <span>
        <a href="http://www.google.com">
        <img src="https://img.icons8.com/ios/24/000000/facebook-new.png"/>
        </a>
      </span>
      <span>
        <a href="http://www.google.com">
        <img src="https://img.icons8.com/ios/24/000000/twitter--v1.png"/>
        </a>
      </span>
      <span>
        <a href="http://www.google.com">
        <img src="https://img.icons8.com/ios/24/000000/behance.png"/>
        </a>
      </span>
      <span>
        <a href="http://www.google.com">
        <img src="https://img.icons8.com/material-sharp/24/000000/github.png"/>
        </a>
      </span>
    </div>
  );
};

export default SocialMedia;
