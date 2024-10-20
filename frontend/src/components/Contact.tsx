import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

import Map from './Map';
import contactData from '../config/contact.json';

interface ContactProps {
  address: string;
  email: string;
  phone: string;
  latitude: number;
  longitude: number;
}

const Contact = (): JSX.Element => {
  const theme = useTheme();

  const [contact] = useState<ContactProps[]>(contactData);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          paddingX: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            id="contact-title"
            variant="h2"
            component="h2"
            align="center"
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'uppercase',
            }}
            itemProp="name"
          >
            Contact
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            align="center"
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}
            itemProp="description"
          >
            N&apos;hésitez pas à nous contacter pour toute information.
          </Typography>
        </Box>
        {contact.slice(0, 1).map((item, i) => (
          <Container key={i}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'brightness(0.9)',
                  }}
                >
                  <Map
                    coordinates={[item.latitude, item.longitude]}
                    zoom={13}
                    aria-label={`Map location of ${item.address}`}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  marginTop={15}
                  marginBottom={6}
                >
                  <address
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    style={{ margin: 0 }}
                  >
                    <Box
                      component={ListItem}
                      disableGutters
                      width="auto"
                      padding={0}
                      marginLeft={5}
                      marginBottom={2}
                      aria-label="Phone number"
                    >
                      <PhoneIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark'
                              ? theme.palette.primary.main
                              : theme.palette.success.dark,
                          width: 25,
                          height: 25,
                          marginRight: 1,
                        }}
                        aria-hidden="true"
                      />
                      <ListItemText
                        primary={
                          <a
                            href={`tel:${item.phone}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            title={`Call us at ${item.phone}`}
                          >
                            {item.phone}
                          </a>
                        }
                        sx={{
                          '&:hover': {
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          },
                        }}
                      />
                    </Box>
                    <Box
                      component={ListItem}
                      disableGutters
                      width="auto"
                      padding={0}
                      marginLeft={5}
                      marginBottom={2}
                      aria-label="Email address"
                    >
                      <EmailIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark'
                              ? theme.palette.primary.main
                              : theme.palette.success.dark,
                          width: 25,
                          height: 25,
                          marginRight: 1,
                        }}
                        aria-hidden="true"
                      />
                      <ListItemText
                        primary={
                          <a
                            href={`mailto:${item.email}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            title={`Email us at ${item.email}`}
                          >
                            {item.email}
                          </a>
                        }
                        sx={{
                          '&:hover': {
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          },
                        }}
                      />
                    </Box>
                    <Box
                      component={ListItem}
                      width="auto"
                      padding={0}
                      marginLeft={5}
                      marginBottom={1}
                      disableGutters
                      aria-label="Physical address"
                    >
                      <LocationIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark'
                              ? theme.palette.primary.main
                              : theme.palette.success.dark,
                          width: 25,
                          height: 25,
                          marginRight: 1,
                        }}
                        aria-hidden="true"
                      />
                      <ListItemText
                        primary={
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            title={`Find us at ${item.address}`}
                          >
                            {item.address}
                          </a>
                        }
                        sx={{
                          '&:hover': {
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          },
                        }}
                      />
                    </Box>
                  </address>
                </Box>
              </Grid>
            </Grid>
          </Container>
        ))}
      </Box>
    </section>
  );
};

export default Contact;
