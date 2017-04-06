import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState = () => ({
    title: '',
    balance: null,
    isDirty: false,
    _isMounted: false,
  })

  handleFieldChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  }

  handleAddOffer = () => {
    const data = this.validateFields();
    if (data) {
      this.props.addOffer(data);
      this.props.onClose();
    }
  }

  validateFields = () => {
    const { title, balance } = this.state;
    if (!title || !balance) {
      this.setState({ isDirty: true });
      return false;
    }
    this.setState(this.getState());
    return ({
      title,
      balance: parseInt(balance, 10),
      id: Math.random().toString(36).slice(2),
    });
  }

  render() {
    const { isDirty, title, balance } = this.state;
    const { visible, onClose } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={onClose}
      />,
      <FlatButton
        label="Add"
        primary
        keyboardFocused
        onTouchTap={this.handleAddOffer}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Add a New Offer"
          actions={actions}
          modal={false}
          open={visible}
          onRequestClose={onClose}
          autoScrollBodyContent
        >
          <TextField
            hintText="Enter title for offer"
            floatingLabelText="Title"
            fullWidth
            value={title}
            onChange={e => this.handleFieldChange('title', e)}
            errorText={isDirty && !title ? 'Please enter a title' : false}
          />
          <TextField
            hintText="Enter balance"
            floatingLabelText="Balance"
            fullWidth
            type="number"
            defaultValue={balance}
            onChange={e => this.handleFieldChange('balance', e)}
            errorText={isDirty && !balance ? 'Please enter a balance' : false}
          />
        </Dialog>
      </div>
    );
  }
}

AddOffer.propTypes = {
  addOffer: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddOffer;
