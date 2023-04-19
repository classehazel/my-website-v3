import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "#fff",
          height: 60,
          boxShadow: "1",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Toolbar>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#f1f1f1",
              },
              color: "black",
              fontSize: "large",
              fontFamily: "Times New Roman",
            }}
          >
            <Link to="aboutme" smooth={true} offset={0} duration={500}>
              HYUNSEO CHOI
            </Link>
          </Button>
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
                color: "black",
                fontSize: "medium",
                fontFamily: "Times New Roman",
              }}
            >
              <Link to="aboutme" smooth={true} offset={0} duration={500}>
                ABOUT
              </Link>
            </Button>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
                color: "black",
                fontSize: "medium",
                fontFamily: "Times New Roman",
              }}
            >
              <Link to="projects" smooth={true} offset={0} duration={500}>
                PROJECTS
              </Link>
            </Button>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
                color: "black",
                fontSize: "medium",
                fontFamily: "Times New Roman",
              }}
            >
              <Link to="skills" smooth={true} offset={0} duration={500}>
                SKILLS
              </Link>
            </Button>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
                color: "black",
                fontSize: "medium",
                fontFamily: "Times New Roman",
              }}
            >
              <Link to="contact" smooth={true} offset={50} duration={500}>
                CONTACT
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

//NAME, aboutme, skills, project, contact
