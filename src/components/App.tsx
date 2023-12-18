import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatarpng from "@/assets/avatar.png";
import Cat from "@/assets/cat.svg";
export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <img width={100} height={100} src={avatarpng} alt="" />
      </div>
      <div>
        <Cat style={{ color: "darkblue" }} width={150} height={150} />
      </div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <h1>Hello there!</h1>
      <p>Count: {count}</p>
      <button className={classes.button} onClick={increment}>
        <span>Increment</span>
      </button>
      <Outlet />
    </div>
  );
};
