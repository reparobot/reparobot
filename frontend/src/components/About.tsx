import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import aboutData from '../config/about.json';

interface AboutProps {
  value: number;
  suffix: string;
  description: string;
}

const About = (): JSX.Element => {
  const theme = useTheme();
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const setViewPortVisibility = (isVisible: boolean) => {
    if (!viewPortEntered) {
      setViewPortEntered(isVisible);
    }
  };

  const [about] = useState<AboutProps[]>(aboutData);

  return (
    <section id="about" aria-labelledby="about-title">
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 12,
          paddingX: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            id="about-title"
            variant="h2"
            component="h2"
            align="center"
            color={theme.palette.text.primary}
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              textTransform: 'uppercase',
              marginBottom: 5,
            }}
          >
            À propos
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component="div"
                align="center"
                color={theme.palette.text.secondary}
                marginTop={theme.spacing(1)}
                gutterBottom
              >
                <p>
                  Entretien et Réparation Robot Tondeuse Husqvarna & Gardena est
                  votre expert en robotique pour l&apos;entretien, la réparation et
                  la maintenance des robots tondeuses des marques Husqvarna et
                  Gardena. Forte de plusieurs années d&apos;expérience, notre
                  entreprise propose une large gamme de services spécialisés,
                  incluant l&apos;entretien saisonnier, la réparation de composants
                  défectueux, ainsi que des services de récupération et de
                  protection à domicile pour vos appareils.
                </p>
                <p>
                  Nous nous engageons à prolonger la durée de vie de vos robots
                  tondeuses tout en assurant une efficacité optimale. Nos
                  experts effectuent des vérifications approfondies, des
                  nettoyages complets, et des ajustements précis pour que vos
                  robots tondeuses maintiennent la beauté et la propreté de vos
                  espaces extérieurs tout au long de l&apos;année.
                </p>
                <p>
                  Outre les services de réparation, nous offrons également une
                  gamme de pièces détachées et d&apos;accessoires indispensables pour
                  l&apos;entretien de vos robots tondeuses. Parmi nos articles, vous
                  trouverez des lames de rechange, des boîtiers solaires pour
                  optimiser la performance énergétique de vos équipements, et
                  bien d&apos;autres composants.
                </p>
                <p>
                  Chez Entretien et Réparation Robot Tondeuse, notre mission est
                  de vous offrir un service client exceptionnel, avec des
                  diagnostics rapides, des interventions sur mesure, et une
                  prise en charge complète pour tous vos besoins en matière de
                  robotique extérieure.
                </p>
                <p>
                  Nous comprenons l&apos;importance d&apos;un espace vert parfaitement
                  entretenu, et c&apos;est pourquoi nous nous efforçons d&apos;offrir des
                  services de qualité supérieure, que vous soyez un particulier
                  ou une entreprise. Que vous cherchiez à prolonger la durée de
                  vie de votre robot tondeuse, à améliorer ses performances ou à
                  obtenir des conseils d&apos;experts, nous sommes là pour vous
                  accompagner. Contactez-nous dès aujourd&apos;hui pour un devis
                  gratuit ou pour en savoir plus sur nos solutions sur mesure.
                </p>
              </Typography>
            </Grid>
            {about.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={1}
                  display="flex"
                  flexDirection="column"
                  boxShadow={0}
                  aria-label={`Statistic ${item.value}${item.suffix}`}
                >
                  <CardContent
                    sx={{
                      padding: { sm: 4 },
                    }}
                  >
                    <Box
                      marginBottom={4}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Typography
                        variant="h4"
                        color="primary"
                        gutterBottom
                        component="h3"
                      >
                        <Box
                          fontWeight={600}
                          sx={{
                            color:
                              theme.palette.mode === 'dark'
                                ? theme.palette.primary.main
                                : theme.palette.success.dark,
                          }}
                        >
                          <VisibilitySensor
                            onChange={setViewPortVisibility}
                            partialVisibility
                            delayedCall
                          >
                            <CountUp
                              duration={2}
                              end={viewPortEntered ? item.value : 0}
                              start={0}
                              suffix={item.suffix}
                            />
                          </VisibilitySensor>
                        </Box>
                      </Typography>
                      <Typography
                        component="p"
                        color={theme.palette.text.secondary}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default About;
