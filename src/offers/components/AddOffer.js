import React, {PropTypes, Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = this._getState();
  }

  _getState = () => {
    return {
      title: '',
      balance: 0,
      isDirty: false,
      _isMounted: false,
    };
  }

  _handleFieldChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  }

  _handleAddOffer = () => {
    const data = this._validateFields();
    if (data) {
      this.props.addOffer(data);
      this.props.onClose();
    }
  }

  _validateFields = () => {
    const { title, balance } = this.state;
    if (!title || !balance) {
      this.setState({ isDirty: true });
      return false;
    }
    this.setState(this._getState());
    return ({
      title,
      balance,
    });
  }

  render() {

    const { isDirty, title, balance } = this.state;
    const { visible, onClose } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={onClose}
      />,
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this._handleAddOffer}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Add a new offer"
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
            onChange={(e) => this._handleFieldChange('title', e)}
            errorText={isDirty && !title ? 'Please enter a title' : false}
          />
          <TextField
            hintText="Enter balance"
            floatingLabelText="Balance"
            fullWidth
            type="number"
            defaultValue={balance}
            onChange={(e) => this._handleFieldChange('balance', e)}
            errorText={isDirty && !balance ? 'Please enter balance' : false}
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
