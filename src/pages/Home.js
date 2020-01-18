import React, { useState, useEffect, Fragment } from "react";

import workerCalculate from "../worker-calculate";
import workerPush from "../worker-push";
import WebWorker from "../worker-setup";
import ActionsContent from "./components/ActionsContent";
import SegmentContent from "./components/SegmentContent";

const HomePage = () => {
  const [visible, setVisible] = useState(true);
  const [calculateLoading, setCalculateLoafing] = useState(false);
  const [webWorkerCalculate, setWebWorkerCalculate] = useState(null);
  const [webWorkerPush, setWebWorkerPush] = useState(null);
  const [sum, setSum] = useState(null);
  const [users, setUsers] = useState([]);

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
      setUsers(event.data);
      setWebWorkerPush(null);
      setWebWorkerPush(new WebWorker(workerPush));
    });
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
      />
      <SegmentContent visible={visible} handleAnimate={handleAnimate} />
      {sum && <div className="sum-result">{sum}</div>}
      <Fragment>
        {slice.map((item, key) => (
          <div key={key}>
            <div>{item.name}</div>
            <div>{item.email}</div>
          </div>
        ))}
      </Fragment>
    </div>
  );
};

export default HomePage;
