import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

// import "./index.css";
export default () => (
  <div>
    <head>
      <title>HDP Resources Status</title>
      <link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet" />
      <link href="style.css" type="text/css" rel="stylesheet" />
    </head>

    <body>
      <ul className="navigation">
        <li>
          <a>HDP Resources</a>
        </li>
      </ul>

      <nav className="sidenav">
        <button type="button" className="collapsible">
          HDP MAIN
        </button>
        <div className="content">
          <ul data-role="listview" data-theme="b">
            <li className="service">
              <a href="#">Hive</a>
            </li>
            <li className="service">
              <a href="#">Spark</a>
            </li>
            <li className="service">
              <a href="#">Yarn</a>
            </li>
            <li className="service">
              <a href="#">ZooKeeper</a>
            </li>
            <li className="service">
              <a href="#">HDFS</a>
            </li>
          </ul>
        </div>

        <button type="button" className="collapsible">
          HDP ALPHA
        </button>
        <div className="content">
          <ul data-role="listview" data-theme="b">
            <li className="service">
              <a href="#">Hive</a>
            </li>
            <li className="service">
              <a href="#">Spark</a>
            </li>
            <li className="service">
              <a href="#">Yarn</a>
            </li>
            <li className="service">
              <a href="#">ZooKeeper</a>
            </li>
            <li className="service">
              <a href="#">HDFS</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <p>This is the main content.</p>

        <div id="gameboard">
          <div className="card">
            <a className="List__ItemLink" title="node 1" href="#">
              <div className="ListItem">
                <h4 className="ListHeader">node 1</h4>
                <div className="status">health status</div>
                <button type="button" className="restart">
                  stop/restart
                </button>
              </div>
            </a>
          </div>

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
      </main>
    </body>
  </div>
);
