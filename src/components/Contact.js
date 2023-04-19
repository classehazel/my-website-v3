import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Container
      id="contact"
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth={100}
    >
      <Box
        sx={{
          marginY: 12,
          width: 850,
          minHeight: 500,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ padding: 3, fontFamily: "Times New Roman" }}
          >
            CONTACT
          </Typography>
          <Paper
            sx={{
              width: 500,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            elevation={0}
          >
            <Box sx={{ marginY: 3, width: 300 }}>
              <Grid container sx={{ marginBottom: 1 }}>
                <Grid item xs={3}>
                  <PhoneIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle1">
                    +1 (469) - 487 - 3318
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <EmailIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle1">
                    classehazel @ gmail.com
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ marginY: 3 }}>
                <Link
                  href="https://www.linkedin.com/in/hyunseo-choi/"
                  color={"#000"}
                  paddingRight={5}
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
                <Link
                  href="https://github.com/classehazel"
                  color={"#000"}
                  paddingRight={5}
                >
                  <GitHubIcon fontSize="large" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCVQ6RCiswpPc3wQZTGRoZCQ"
                  color={"#000"}
                >
                  <YouTubeIcon fontSize="large" />
                </Link>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

//이메일주소, 링크드인, 전화번호
