import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Alert,
  CircularProgress
} from '@mui/material';
import { useApiPost } from '../services/api';

const DeleteAccountRequest = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestDeletionMutation = useApiPost('/auth/account/request-deletion');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    try {
      const result = await requestDeletionMutation.mutateAsync({ email });
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to connect to the server.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
          Request Account Deletion
        </Typography>

        {submitted ? (
          <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="body1">
              Your deletion request has been registered. 
              <strong> Please open the Mythy app on your mobile device to confirm the deletion.</strong>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Confirmation on mobile is required for security purposes.
            </Typography>
          </Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              To begin the process of deleting your Mythy account, please enter the email address associated with your account.
            </Typography>
            
            <Alert severity="info" sx={{ mb: 3 }}>
              After submitting this request, you must finalize the process through the <strong>Mythy Mobile App</strong> settings.
            </Alert>

            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
              required
              disabled={requestDeletionMutation.isPending}
            />

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Button
              fullWidth
              variant="contained"
              color="error"
              size="large"
              type="submit"
              disabled={requestDeletionMutation.isPending}
              sx={{ py: 1.5, fontWeight: 600 }}
            >
              {requestDeletionMutation.isPending ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Request Account Deletion'
              )}
            </Button>
          </Box>
        )}

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            What happens next?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1. You will need to confirm this request in the mobile app.<br />
            2. Once confirmed, your account will be scheduled for deletion in 7 days.<br />
            3. During these 7 days, you can cancel the deletion at any time.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default DeleteAccountRequest;
