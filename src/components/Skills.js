import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const Skills = () => {
  return (
    <Container
      id="skills"
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
            sx={{ marginBottom: 7, fontFamily: "Times New Roman" }}
          >
            SKILLS
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Paper
                sx={{
                  width: 240,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "center",
                }}
                elevation={0}
                variant="outlined"
              >
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Programming" />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText secondary="Javascript" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Python" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="HTML" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="CSS" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="C" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  width: 240,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "center",
                }}
                elevation={0}
                variant="outlined"
              >
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <BuildCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tools" />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText secondary="React" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="MySQL" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="AWS Cloud" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Visual Studio" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Microsoft Office" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  width: 240,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "center",
                }}
                elevation={0}
                variant="outlined"
              >
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <SentimentVerySatisfiedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Soft Skills" />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText secondary="Self-Motivation" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Communication" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Customer Service" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Problem Solving" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Perseverance" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;

//쓸 줄 아는 언어, 도구, 툴
