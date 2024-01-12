import React, { useState } from "react";
import { Box, Button, Link, Modal, TextField, Typography } from "@mui/material";

export default function Login() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Link
        onClick={handleOpen}
        sx={{
          marginRight: "0.5rem",
          textDecoration: "none",
          color: "whitesmoke",
          fontSize: "1.3rem",
          cursor: "pointer",
        }}
      >
        Login
      </Link>
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
            <Typography variant="h5" align="center">
              Login
            </Typography>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <Button sx={{background: '#FF4820'}} variant="contained" type="submit" fullWidth>
              Login
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
