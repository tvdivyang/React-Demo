import "./App";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Callback from "./Callback";

export default function Function() {
  const [text, settext] = useState(false);
  function myfun() {
    settext(!text);
  }
  useEffect(() => {
    console.log("UseEffect");
  }, [text]);
  const [chang, setchang] = useState();
  function change(event) {
    const a = event.target.value;
    const b = a.toUpperCase();
    setchang(b);
  }
  const [active, setactive] = useState(false);
  function color() {
    setactive(!active);
  }
  const [countone, setcountone] = useState(0);
  const [counttwo, setcounttwo] = useState();
  const callback = () => {
    setcountone(countone + 1);
  };

  const fun = useCallback(() => {
    console.log("usecallbackl");
  }, [counttwo]);

  const [count, setcount] = useState(0);
  const [item, setitem] = useState(2);
  const multicount = useMemo(
    function multicount() {
      console.log("HOOKS MEMO USE");
    },
    [item]
  );
  return (
    <>
      <div>
        <h5>Hook MEMO</h5>
        <h4>count : {count}</h4>
        <h4>item : {item}</h4>
        <h4>{multicount}</h4>
        <button className="me-3" onClick={() => setcount(count + 1)}>
          Update count
        </button>
        <button onClick={() => setitem(item * 10)}>Update item</button>
        <hr />
      </div>

      <div>
        <h5>Hook Callback</h5>
        <Callback countertwo={counttwo} fun={fun} />
        <button onClick={callback}>INCREMENT : {countone}</button>
        <hr />
      </div>
      <div>
        <h5>Hook useState</h5>
        <button className="me-3" onClick={myfun}>
          show
        </button>
        {text ? <h1>jay swaminarayan</h1> : null}
      </div>
      <hr />

      <div>
        <form className="container" onChange={change}>
          <h5>onChange Event</h5>
          <p>
            Enter Name:
            <input type="text" />
          </p>
          <h4>{chang}</h4>
        </form>
      </div>
      <hr />

      <div>
        <h5>Adding Dynamic styles</h5>
        <button
          onClick={color}
          style={{ backgroundColor: active ? "green" : "white" }}
        >
          change Color
        </button>
      </div>
      <hr />
    </>
  );
}
