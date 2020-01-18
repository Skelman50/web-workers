import React from "react";
import { Button } from "semantic-ui-react";

const ActionsContent = ({ push, calculate, calculateLoading }) => {
  return (
    <div className="action-content">
      <Button
        primary
        loading={calculateLoading}
        disabled={calculateLoading}
        className="ololo actions-btn"
        onClick={calculate}
      >
        calculate
      </Button>
      <Button className="actions-btn" color="facebook" onClick={push}>
        Push
      </Button>
    </div>
  );
};

export default ActionsContent;
