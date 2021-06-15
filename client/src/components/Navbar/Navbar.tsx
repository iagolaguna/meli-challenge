import useSearchItems from "hooks/useSearchItems";
import { useState } from "react";
import "./style.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useSearchItems({ query: search });
  console.log(data, error, isLoading);

  return (
    <header>
      <nav className="navbar">
        <div>Logo</div>
        <div className="search">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
