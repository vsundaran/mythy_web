import { Container, Typography, Box, Grid, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: 'background.default', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: { xs: 2, md: 4 }, fontWeight: 700 }}>
          Get in <span style={{ color: '#FFD54F' }}>Touch</span>
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: { xs: 4, md: 8 }, maxWidth: '600px', mx: 'auto' }}>
          Have questions or feedback? We'd love to hear from you. Reach out to us through our contact details below.
        </Typography>

        <Stack spacing={4}>
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              {[
                { icon: <EmailIcon color="primary" />, label: 'Email', value: 'contact@mythy.dev' },
                { icon: <PhoneIcon color="primary" />, label: 'Phone', value: '+91 7338833574' },
                { icon: <LocationOnIcon color="primary" />, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 1, border: '1px solid rgba(255, 255, 255, 0.05)', height: '100%' }}>
                    <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'primary.light', display: 'inline-flex', mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{item.label}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-all' }}>{item.value}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactUs;
