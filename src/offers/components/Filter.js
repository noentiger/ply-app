import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-app-flexbox-grid/lib';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { filters } from '../constants';

const menuItems = values => filters.map(filter => (
  <MenuItem
    key={filter}
    insetChildren
    checked={values && values.includes(filter)}
    value={filter}
    primaryText={filter}
  />
  ));

const Filter = ({ selected, onFilter }) => (
  <Grid>
    <Row>
      <Col xs={12} sm={5} md={4} lg={3}>
        <SelectField
          hintText="Filter by skills"
          value={selected}
          onChange={onFilter}
          fullWidth
        >
          {menuItems(selected)}
        </SelectField>
      </Col>
    </Row>
  </Grid>
);

Filter.propTypes = {
  selected: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};


export default Filter;
