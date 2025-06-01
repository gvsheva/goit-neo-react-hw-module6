import { FaUser, FaPhone } from "react-icons/fa";
import type { Contact } from "../../model";
import css from "./ContactList.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deleteContact } from "../../redux/contactsSlice";
import { useMemo } from "react";
import Fuse from "fuse.js";

export function Contact({ contact: c }: { contact: Contact }) {
  const dispatch = useAppDispatch();
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser /> {c.name}
        </p>
        <p>
          <FaPhone /> {c.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(c.id))}>Delete</button>
    </div>
  );
}

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
