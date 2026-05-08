"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";

export const ServerWarningModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the warning in this session
    const hasSeenWarning = sessionStorage.getItem("server-warning-seen");
    if (!hasSeenWarning) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    // Save to session storage so it doesn't show up again in the same session
    sessionStorage.setItem("server-warning-seen", "true");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="server-warning-title"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: "16px",
          maxWidth: "450px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(4px)",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ pt: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 152, 0, 0.1)",
              borderRadius: "50%",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WarningAmberIcon sx={{ fontSize: 48, color: "#ff9800" }} />
          </Box>

          <Typography
            id="server-warning-title"
            variant="h3"
            sx={{
              fontSize: "1.5rem",
              mb: 1,
            }}
          >
            Server Waking Up
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Our server is currently on a free tier. If it hasn't been used recently,
            it may take <strong>1-3 minutes</strong> to initialize. We appreciate
            your patience while we get everything ready for you!
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2, pt: 2, px: 3 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          fullWidth
          size="large"
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 800,
            textTransform: "uppercase",
            fontStyle: "italic",
          }}
        >
          Got it, I'll wait
        </Button>
      </DialogActions>
    </Dialog>
  );
};
