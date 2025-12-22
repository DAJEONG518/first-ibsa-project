import React from "react";

const projects = [
  {
    title: "피부과 홈페이지",
    desc: "교과 기반 반응형 웹사이트",
    tech: "HTML, CSS, JavaScript",
    img: "/images/.png", //여기에 맞는 이미지 넣기
  },
  {
    title: "포트폴리오 사이트",
    desc: "개인 포트폴리오",
    tech: "React, TypeScript",
    img: "/images/.png", //여기에 맞는 이미지 넣기
  },
];

function Projects() {
  return (
    <section>
      <h2>제가 구현한 WEB 프로젝트입니다</h2>
      <div className="flex">
        {projects.map((p) => (
          <article key={p.title}>
            <img src={process.env.PUBLIC_URL + p.img} alt="프로젝트 미리보기" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small>{p.tech}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
