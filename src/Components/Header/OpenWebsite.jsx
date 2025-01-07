import React, { useEffect } from "react";
import styles from "./OpenWebsite.module.css";

const OpenWebsite = () => {
  const url = 'https://gamebts-88ec3.web.app/Staking'; // Predefined URL

  // Automatically open the URL when the component is mounted
  useEffect(() => {
    document.getElementById("iframe").src = url;
  }, []); // The empty dependency array ensures this runs once when the component is mounted

  return (
    <div className={styles.container}>
      {/* Removed the input field */}
      <div className={styles.iframeWrapper}>
        <iframe
          id="iframe"
          title="Website Viewer"
          src={url} // Automatically loads the URL
          className={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
};

export default OpenWebsite;
