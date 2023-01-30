import "./App";
import React, { useEffect, useState } from "react";

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
  return (
    <>
      <table className="text-center">
        <tr>
          <td>
            <div>
              <h5>Hook </h5>
              <button className="me-3" onClick={myfun}>
                show
              </button>
              {text ? <h1>jay swaminarayan</h1> : null}
            </div><hr/>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <form className="container" onChange={change}>
                <h5>onChange Event</h5>
                <p>
                  Enter Name:
                  <input type="text" />
                </p>
                <h4>{chang}</h4>
              </form>
            </div><hr/>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h5>Adding Dynamic styles</h5>
              <button
                onClick={color}
                style={{ backgroundColor: active ? "green" : "white" }}
              >
                change Color
              </button>
            </div><hr/>
          </td>
        </tr>
      </table>
    </>
  );
}
