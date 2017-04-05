import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import OffersList from '../components/OffersList';
import AddOffer from '../components/AddOffer';

class OfferContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: []
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div>
        <AddOffer addOffer={this.props.actions.addOffer} />
        <OffersList offers={offers} />
      </div>
    );
  }
}

OfferContainer.propTypes = {
  offers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    offers: state.offers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(OfferContainer);
