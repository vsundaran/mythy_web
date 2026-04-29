import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import heroImage from '../assets/Home_Banner.svg';

const LandingPage = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          position: 'relative',
          pt: { xs: 12, md: 10 },
          pb: { xs: 8, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom sx={{ color: 'white' }}>
                  Unmask the <span style={{ color: '#FFD54F' }}>Fiction</span>
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: { xs: 3, md: 4 } }}>
                  Dive into the world of truth with Mythy. Our AI-powered platform helps you debunk myths, verify facts, and explore the unknown with confidence.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{ px: { xs: 3, md: 4 }, py: 1.5, fontSize: { xs: '0.9rem', md: '1.1rem' } }}
                    onClick={() => window.open('https://play.google.com/store', '_blank')}
                  >
                    Download App
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    sx={{ px: { xs: 3, md: 4 }, py: 1.5, fontSize: { xs: '0.9rem', md: '1.1rem' } }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Mythy App Illustration"
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    display: 'block',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 0 20px rgba(255, 213, 79, 0.3))',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: { xs: 4, md: 8 } }}>
            Why Choose <span style={{ color: '#FFD54F' }}>Mythy?</span>
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'AI-Powered Analysis',
                desc: 'Our advanced AI models analyze complex information to provide you with clear, evidence-based answers.',
                icon: <VerifiedIcon sx={{ fontSize: 40, color: '#FFD54F' }} />,
              },
              {
                title: 'Instant Fact-Checking',
                desc: 'Get immediate responses to your questions about myths, urban legends, and popular misconceptions.',
                icon: <SearchIcon sx={{ fontSize: 40, color: '#FFD54F' }} />,
              },
              {
                title: 'Trusted Sources',
                desc: 'We cross-reference data from reliable scientific and historical databases to ensure accuracy.',
                icon: <InfoIcon sx={{ fontSize: 40, color: '#FFD54F' }} />,
              },
            ].map((feature, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'border-color 0.3s ease',
                      '&:hover': {
                        borderColor: '#FFD54F',
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'primary.main', color: 'black' }}>
        <Container maxWidth="md">
          <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Ready to Discover the Truth?
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Join thousands of users who are debunking myths and expanding their knowledge every day.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'black',
                color: 'white',
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '1rem', md: '1.2rem' },
                '&:hover': { bgcolor: '#333' },
              }}
              onClick={() => window.open('https://play.google.com/store', '_blank')}
            >
              Get Started Now
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
