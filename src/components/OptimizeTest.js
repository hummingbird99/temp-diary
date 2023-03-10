import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  // 얕은 비교를 하지 않도록 렌더링 최적화
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });

  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true = 이전 props 현재 props가 같다 -> 리렌더링을 일으키지 않는다.
  // return false = 이전 과 현재가 다르다 -> 리렌더링을 일으킨다.
  return prevProps.obj.count === nextProps.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual); // 렌더링 되지 않는다.

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
