import React from 'react';
import './ContactForm.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

const SignForm = () => {
    return (
        <div className="contact-form"> 
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                    Welcome Back
              </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    Log In To Your Account
              </Typography> 
                <form>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="password" placeholder="Password" label="Enter password" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button className='send-button' type="submit" variant="contained" fullWidth>Login</Button>
                        <p className='donotHaveAccount'>Don't have an account ?!</p>
                      <Button className='send-button' type="submit" variant="contained" fullWidth>Create New Account</Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );
    }

export default SignForm;
