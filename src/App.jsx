import { Component } from 'react';

import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

class App extends Component {
  state = {};

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
export default App;
