import { useState } from 'react';
import Button from '@mui/material/Button';

function ShopButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert('Button Clicked!');
  };

  return (
    <Button 
      variant="contained" 
      color="primary"
      sx={{ 
        mt: 2, 
        fontSize: '1rem', 
        fontWeight: 'bold',
        '&:hover': { bgcolor: 'primary.dark' }
      }}
      onClick={handleClick}
    >
      Shop Now
    </Button>
  );
}

export default ShopButton;
