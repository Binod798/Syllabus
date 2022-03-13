import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import "./body.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function Body() {
  return (
    <>
      <section className="bodyContainer">
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <div className="bodyContainer__GridItem1">
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#1565c0",
                  fontWeight: "700",
                }}
              >
                Padandaas
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: "#1565c0",
                  fontWeight: "700",
                }}
              >
                Education 4 Everyone
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  fontSize: "1.3rem",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                We are E-learning platform that provides all the learning
                materials (Notes, OLD Question collection, Solutions, MCQs,
                Syllabus & Mark distribution) of all subjects free of cost for
                everyone.
              </Typography>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                sx={{ padding: "8px", margin: "1rem" }}
              >
                Explore
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="../images/padandaas2.png" className="studentImg" />
          </Grid>
        </Grid>
      </section>
      <section className="service">
        <div className="serviceContainer__GridItem2">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className="service__container__img">
                <img src="../images/student.jpg" className="studentImg1" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                sx={{
                  paddingLeft: "15%",
                  color: "#1565c0",
                  fontWeight: "700",
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  width: "80%",
                  color: "black",
                  fontSize: "1.2rem",
                  paddingTop: "20px",
                  textAlign: "center",
                }}
              >
                Padandaas is a visionary project with the ambitions of creating
                new wave in Nepalese Education System. We are taking a step in a
                time, currently we are focusing on SEE and +2 level. After fully
                cementing those level, we are looking forward to engineering ,
                BBA ,BCA, BSC CSIT and all other courses of all the universities
                that are currently been taught in Nepal.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="serviceContainer__card">
          <Grid container rowSpacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 220, height: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={process.env.PUBLIC_URL + "/images/book.png"}
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#1565c0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Notes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Chapterwise handwritten pdf notes, MCQs of all subjects
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 220, height: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/book2.png"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#1565c0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      OLD Questions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Chapterwise & Yearwise old question collection & their
                      complete solutions
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 220, height: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/syllabus.png"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#1565c0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Syllabus & Grid
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete syllabus & chapterwise mark distribution of all
                      subjects
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 220, height: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/teacher.png"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#1565c0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Interaction with Teachers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Students & Teachers forums for online discussion
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 220, height: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/carrer.png"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#1565c0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Carrer Councelling
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Entrance Preperation, Skills Training, Colleges & Carrers
                      recommendations
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 220, height: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/news.png"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#1565c0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Padandaas News
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      All the latest information & announcements regarding exam,
                      results, admission
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}

export default Body;
