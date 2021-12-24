import React from "react";

export default function SideBar() {
  return (
    <div>
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
    </div>
  );
}
