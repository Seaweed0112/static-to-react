import React from "react";

export default function Hive() {
  return (
    <div>
      <div id="gameboard">
        <div className="card">
          <a className="List__ItemLink" title="node 2" href="#">
            <div className="ListItem">
              <h4 className="ListHeader">node 2</h4>
              <div className="status">health status</div>
              <button type="button" className="restart">
                stop/restart
              </button>
            </div>
          </a>
        </div>

        <div className="card">
          <a className="List__ItemLink" title="node 3" href="#">
            <div className="ListItem">
              <h4 className="ListHeader">node 3</h4>
              <div className="status">health status</div>
              <button type="button" className="restart">
                stop/restart
              </button>
            </div>
          </a>
        </div>

        <div className="card">
          <a className="List__ItemLink" title="node 4" href="#">
            <div className="ListItem">
              <h4 className="ListHeader">node 4</h4>
              <div className="status">health status</div>
              <button type="button" className="restart">
                stop/restart
              </button>
            </div>
          </a>
        </div>

        <div className="card">
          <a className="List__ItemLink" title="node 5" href="#">
            <div className="ListItem">
              <h4 className="ListHeader">node 5</h4>
              <div className="status">health status</div>
              <button type="button" className="restart">
                stop/restart
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
