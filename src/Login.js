import React from "react";

const login = () => {
  return (
    <div>
      <p>facebook　login</p>
      <div id="fb-root">
        <div
          class="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div>
      </div>
    </div>
  );
};

export default login;
