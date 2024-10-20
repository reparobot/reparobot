import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface SpacerProps extends BoxProps {
  size?: number | string;
  role?: string;
  'aria-hidden'?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({
  sx = [],
  size,
  role = 'separator',
  'aria-hidden': ariaHidden = true,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      role={role}
      aria-hidden={ariaHidden}
      sx={[
        {
          backgroundColor: theme.palette.background.default,
          height: size || 'auto',
          width: size || '100%',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default React.memo(Spacer);
