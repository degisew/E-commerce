import React from 'react'
import { List, ListItem, ListItemText, Typography} from '@mui/material';
const Review = ({ generatedToken  }) => {
  return <>
  <Typography variant='h6' gutterBottom>Order Summary</Typography>
  <List disablePadding>
    { generatedToken.live.line_items.map((item) => (
        <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <Typography variant='body2'>{item.line_total.formatted_with_symbol}</Typography>
        </ListItem>
    ))}
    <ListItem>
        <ListItemText primary='Total' />
        <Typography variant='subtitle1'>{generatedToken.live.subtotal.formatted_with_symbol}</Typography>
    </ListItem>
  </List>
  </>;
};

export default Review
