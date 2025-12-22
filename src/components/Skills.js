import React from "react";

const skills = [
  {
    id: 1,
    name: "skill1",
    src: process.env.PUBLIC_URL + "/images/skill01.png",
  },
  {
    id: 2,
    name: "skill2",
    src: process.env.PUBLIC_URL + "/images/skill02.png",
  },
  {
    id: 3,
    name: "skill3",
    src: process.env.PUBLIC_URL + "/images/skill03.png",
  },
  {
    id: 4,
    name: "skill4",
    src: process.env.PUBLIC_URL + "/images/skill04.png",
  },
  {
    id: 5,
    name: "skill5",
    src: process.env.PUBLIC_URL + "/images/skill05.png",
  },
];

function Skills() {
  return (
    <section className="skill">
      <div className="skill-flex">
        {skills.map((s) => (
          <article key={s.id}>
            <img src={s.src} alt={s.name} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
