import { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { contactsOperations } from './redux/contacts';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
