import React from "react";

const skills = [
  { title: "HTML", desc: "웹 표준 및 접근성 이해" },
  { title: "CSS", desc: "레이아웃 및 스타일링" },
  { title: "JavaScript", desc: "기본 문법 및 DOM 제어" },
];

function Skills() {
  return (
    <section>
      <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {skills.map((s) => (
          <article key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
