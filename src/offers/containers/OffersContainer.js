import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { getShowAddModal } from '../reducer';
import OffersList from '../components/OffersList';
import AddOffer from '../components/AddOffer';
import AddButton from '../components/AddButton';

class OfferContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
    };
  }

  render() {
    const { offers } = this.props;

    return (
      <div>
        <AddOffer
          visible={this.props.showAddModal}
          addOffer={this.props.actions.addOffer}
          onClose={this.props.actions.toggleAddModal}
        />
        <AddButton onTap={this.props.actions.toggleAddModal} />
        <OffersList offers={offers} />
      </div>
    );
  }
}

OfferContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  offers: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object.isRequired,
  showAddModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  offers: state.offers.items,
  showAddModal: getShowAddModal(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(OfferContainer);
