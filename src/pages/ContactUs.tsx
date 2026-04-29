import { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { useApiPost } from '../services/api';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactMutation = useApiPost('/v1/contact');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactMutation.mutateAsync(formData);
      alert('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ py: 15, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4, fontWeight: 700 }}>
          Get in <span style={{ color: '#FFD54F' }}>Touch</span>
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '600px', mx: 'auto' }}>
          Have questions or feedback? We'd love to hear from you. Reach out to us through the form below or via our contact details.
        </Typography>

        <Stack spacing={8}>
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              {[
                { icon: <EmailIcon color="primary" />, label: 'Email', value: 'support@mythy.ai' },
                { icon: <PhoneIcon color="primary" />, label: 'Phone', value: '+1 (555) 000-0000' },
                { icon: <LocationOnIcon color="primary" />, label: 'Location', value: 'Silicon Valley, CA' },
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 4, border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'primary.light', display: 'inline-flex', mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{item.label}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.value}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Centered Large Form */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: '100%', maxWidth: '700px' }}
            >
              <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 6, bgcolor: 'background.paper', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          height: '60px',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 3 },
                          '&:hover fieldset': { borderColor: '#FFD54F' },
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          height: '60px',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 3 },
                          '&:hover fieldset': { borderColor: '#FFD54F' },
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          height: '60px',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 3 },
                          '&:hover fieldset': { borderColor: '#FFD54F' },
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 4 },
                          '&:hover fieldset': { borderColor: '#FFD54F' },
                        }
                      }}
                    />
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      type="submit"
                      disabled={contactMutation.isPending}
                      sx={{ 
                        py: 2.5, 
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        borderRadius: 3,
                        boxShadow: '0 10px 20px -10px rgba(255, 213, 79, 0.5)',
                        '&:hover': {
                          boxShadow: '0 15px 30px -12px rgba(255, 213, 79, 0.4)',
                        }
                      }}
                    >
                      {contactMutation.isPending ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactUs;
