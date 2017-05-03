import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input'

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState = () => ({
    title: '',
    balance: null,
    tags: [],
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
    const { title, balance, tags } = this.state;
    if (!title || !balance || !tags.length) {
      this.setState({ isDirty: true });
      return false;
    }
    this.setState(this.getState());
    return ({
      title,
      balance: parseInt(balance, 10),
      tags,
      id: Math.random().toString(36).slice(2),
    });
  }

  handleAddChip = (chip) => {
    this.setState({
      tags: [...this.state.tags, chip],
    });
  }

  handleDeleteChip = () => {

  }

  render() {
    const { isDirty, title, balance, tags } = this.state;
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
          <ChipInput
            value={tags}
            hintText="Add a tag"
            onRequestAdd={chip => this.handleAddChip(chip)}
            onRequestDelete={(chip, index) => this.handleDeleteChip(chip, index)}
            errorText={isDirty && !tags.length ? 'Please add a tag' : false}
            fullWidth
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
