import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import DropDownMenu from 'material-ui/DropDownMenu';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import MenuItem from 'material-ui/MenuItem';
import { filters, FILTER_ALL } from '../constants';

const styles = {
  customWidth: {
    width: '100%',
    fontSize: '5vh',
  },
  menuItemStyle: {
    width: '100%',
    fontSize: '4vh',
    lineHeight: '6vh',
  },
};

const menuItems = () => filters.map(filter => (
  <MenuItem
    key={filter}
    value={filter}
    primaryText={filter === FILTER_ALL ? `Show ${filter}` : `Show with ${filter} balance`}
  />
  ));

const Filter = ({ selected, onFilter }) => (
  <Grid fluid style={{ padding: '5vh' }}>
    <Row center="xs">
      <Col xs={12} sm={6} md={6} lg={5}>
        <DropDownMenu
          menuItemStyle={styles.menuItemStyle}
          style={styles.customWidth}
          value={selected}
          onChange={onFilter}
          iconButton={<FilterListIcon />}
        >
          {menuItems(selected)}
        </DropDownMenu>
      </Col>
    </Row>
  </Grid>
);

Filter.propTypes = {
  selected: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};


export default Filter;
