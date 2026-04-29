import { Container, Typography, Box, Paper, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 1, bgcolor: 'background.paper' }}>
          <Typography variant="h2" gutterBottom color="primary">
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: April 27, 2026
          </Typography>
          
          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Welcome to Mythy.dev. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            2. Information We Collect
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information. We also collect certain information automatically when you visit, use or navigate the App.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            3. How We Use Your Information
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            4. Will Your Information Be Shared With Anyone?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            5. Your Privacy Rights
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            If you have questions or comments about this policy, you may email us at contact@mythy.dev.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
