import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export function HomeHeroCYSE1008() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert('Button Clicked!');
  };

  return (
    <>
      {/* <div>Hello World</div> */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          p: 2, 
          textAlign: 'center', 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          borderRadius: '8px'
        }}
      >
        Kuljeet Clothing
      </Box>
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
    </>
  );
}
