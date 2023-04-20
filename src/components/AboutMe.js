import { Box, Container, Paper, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Image from "../img/img_1.jpg";
import ResumePdf from "../Resume.pdf";

const AboutMe = () => {
  return (
    <Container
      id="aboutme"
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
            sx={{ marginBottom: 5, fontFamily: "Times New Roman" }}
          >
            HYUNSEO CHOI
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper
                sx={{
                  backgroundImage: `url(${Image})`,
                  backgroundSize: 300,
                  backgroundPosition: "center",
                  width: 250,
                  height: 250,
                  borderRadius: 50,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Paper
                sx={{
                  width: 550,
                  height: 250,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                }}
                elevation={0}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ margin: 3 }}>
                    Hi, my name is Hyunseo Choi (a.k.a Hazel) and I am a
                    front-end developer based in Allen, Texas. I graduated from
                    Korea University in Seoul, South Korea, with Bachelor's
                    Degree in Computer Science and Engineering in 2020. Besides
                    coding, my interests include outdoor activities, Pilates,
                    reading books, and editing videos for my own YouTube
                    Channel. One of my core values is self-improvement, and I
                    keep pursuing it by learning new things whenever necessary.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 3, fontWeight: "bold" }}
                  >
                    Resume:
                    <a
                      href={ResumePdf}
                      download="Resume-PDF-document"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        sx={{
                          "&:hover": {
                            backgroundColor: "#eaeaea",
                          },
                          color: "grey",
                          marginLeft: 1,
                        }}
                      >
                        Download
                      </Button>
                    </a>
                    {/* <Button
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginLeft: 1,
                      }}
                      href="/Resume.pdf"
                    >
                      Download
                    </Button> */}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 3, fontWeight: "bold" }}
                  >
                    If you want to see my projects, please check below!
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;

//사진, 자기소개
