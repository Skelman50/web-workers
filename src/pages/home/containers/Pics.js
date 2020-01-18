import React, { useState, useEffect, Fragment } from "react";
import workerCalculate from "../../../utils/workers/worker-calculate";
import workerPush from "../../../utils/workers/worker-push";
import ActionsContent from "../components/ActionsContent";
import SegmentContent from "../components/SegmentContent";
import { Transition } from "semantic-ui-react";
import WebWorker from "../../../utils/workers/worker-setup";

const webWorkerCalculate = new WebWorker(workerCalculate);
const webWorkerPush = new WebWorker(workerPush);

const Pics = () => {
  const [visible, setVisible] = useState(true);
  const [calculateLoading, setCalculateLoafing] = useState(false);
  const [pushLoading, setPushLoading] = useState(false);
  const [sum, setSum] = useState(null);
  const [users, setUsers] = useState([]);

  const slice = users.slice(0, 100);
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
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Pics;
