import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroButtons = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      component="nav"
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      justifyContent="center"
      marginTop={4}
      aria-label="Navigation des sections principales"
    >
      <Button
        component="a"
        variant="contained"
        size="large"
        fullWidth={!isMd}
        href="#services"
        endIcon={<ArrowForwardIcon aria-hidden="true" />}
        disableElevation
        aria-label="Explorer nos services d'entretien et réparation de robots tondeuses"
        sx={{
          backdropFilter: 'blur(10px)',
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.common.black
              : theme.palette.common.white,
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.main
              : theme.palette.success.dark,
          padding: '15px 30px',
          marginRight: isMd ? '15px' : 0,
          fontSize: '16px',
          textTransform: 'uppercase',
          border: '2px solid',
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.main
              : theme.palette.success.dark,
          '&:hover': {
            backgroundColor: 'transparent',
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.success.dark,
            border: '2px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.success.dark,
          },
          '&:focus': {
            outline: `2px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.success.light}`,
            outlineOffset: '2px',
          },
        }}
      >
        Explorer nos services de robotique
      </Button>
      <Box
        marginTop={{ xs: 2, sm: 0 }}
        marginLeft={{ sm: isMd ? '15px' : 0 }}
        width={{ xs: '100%', md: 'auto' }}
      >
        <Button
          component="a"
          variant="outlined"
          size="large"
          fullWidth={!isMd}
          href="#about"
          disableElevation
          aria-label="En savoir plus sur notre expertise en robots tondeuses Husqvarna et Gardena"
          sx={{
            backdropFilter: 'blur(10px)',
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.success.dark,
            padding: '15px 30px',
            fontSize: '16px',
            textTransform: 'uppercase',
            border: '2px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.success.dark,
            whiteSpace: 'nowrap',
            minWidth: 'auto',
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.success.dark,
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.common.black
                  : theme.palette.common.white,
              border: '2px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.success.dark,
            },
            '&:focus': {
              outline: `2px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.success.light}`,
              outlineOffset: '2px',
            },
          }}
        >
          Notre expertise robotique
        </Button>
      </Box>
    </Box>
  );
};

export default HeroButtons;
