import css from "./Contact.module.css";
import { FaUserAstronaut } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li>
      <div className={css.contactCard}>
        <div className={css.userInfo}>
          <p className={css.userAbout}>
            <FaUserAstronaut className={css.userIcon} />
            {contact.name}
          </p>
          <p className={css.userAbout}>
            <IoIosPhonePortrait className={css.userIcon} />
            {contact.number}
          </p>
        </div>
        <button className={css.deleteBtn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
