import React from "react";
import { Segment, Transition, Button, Image } from "semantic-ui-react";

const SegmentContent = ({ visible, handleAnimate }) => {
  return (
    <Segment placeholder textAlign="center" className="segment-home">
      <Transition visible={visible} animation="jiggle" duration={500}>
        <Image
          size="small"
          src="https://react.semantic-ui.com/images/leaves/1.png"
          className="home-image"
        />
      </Transition>
      <Button color="red" onClick={handleAnimate}>
        Animate
      </Button>
    </Segment>
  );
};

export default SegmentContent;
