import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import headerData from '../config/header.json';
import { HeaderProps } from './Header';
import { Logo } from '../components/Logo';

interface Props {
  onClose: () => void;
  open: boolean;
}

const Sidebar = ({ open, onClose }: Props): JSX.Element => {
  const theme = useTheme();
  const [header] = useState<HeaderProps>(headerData);

  return (
    <Drawer
      disableRestoreFocus // to avoid scroll top on close: https://github.com/mui/material-ui/issues/10756
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant="temporary"
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.default,
          width: 256,
        },
      }}
    >
      <Box
        component="nav"
        height="100%"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Box width={1}>
          <Link to="/" style={{ textDecoration: 'none' }} aria-label="Home">
            <IconButton size="large" disabled>
              <Logo isDark={theme.palette.mode === 'dark'} />
              <Typography
                variant="h1"
                component="span"
                sx={{
                  flexGrow: 1,
                  color: theme.palette.text.primary,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  marginLeft: 1,
                  fontSize: '1.25rem', // Equivalent to h6
                }}
              >
                {header.title}
              </Typography>
            </IconButton>
          </Link>
        </Box>
        <Box
          component="nav"
          padding={2}
          role="navigation"
          aria-label="Page Sections"
        >
          <Box paddingY={2}>
            <CustomButton href="#services" text="Services" />
            <Box paddingY={1}>
              <CustomButton href="#about" text="À propos" />
            </Box>
            <Box paddingY={1}>
              <CustomButton href="#contact" text="Contact" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
