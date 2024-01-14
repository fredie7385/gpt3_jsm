import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>SignUp</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#e8eaf6",
            border: "2px solid #000",
            boxShadow: 24,
            borderEndEndRadius:'2rem',
            borderStartStartRadius:'2rem',
            p: 4,
          }}
        >
          <Box
            component="form"
            sx={{
              margin: "0 auto",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h5" align="center" marginBottom={3}>
              Sign Up
            </Typography>
            <TextField fullWidth label="Name" margin="normal" required />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              onClick={handleClose}
              sx={{background: '#FF4820'}}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
