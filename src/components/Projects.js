import { Box, Paper, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Image1 from "../img/img_2.jpg";
import Image2 from "../img/img_3.jpg";
import Image3 from "../img/img_4.jpg";

const Projects = () => {
  return (
    <Container
      id="projects"
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
            PROJECTS
          </Typography>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid
              item
              xs={4}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Paper
                sx={{
                  backgroundImage: `url(${Image3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 250,
                  height: 180,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Paper
                sx={{
                  width: 550,
                  height: 220,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                }}
                elevation={0}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginTop: 3, marginLeft: 3, fontWeight: "bold" }}
                  >
                    MY PORTFOLIO WEBSITE
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 3, marginRight: 3 }}
                  >
                    You are here right now! This is my portfolio website that
                    displays my web developing accomplishments on a single page.
                    I will keep updating this page as I gain more experience and
                    acquire new skills.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginY: 1, marginLeft: 3 }}
                  >
                    Used: React, Javascript, JSX, MUI, HTML, CSS
                  </Typography>
                  <Box>
                    <Button
                      href="http://classehazel.github.io/portfolio/"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginBottom: 2,
                        marginLeft: 33,
                      }}
                    >
                      View Website
                    </Button>
                    <Button
                      href="https://github.com/classehazel/portfolio"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginBottom: 2,
                        marginLeft: 1,
                      }}
                    >
                      Source Code
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid
              item
              xs={4}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Paper
                sx={{
                  backgroundImage: `url(${Image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 250,
                  height: 180,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Paper
                sx={{
                  width: 550,
                  height: 220,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                }}
                elevation={0}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginTop: 3, marginLeft: 3, fontWeight: "bold" }}
                  >
                    XERCISE: Fitness Club Browsing Website
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 3, marginRight: 3 }}
                  >
                    This website provides an overview of XERCISE Fitness Club,
                    including four sections that cover membership fees,
                    programs, gallery, and location information.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginY: 1, marginLeft: 3 }}
                  >
                    Used: React, Javascript, JSX, MUI, HTML, CSS
                  </Typography>
                  <Box>
                    <Button
                      href="https://classehazel.github.io/xercise-demo/"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginBottom: 2,
                        marginLeft: 33,
                      }}
                    >
                      View Website
                    </Button>
                    <Button
                      href="https://github.com/classehazel/xercise-demo"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginBottom: 2,
                        marginLeft: 1,
                      }}
                    >
                      Source Code
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid
              item
              xs={4}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Paper
                sx={{
                  backgroundImage: `url(${Image2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 250,
                  height: 180,
                }}
              ></Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper
                sx={{
                  width: 550,
                  height: 220,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                }}
                elevation={0}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginTop: 3, marginLeft: 3, fontWeight: "bold" }}
                  >
                    SHOPPY: E-Commerce Business Website
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 3, marginRight: 3 }}
                  >
                    This website showcases the products of SHOPPY, a virtual
                    e-commerce business. It includes product listings, an 'about
                    us' section, and login/sign-up features.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginLeft: 3, marginRight: 3 }}
                  >
                    'Cart' page is going to be updated soon.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginY: 1, marginLeft: 3 }}
                  >
                    Used: React, Javascript, JSX, MUI, HTML, CSS
                  </Typography>
                  <Box>
                    <Button
                      href="https://classehazel.github.io/e-commerce-demo/"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginBottom: 2,
                        marginLeft: 33,
                      }}
                    >
                      View Website
                    </Button>
                    <Button
                      href="https://github.com/classehazel/e-commerce-demo"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#eaeaea",
                        },
                        color: "grey",
                        marginBottom: 2,
                        marginLeft: 1,
                      }}
                    >
                      Source Code
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;

//웹사이트 만든 거 두 개 캡쳐, 설명 쓰고 링크 걸기
