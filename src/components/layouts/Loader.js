import React from "react";

import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className="spinner">
          <BallTriangle
            width={100}
            color="blue"
            ariaLabel="loading"
          />
        </div>
      );
}