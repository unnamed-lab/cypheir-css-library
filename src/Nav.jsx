import "./assets/css/style.css";
import logoIcon from "./assets/img/logo.svg";

const companyName = "Cypheir";

const Nav = () => {
  const navOption = [
    { key: 0, title: "Home", url: "#" },
    { key: 1, title: "Attributes", url: "#" },
    { key: 2, title: "Components", url: "#" },
    { key: 3, title: "Projects", url: "#" },
  ];

  return (
    <>
      <div className="nav-brand">
        <img src={logoIcon} alt={companyName} />
      </div>
      <div className="nav-toggle">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="nav-menu">
        <ul className="nav-list">
          {navOption.map((el) => (
            <Item key={el.key} title={el.title} url={el.url} />
          ))}
        </ul>
        <button type="button" className="btn dark">
          Visit our GitHub
        </button>
      </div>
    </>
  );
};

const Item = ({ key, title, url }) => (
  <li key={key} className="item">
    <a href={url} className="nav-link">
      {title}
    </a>
  </li>
);

export default Nav;
