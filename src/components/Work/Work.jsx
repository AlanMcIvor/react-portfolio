import React from "react";
import "./Work.css";
import { Title } from "../SectionTitle/Title";
import { Card } from "../Card/Card";
import todos from "./assets/todos.png";
import scouts from "./assets/scouts.png";

export function Work() {
  return (
    <section>
      <div className="work-container">
        <Title text="My Work" />
        <div className="card-container">
          <Card
            cardTech={["ReactJs", "FantaCss", "HTML"]}
            cardTitle={"Todo App"}
            cardImg={todos}
            liveSiteLink="https://lustrous-treacle-0607c4.netlify.app/"
            githubLink="https://github.com/AlanMcIvor/todo-app"
          />
          <Card
            cardTech={["ReactJs", "FantaCss", "HTML"]}
            cardTitle={"Todo App"}
            cardImg={todos}
            liveSiteLink="https://lustrous-treacle-0607c4.netlify.app/"
            githubLink="https://github.com/AlanMcIvor/todo-app"
          />
          <Card
            cardTech={["PHP", "MySQL", "HTML"]}
            cardTitle={"Obanshire Scouts"}
            cardImg={scouts}
            liveSiteLink="https://website-99dec0dc.oul.tuq.mybluehost.me/#"
            githubLink="https://github.com/AlanMcIvor/Obanshire-Cub-Scouts"
          />
        </div>
      </div>
    </section>
  );
}
