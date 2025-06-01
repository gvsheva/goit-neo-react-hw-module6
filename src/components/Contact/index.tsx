import { FaPhone, FaUser } from "react-icons/fa";
import { useAppDispatch } from "../../hooks";
import type { ContactModel } from "../../model";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export function Contact({ contact: c }: { contact: ContactModel }) {
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
