import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import * as actions from '../actions';
import { getShowAddModal, getSelectedFilter } from '../reducer';
import OffersList from '../components/OffersList';
import AddOffer from '../components/AddOffer';
import AddButton from '../components/AddButton';
import Filter from '../components/Filter';
import * as Constants from '../constants';

class OfferContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      snackbar: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      snackbar: false,
    });
  };

  handleDeleteOffer = (id) => {
    this.props.actions.deleteOffer(id);
    this.setState({
      snackbar: true,
    });
  };

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
        <Filter
          selected={this.props.selectedFilter}
          onFilter={
            (event, index, value) => {
              this.props.actions.changeFilter(value);
            }
          }
        />
        <OffersList offers={offers} onDelete={id => this.handleDeleteOffer(id)} />
        <Snackbar
          open={this.state.snackbar}
          message="Offer was deleted"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
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
  selectedFilter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  let offers = [];
  switch (state.offers.selectedFilter) {
    case Constants.FILTER_POSITIVE:
      offers = state.offers.items.filter(item => item.balance > 0);
      break;
    case Constants.FILTER_NEGATIVE:
      offers = state.offers.items.filter(item => item.balance < 0);
      break;
    default:
      offers = state.offers.items;
  }
  return {
    offers,
    showAddModal: getShowAddModal(state),
    selectedFilter: getSelectedFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(OfferContainer);
