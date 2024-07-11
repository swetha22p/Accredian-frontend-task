import React from 'react';
import { Modal, Box, TextField, Button, Typography, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Referrer Name is required'),
  referrerEmail: Yup.string().email('Invalid email').required('Referrer Email is required'),
  refereeName: Yup.string().required('Referee Name is required'),
  refereeEmail: Yup.string().email('Invalid email').required('Referee Email is required'),
  courseName: Yup.string().required('Course Name is required'),
});

const ReferralModal = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
      courseName: '',
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://accredian-backend-task-odow.onrender.com/referrals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          console.log('Referral submitted successfully');
        } else {
          console.log('Error submitting referral');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      onClose();
    },
  });
  
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'action',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Course
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            id="referrerName"
            name="referrerName"
            label="Referrer Name"
            value={formik.values.referrerName}
            onChange={formik.handleChange}
            error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
            helperText={formik.touched.referrerName && formik.errors.referrerName}
          />
          <TextField
            fullWidth
            margin="normal"
            id="referrerEmail"
            name="referrerEmail"
            label="Referrer Email"
            value={formik.values.referrerEmail}
            onChange={formik.handleChange}
            error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
            helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
          />
          <TextField
            fullWidth
            margin="normal"
            id="refereeName"
            name="refereeName"
            label="Referee Name"
            value={formik.values.refereeName}
            onChange={formik.handleChange}
            error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
            helperText={formik.touched.refereeName && formik.errors.refereeName}
          />
          <TextField
            fullWidth
            margin="normal"
            id="refereeEmail"
            name="refereeEmail"
            label="Referee Email"
            value={formik.values.refereeEmail}
            onChange={formik.handleChange}
            error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
            helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
          />
          <TextField
            fullWidth
            margin="normal"
            id="courseName"
            name="courseName"
            label="Course Name"
            value={formik.values.courseName}
            onChange={formik.handleChange}
            error={formik.touched.courseName && Boolean(formik.errors.courseName)}
            helperText={formik.touched.courseName && formik.errors.courseName}
          />
          <TextField
            fullWidth
            margin="normal"
            id="comments"
            name="comments"
            label="Comments"
            value={formik.values.comments}
            onChange={formik.handleChange}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
