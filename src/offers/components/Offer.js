import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardTitle, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Row } from 'react-app-flexbox-grid/lib';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import picture from '../offer.jpg';

export default class Offer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showConfirmDelete: false,
    };
  }

  handleShowConfirmDelete = () => {
    this.setState({ showConfirmDelete: true });
  }

  handleHideConfirmDelete = () => {
    this.setState({ showConfirmDelete: false });
  }

  render() {
    const { title, balance, tags } = this.props.offer;

    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleHideConfirmDelete}
      />,
      <FlatButton
        label="Delete"
        primary
        onTouchTap={this.props.onDelete}
      />,
    ];

    return (
      <div style={{ width: 300, marginBottom: 25 }}>
        <Card>
          <CardMedia
            mediaStyle={{ minHeight: 225 }}
            overlay={
              <CardTitle
                title={title}
                titleStyle={{ fontFamily: 'Circular', fontWeight: 400 }}
                subtitle={balance}
                subtitleStyle={{ fontSize: 21 }}
              />
            }
          >
            <img src={picture} alt={title} />
          </CardMedia>
          <CardText>
            <Row>
              {
                tags.map(
                  tag => (
                    <Chip
                      style={{ marginRight: 5, marginBottom: 5 }}
                      onRequestDelete={() => { this.props.onDeleteTag(tag); }}
                      key={tag}
                    >
                      {tag}
                    </Chip>
                  ),
                )
              }
            </Row>
          </CardText>
          <CardActions>
            <FlatButton onTouchTap={this.handleShowConfirmDelete} label="Delete" icon={<DeleteIcon />} />
          </CardActions>
        </Card>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.showConfirmDelete}
          onRequestClose={this.handleHideConfirmDelete}
        >
          Do you want to remove {title}?
        </Dialog>
      </div>
    );
  }
}

Offer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
};
