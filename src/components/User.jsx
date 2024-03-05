import { AppBar, Button, Card, CardContent, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const User = () => {
  return (
    <div>
       
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Learning Platform
          </Typography>
          <Button color="inherit">Sign In</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <main>
        <section id="featured-courses" style={{ padding: '20px 0' }}>
          <Container>
            <Typography variant="h4" gutterBottom>Featured Courses</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Course 1</Typography>
                    <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Course 2</Typography>
                    <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Course 3</Typography>
                    <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Course 4</Typography>
                    <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Course 5</Typography>
                    <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Course 6</Typography>
                    <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section id="testimonials" style={{ background: '#f9f9f9', padding: '20px 0' }}>
          <Container>
            <Typography variant="h4" gutterBottom>Testimonials</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">"Great platform! I've learned so much."</Typography>
                    <Typography variant="subtitle1">- John Doe</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">"Excellent courses and easy to navigate."</Typography>
                    <Typography variant="subtitle1">- Jane Smith</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">"Highly recommend this platform to anyone interested in learning."</Typography>
                    <Typography variant="subtitle1">- Emily Johnson</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section id="about" style={{ padding: '20px 0' }}>
          <Container>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor, dolor nec facilisis vulputate, velit lorem feugiat leo, nec congue nisi risus id leo.
            </Typography>
          </Container>
        </section>
      </main>
      <footer style={{ background: 'white', color: 'green', padding: '20px 0', textAlign: 'center' }}>
        <Container>
          <Typography variant="body2" >&copy; 2024 E-Learning Platform. All rights reserved.</Typography>
        </Container>
      </footer>
    
    </div>
  )
}

export default User