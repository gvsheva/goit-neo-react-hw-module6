import css from "./ContactList.module.css";
import { useAppSelector } from "../../hooks";
import { useMemo } from "react";
import Fuse from "fuse.js";
import { Contact } from "../Contact";

export default function ContactList() {
  const contacts = useAppSelector((state) => state.contacts.items);
  const filter = useAppSelector((state) => state.filters.name);
  const fuse = useMemo(() => {
    return new Fuse(contacts, {
      keys: ["name"],
      threshold: 0.3,
    });
  }, [contacts]);
  const filtered = filter
    ? fuse.search(filter).map(({ item }) => item)
    : contacts;
  return (
    <ul className={css.contactList}>
      {filtered.map((c) => (
        <li key={c.id}>
          <Contact contact={c} />
        </li>
      ))}
    </ul>
  );
}
