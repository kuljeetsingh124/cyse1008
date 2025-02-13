import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function HomeHeroCYSE1008() {
  return (
  <>
    {/* <div>Hello World</div> */}
    <Box
        component="h1"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: 680,
          fontFamily: theme.typography.fontSecondaryFamily,
          [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
        }}
      >
        <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
          KULJEET
        </Box>
        CANDY
        <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            ml: { xs: 0.75, md: 1, xl: 1.5 },
          }}
        >
          STORE
        </Box>
      </Box>
    <Button>Hi im a button</Button>
  </>
  );
}