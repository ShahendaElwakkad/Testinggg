import React from 'react';
import './ContactForm.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

const ContactForm = () => {
    return (
        <div className="contact-form"> 
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                    How can we help?
              </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    Just as convenient as our delivery service,
                    Leave your valuable information to contact you.
              </Typography> 
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={12} item>
                      <TextField placeholder="text" label="Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter phone number" label="Mobile No." variant="outlined" fullWidth required />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="text" placeholder="Company name" label="Company Name" variant="outlined" fullWidth required />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField type="text" placeholder="Company name" label="Company Name" variant="outlined" fullWidth required />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Company name" label="No. of shipment per month" variant="outlined" fullWidth required />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField label="Note" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button className='send-button' type="submit" variant="contained" fullWidth>Send</Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );
    }

export default ContactForm;
