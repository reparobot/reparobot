import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import footerData from '../config/footer.json';

interface FooterProps {
  copyright: string;
  TVA: string;
}

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const [footer] = useState<FooterProps>(footerData);
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site footer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <Typography
              component="p"
              align="center"
              variant="subtitle2"
              color={theme.palette.text.secondary}
              gutterBottom
              sx={{ marginTop: '25px' }}
            >
              <span itemProp="copyrightNotice">
                Copyright &copy; {currentYear} {footer.copyright}.
              </span>
            </Typography>
            <Typography
              component="p"
              align="center"
              variant="subtitle2"
              color={theme.palette.text.secondary}
              gutterBottom
            >
              <span itemProp="identifier">TVA {footer.TVA}</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
