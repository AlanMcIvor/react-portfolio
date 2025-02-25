import React from "react";
import "./Work.css";
import { Title } from "../SectionTitle/Title";
import { Card } from "../Card/Card";
import todos from "./assets/todos.png";

export function Work() {
  return (
    <>
      <section>
        <div className="work-container">
          <Title text="My Work" />
          <div className="card-container">
            <Card
              cardTech={["ReactJs", "FantaCss", "HTML"]}
              cardTitle={"Todo App"}
              cardImg={todos}
            />
            <Card
              cardTech={["tech1", "tech2", "tech3"]}
              cardTitle={"Todo App"}
              cardImg={todos}
            />
            <Card
              cardTech={["tech1", "tech2", "tech3"]}
              cardTitle={"Todo App"}
              cardImg={todos}
            />
          </div>
        </div>
      </section>
    </>
  );
}
