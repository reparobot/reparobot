import { Box } from '@mui/material';

export const Logo = ({ isDark }: { isDark: boolean }): JSX.Element => {
  const logoSrc = isDark
    ? '/images/logo/logo-dark-70x70.png'
    : '/images/logo/logo-70x70.png';
  const logoAlt = 'Entretien et Réparation Robot Tondeuse Husqvarna & Gardena';

  return (
    <Box
      component="img"
      src={logoSrc}
      alt={logoAlt}
      sx={{
        height: 40,
        width: 40,
        objectFit: 'contain',
      }}
      loading="eager"
    />
  );
};
