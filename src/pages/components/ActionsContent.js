import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ActionsContent = ({ push, calculate, calculateLoading, pushLoading }) => {
  return (
    <div className="action-content">
      <Button
        primary
        loading={calculateLoading}
        disabled={calculateLoading}
        className="actions-btn"
        onClick={calculate}
      >
        <Icon name="calculator" /> calculate
      </Button>
      <Button
        className="actions-btn"
        color="facebook"
        onClick={push}
        loading={pushLoading}
        disabled={pushLoading}
      >
        <Icon name="calculator" /> submit
      </Button>
    </div>
  );
};

export default ActionsContent;
