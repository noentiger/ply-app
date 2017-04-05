import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddButton = ({ onTap }) => (
  <FloatingActionButton
    onTouchTap={onTap}
    style={{ right: 20, bottom: 20, position: 'fixed' }}
    secondary
  >
    <ContentAdd />
  </FloatingActionButton>
  );

AddButton.propTypes = {
  onTap: PropTypes.func.isRequired,
};

export default AddButton;
