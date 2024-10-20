import React, { useState, useRef, useCallback, useMemo } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  useTheme,
  Tooltip,
} from '@mui/material';
import servicesData from '../config/services.json';
import ServiceForm from './ServiceForm';

export interface ServicesProps {
  name: string;
  description: string;
  image: string;
  formFields: FormField[];
  basePrice?: number;
}

interface FormField {
  label: string;
  type: string;
  options?: string[];
  optional?: boolean;
  isRequired: boolean;
  minFuturDateRange?: number;
  price?: number;
}

const Services: React.FC = () => {
  const theme = useTheme();
  const [services] = useState<ServicesProps[]>(servicesData);
  const [selectedService, setSelectedService] = useState<ServicesProps | null>(
    null,
  );
  const [isFormEdited, setIsFormEdited] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = useCallback((service: ServicesProps) => {
    setSelectedService(service);
  }, []);

  
 

  const closeForm = useCallback(() => {
    setSelectedService(null);
    setIsFormEdited(false);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);
 const handleCloseForm = useCallback(
    (force?: boolean) => {
      if (isFormEdited && !force) {
        setIsConfirmDialogOpen(true);
      } else {
        closeForm();
      }
    },
    [isFormEdited, closeForm]  // Add closeForm to the dependency array
  );
  const handleConfirmClose = useCallback(() => {
    setIsConfirmDialogOpen(false);
    closeForm();
  }, [closeForm]);

  const handleCancelClose = useCallback(() => {
    setIsConfirmDialogOpen(false);
  }, []);

  const renderServiceCard = useCallback(
    (item: ServicesProps, i: number) => (
      <Grid item xs={12} sm={6} key={i}>
        <Tooltip title="Cliquez pour ouvrir le formulaire" followCursor>
          <Box
            component="article"
            itemScope
            itemType="https://schema.org/Service"
            padding={4}
            width={1}
            height={1}
            bgcolor={theme.palette.background.paper}
            sx={{
              '&:hover': {
                bgcolor: theme.palette.background.default,
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.common.black,
              },
              cursor: 'pointer',
              backgroundColor:
                selectedService?.name === item.name
                  ? theme.palette.action.selected
                  : theme.palette.background.paper,
              outline: 'none',
              '&:focus': {
                outline: `2px solid ${
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.light
                    : theme.palette.success.light
                }`,
                outlineOffset: '2px',
              },
            }}
            onClick={() => handleServiceClick(item)}
            role="button"
            tabIndex={0}
            aria-label={`Ouvrir le formulaire pour ${item.name}`}
            // onKeyPress={(e) => {
            //   if (e.key === 'Enter' || e.key === ' ') {
            //     handleServiceClick(item);
            //   }
            // }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600 }}
              itemProp="name"
            >
              {item.name}
            </Typography>
            <Typography color="inherit" itemProp="description">
              {item.description}
            </Typography>
            <Box display="block" width={1} height={1}>
              <Card
                sx={{
                  width: 1,
                  height: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={`Image pour ${item.name}`}
                  width="100"
                  height="auto"
                  loading="lazy"
                  itemProp="image"
                  sx={{
                    height: 320,
                    objectFit: 'cover',
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'brightness(0.9)',
                    marginTop: 4,
                  }}
                />
              </Card>
            </Box>
          </Box>
        </Tooltip>
      </Grid>
    ),
    [theme, selectedService, handleServiceClick],
  );

  const memoizedServices = useMemo(
    () => services.map(renderServiceCard),
    [services, renderServiceCard],
  );

  return (
    <section
      id="services"
      ref={topRef}
      aria-labelledby="services-title"
      itemScope
      itemType="https://schema.org/Service"
    >
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          paddingX: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            id="services-title"
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
            itemProp="headline"
          >
            Services
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
            Nous vous proposons une large gamme de services pour l&apos;entretien de
            votre robot.
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {memoizedServices}
          </Grid>
          <Dialog
            open={!!selectedService}
            onClose={() => handleCloseForm()}
            maxWidth="md"
            aria-labelledby="service-form-dialog-title"
            sx={{
              '& .MuiPaper-root': {
                background: 'transparent',
              },
            }}
          >
            {selectedService && (
              <ServiceForm
                service={selectedService}
                onClose={handleCloseForm}
                onFormEdit={setIsFormEdited}
              />
            )}
          </Dialog>
          <Dialog
            open={isConfirmDialogOpen}
            onClose={handleCancelClose}
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
          >
            <DialogTitle id="confirm-dialog-title">
              Confirmer la fermeture
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="confirm-dialog-description">
                Vous avez des modifications non enregistrées. Êtes-vous sûr de
                vouloir fermer le formulaire ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancelClose} color="primary">
                Annuler
              </Button>
              <Button onClick={handleConfirmClose} color="primary" autoFocus>
                Confirmer
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </section>
  );
};

export default React.memo(Services);
