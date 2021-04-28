import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import styles from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact = () => null }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactsList}>
          {name}, {number}
          <button
            className={styles.contactsList__button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
