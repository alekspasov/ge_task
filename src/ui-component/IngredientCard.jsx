import React from 'react';
import { Card, Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';

const IngredientCard = ({ingredient, handleCheckboxChange, theme}) => (
  <Card sx={{ mb: 2, p: 2, backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light }}>
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => handleCheckboxChange(e)}
            sx={{ color: theme.palette.primary.light }}
            id={ingredient}
          />
        }
        label={ingredient}
        sx={{ color: theme.palette.primary.light, flex: 1 }}
      />
    </label>
  </Card>
);

IngredientCard.propTypes = {
  ingredient: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
  theme: PropTypes.object,
};

export default IngredientCard;