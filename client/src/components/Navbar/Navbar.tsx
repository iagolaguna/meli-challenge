import { useState } from "react";
import { useHistory } from "react-router";
import style from "./Navbar.module.scss";
import search1x from "assets/ic_search.png";
import search2x from "assets/ic_search@2x.png";
import { Logo } from "components/Logo/Logo";

const Navbar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!search.length) return;
    history.push(`/items?search=${search}`);
  };

  return (
    <header>
      <nav className={style.navbar}>
        <div className={style.container}>
          <div className={style.logo} onClick={() => history.push("/")}>
            <Logo />
          </div>
          <form className={style.search} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
            <button aria-label="Buscar" type="submit" className={style.icon}>
              <img
                src={search1x}
                srcSet={`${search1x} 1280w, ${search2x} 1900w`}
                alt="buscar icono"
              />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
