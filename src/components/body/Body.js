import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import './body.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


function Body() {
  return (
    <>
      <section className="bodyContainer">
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <div className="bodyContainer__GridItem1">
              <Typography variant='h4' sx={{ textAlign: 'center', color: "#1565c0", fontWeight: "700" }}>
                Complete Schools and +2 study materials
              </Typography>
              <Typography variant="body1" sx={{ color: '#999999', fontSize: "1.3rem", textAlign: "center", paddingTop: "20px" }}>
                We are the best all in one cloud-based school software and digital learning system
                for growing big and ambitious name in education.
              </Typography>
              <Button size="medium" variant="contained" color="primary" sx={{ padding: "8px", margin: "1rem" }}> Browse Courses</Button>

            </div>

          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="../images/student.jpg" className="studentImg" />
          </Grid>

        </Grid>

      </section>
      <section className="service">
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <div className="serviceContainer__GridItem2">
              <Typography variant='h4' sx={{ textAlign: 'center', color: "#1565c0", fontWeight: "700" }}>
                Our Services
              </Typography>
              <Typography variant="body1" sx={{ color: '#999999', fontSize: "1.3rem", textAlign: "center", paddingTop: "20px" }}>
                We are the best all in one cloud-based school software and digital learning system
                for growing big and ambitious name in education.
              </Typography>
            </div>

          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="serviceContainer__card">
              <Card sx={{ maxWidth: 220,height:220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/book.png"
                    alt="green iguana"
                    sx={{objectFit:'contain'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'#1565c0',fontWeight:'bold'}}>
                      School Study Material
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Note and Question Bank for school level student
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 220,height:220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/book2.png"
                    alt="green iguana"
                    sx={{objectFit:'contain'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'#1565c0',fontWeight:'bold'}}>
                      +2 Study Material
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Note and Question Bank for +2 level student
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 220,height:220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/teacher.png"
                    alt="green iguana"
                    sx={{objectFit:'contain'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'#1565c0',fontWeight:'bold'}}>
                      Interaction with Teachers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   Communicate with subject teacher for deep knowledge
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 220,height:220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="../images/counceller.png"
                    alt="green iguana"
                    sx={{objectFit:'contain'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{color:'#1565c0',fontWeight:'bold'}}>
                    Carrer Councelling
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Talk with experience counceller about carrer direction
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>


          </Grid>

        </Grid>

      </section>
    </>
  );
}

export default Body;
