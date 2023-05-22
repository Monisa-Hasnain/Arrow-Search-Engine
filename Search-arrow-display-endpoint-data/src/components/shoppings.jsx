import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export const Shoppings = () => {
  return (
  <Card>
    <CardContent>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <ShoppingBasketIcon sx={{ fontSize: 40, marginRight: '0.5rem' }} />
        <Typography variant="h6">Shopping</Typography>
      </div>
      <Typography variant="body1">
        This Shopping tab is not operational yet!
      </Typography>
    </CardContent>
  </Card>
  )
}
