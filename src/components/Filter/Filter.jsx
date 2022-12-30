import React from 'react';
import { PropTypes } from 'prop-types';

export const Filter = ({ filter, value }) => {
  return (
    <>
      <label>Find contact by name</label>
      <input
        onChange={filter}
        value={value}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.func,
};
