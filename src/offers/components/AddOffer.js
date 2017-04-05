import React, {PropTypes, Component} from 'react';

class AddOffer extends Component {
  constructor(props) {
    super(props);

    this.onAddOfferClick = this.onAddOfferClick.bind(this);
  }

  onAddOfferClick() {
    const titleElement = document.getElementById('title');
    const balanceElement = document.getElementById('balance');

    this.props.addOffer({
      title: titleElement.value,
      balance: balanceElement.value
    });

    titleElement.value = "";
    balanceElement.value = "";

    titleElement.focus();
  }

  componentDidMount() {
    document.getElementById('title').focus();
  }

  render() {
    return (
      <div>
        <input id="title" type="text" placeholder="Enter a title" />
        <input id="balance" type="number" placeholder="Enter a balance" />
        <button onClick={this.onAddOfferClick}>Add Offer</button>
      </div>
    );
  }
}

AddOffer.propTypes = {
  addOffer: PropTypes.func.isRequired
};

export default AddOffer;
