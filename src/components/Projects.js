const projects = [
  {
    title: "WEB  프로젝트 1 : 포트폴리오 홈페이지",
    desc: "저의 포트폴리오를 담은 홈페이지를 제작 했습니다",
    tech: "React, TypeScript",
    src: process.env.PUBLIC_URL + "/images/Projects01.png",
    git: "https://github.com/DAJEONG518/first-ibsa-project",
    site: "#",
  },
  {
    title: "포트폴리오 사이트",
    desc: "개인 포트폴리오",
    tech: "React, TypeScript",
    src: process.env.PUBLIC_URL + "/images/Projects02.png",
    git: "#",
    site: "#",
  },
];

function Projects() {
  return (
    <section>
      <h2>제가 구현한 WEB 프로젝트입니다</h2>
      <div className="flex">
        {projects.map((p) => (
          <article key={p.title}>
            <img src={p.src} alt="프로젝트 미리보기" />
            <h4>{p.title}</h4>
            <h3>{p.desc}</h3>
            <p>SKILL : {p.tech}</p>
            <div className="pj-button">
              <a href={p.git}>깃허브</a>
              <a href={p.site}>사이트</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
