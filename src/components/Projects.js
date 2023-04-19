import { Box, Paper, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Image1 from "../img/img_2.jpg";
import Image2 from "../img/img_3.jpg";

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
                    This website is to give overall information about XERCISE
                    Fitness Club. It contains 4 different sections, such as
                    membership fee, program, gallery, and location information.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginY: 1, marginLeft: 3 }}
                  >
                    Used: React, Javascript, JSX, MUI, HTML, CSS
                  </Typography>
                  <Box>
                    <Button
                      href="https://classehazel.github.io/my-website-v2/"
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
                      href="https://github.com/classehazel/my-website-v2"
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
                    This website shows the products of SHOPPY, which is a
                    virtual E-commerce business. It has products, about us,
                    cart, log-in and sign-up features.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginY: 1, marginLeft: 3 }}
                  >
                    Used: React, Javascript, JSX, MUI, HTML, CSS
                  </Typography>
                  <Box>
                    <Button
                      href="https://classehazel.github.io/my-website-v1/"
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
                      href="https://github.com/classehazel/my-website-v1"
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
