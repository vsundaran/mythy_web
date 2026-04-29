import { Container, Typography, Box, Paper, Divider } from '@mui/material';

const TermsConditions = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 1, bgcolor: 'background.paper' }}>
          <Typography variant="h2" gutterBottom color="primary">
            Terms & Conditions
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: April 27, 2026
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            1. Agreement to Terms
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Mythy.dev (“we,” “us” or “our”), concerning your access to and use of the Mythy application.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            2. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Unless otherwise indicated, the App is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the App (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            3. User Representations
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            By using the App, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            4. Prohibited Activities
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            You may not access or use the App for any purpose other than that for which we make the App available. The App may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the App.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            In order to resolve a complaint regarding the App or to receive further information regarding use of the App, please contact us at contact@mythy.dev.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsConditions;
