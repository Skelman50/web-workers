import React, { useState, useEffect } from "react";
import workerCalculate from "../worker-calculate";
import workerPush from "../worker-push";
import WebWorker from "../worker-setup";
import ActionsContent from "./components/ActionsContent";
import SegmentContent from "./components/SegmentContent";
import { Transition } from "semantic-ui-react";

const webWorkerCalculate = new WebWorker(workerCalculate);
const webWorkerPush = new WebWorker(workerPush);

const HomePage = () => {
  const [visible, setVisible] = useState(true);
  const [calculateLoading, setCalculateLoafing] = useState(false);
  const [pushLoading, setPushLoading] = useState(false);
  const [sum, setSum] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const calculateListener = event => {
      setSum(event.data);
      setCalculateLoafing(false);
    };
    const pushListener = event => {
      setUsers(event.data);
      setPushLoading(false);
    };
    webWorkerCalculate.addEventListener("message", calculateListener);
    webWorkerPush.addEventListener("message", pushListener);
    return () => {
      webWorkerCalculate.removeEventListener("message", calculateListener);
      webWorkerPush.removeEventListener("message", pushListener);
    };
  }, []);

  const calculate = () => {
    setCalculateLoafing(true);
    webWorkerCalculate.postMessage(10000000);
  };

  const push = () => {
    setPushLoading(true);
    webWorkerPush.postMessage("push");
  };

  const handleAnimate = () => {
    setVisible(!visible);
  };

  const slice = users.slice(0, 100);
  return (
    <div>
      <ActionsContent
        push={push}
        calculate={calculate}
        calculateLoading={calculateLoading}
        pushLoading={pushLoading}
      />
      <SegmentContent visible={visible} handleAnimate={handleAnimate} />
      {sum && <div className="sum-result">{sum}</div>}
      <Transition visible={!pushLoading} animation="slide up" duration={500}>
        <div>
          {slice.map((item, key) => (
            <div key={key}>
              <div>{item.name}</div>
              <div>{item.email}</div>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default HomePage;
