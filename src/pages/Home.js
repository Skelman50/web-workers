import React, { useState, useEffect } from "react";
import { Button, Transition, Image, Segment } from "semantic-ui-react";

import workerCalculate from "../worker-calculate";
import workerPush from "../worker-push";
import WebWorker from "../worker-setup";

const HomePage = () => {
  const [visible, setVisible] = useState(true);
  const [calculateLoading, setCalculateLoafing] = useState(false);
  const [webWorkerCalculate, setWebWorkerCalculate] = useState(null);
  const [webWorkerPush, setWebWorkerPush] = useState(null);
  const [sum, setSum] = useState(null);

  useEffect(() => {
    setWebWorkerCalculate(new WebWorker(workerCalculate));
    setWebWorkerPush(new WebWorker(workerPush));
  }, []);

  const calculate = () => {
    setCalculateLoafing(true);
    webWorkerCalculate.postMessage(10000000);
    webWorkerCalculate.addEventListener("message", event => {
      setSum(event.data);
      setWebWorkerCalculate(null);
      setWebWorkerCalculate(new WebWorker(workerCalculate));
      setCalculateLoafing(false);
    });
  };

  const push = () => {
    webWorkerPush.postMessage("push");
    webWorkerPush.addEventListener("message", event => {
      console.log(event);
      setWebWorkerPush(null);
      setWebWorkerPush(new WebWorker(workerPush));
    });
  };

  return (
    <div>
      <Button
        primary
        loading={calculateLoading}
        disabled={calculateLoading}
        className="ololo"
        onClick={calculate}
      >
        calculate
      </Button>
      <Button color="facebook" onClick={push}>
        Push
      </Button>
      <Segment placeholder textAlign="center" className="segment-home">
        <Transition visible={visible} animation="jiggle" duration={500}>
          <Image
            size="small"
            src="https://react.semantic-ui.com/images/leaves/1.png"
            className="home-image"
          />
        </Transition>
        <Button color="red" onClick={() => setVisible(!visible)}>
          Animate
        </Button>
      </Segment>
      {sum && <div className="sum-result">{sum}</div>}
    </div>
  );
};

export default HomePage;
