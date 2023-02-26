import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Card
      image="https://cdn.images.express.co.uk/img/dynamic/14/590x/Egg-fried-rice-recipe-how-to-make-the-perfect-egg-fried-rice-1445540.jpg?r=1622815285894"
      article="Consequat et aliqua veniam pariatur voluptate id ea id dolor labore dolore. Anim nulla culpa commodo ea proident tempor nulla nulla tempor mollit. Reprehenderit labore ut magna laboris culpa tempor officia sit. Duis velit consectetur eu cupidatat nostrud ex aliqua laborum sit cupidatat amet deserunt."
      head="อาหารคาว"
      subhead="ข้าวผัด"
    />
    <Card
      image="https://images.squarespace-cdn.com/content/v1/51f7fb1ee4b03d20c9b4c34b/1377274120042-N5U1EZS0CS2V82CU1V5P/pad-see-ew-1.jpg"
      article="Adipisicing commodo consectetur ex adipisicing ad laboris pariatur duis. Sit quis officia tempor non id pariatur commodo exercitation in elit pariatur ut in consectetur. Non voluptate qui incididunt laborum labore qui nulla voluptate velit esse ullamco eiusmod do adipisicing. Irure proident et aute ex aliqua elit magna deserunt nostrud culpa ea nisi excepteur. Quis adipisicing esse dolor esse amet consectetur pariatur et et labore."
      head="อาหารคาว"
      subhead="ผัดซีอิ๊ว"
    />
  </>
);
