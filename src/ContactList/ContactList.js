import css from './ContactList.module.css'

export default function ContactList({contact, ondeleteContact}) {
    return (
    <ul className={css.contactlist}>
        {contact.map(({ id, name, number }) => (
      <li key={id}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
        onClick={() => ondeleteContact(id)}
          className={css.btn}
          type="button"
        >
         СТЕРЕТЬ НАХЕР
        </button>
      </li>
    ))}
    </ul>
    )
}