import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { filters } from '../constants';

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
    primaryText={filter}
  />
  ));

const Filter = ({ selected, onFilter }) => (
  <Grid style={{ padding: '5vh' }}>
    <Row center="xs">
      <Col xs={12} sm={6} md={5} lg={4}>
        <DropDownMenu
          menuItemStyle={styles.menuItemStyle}
          style={styles.customWidth}
          value={selected}
          onChange={onFilter}
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
