import useSearchItems from "hooks/useSearchItems";
import { useState } from "react";
import style from "./Navbar.module.scss";
import search1x from "assets/ic_search.png";
import search2x from "assets/ic_search@2x.png";
import { Logo } from "components/Logo/Logo";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    if (!search.length) return;
    history.push(`items?search=${search}`);
  };

  return (
    <header>
      <nav className={style.navbar}>
        <div className={style.container}>
          <div className={style.logo} onClick={() => history.push("/")}>
            <Logo />
          </div>
          <div className={style.search}>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
            <div className={style.icon} onClick={onSearch}>
              <img
                src={search1x}
                srcSet={`${search1x} 1280w, ${search2x} 1900w`}
                alt="search button"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// type SearchInputProps = {
//   value: string;
//   onSearch: (value: string) => void;
// };

// const SearchInput = ({ value, onSearch }: SearchInputProps) => {
//   <div className="search">
//     <input
//       type="text"
//       placeholder="Nunca dejes de buscar"
//       value={value}
//       onChange={(ev) => onSearch(ev.target.value)}
//     />
//     <img src={IcSearch1x} alt="search button" />
//   </div>;
// };

export default Navbar;
