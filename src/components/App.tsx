import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatarpng from "@/assets/avatar.png";
import Cat from "@/assets/cat.svg";
import { platform } from "os";
export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    // setCount(count + 1);
    Todo();
  };

  // if (__PLATFORM__ === "desktop") {
  //   return <div>isDesktop</div>;
  // }
  // if (__PLATFORM__ === "mobile") {
  //   return <div>isMobile</div>;
  // }

  // if (__ENV__ === "development") {
  //   return <div>isDevelopment</div>;
  // }

  function Todo() {
    Todo2();
  }
  function Todo2() {
    throw new Error();
  }

  return (
    <div data-testId="App.DataTestId">
      <h1 data-testId="platform">platform={__PLATFORM__}</h1>
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
