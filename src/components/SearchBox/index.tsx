import type { ChangeEventHandler } from "react";
import { useAppDispatch } from "../../hooks";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useAppDispatch();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="search"
        name="name"
        className={css.input}
        onChange={handleChange}
        placeholder="Enter some contact's name"
      />
    </div>
  );
}
