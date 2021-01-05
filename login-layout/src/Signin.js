import React,{useState} from 'react'
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
  } from "semantic-ui-react";

const Signin = () => {
    
    const [email, setEmail] = useState('rajabisek@hotmail.com')


    const handleChange = (e) => {
        e.preventDefault();
      
    }

     return (

        <Grid textAlign="center" verticalAlign="middle" className="app" style={{marginTop:"25px"}}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1"  color="black" textAlign="center" style={{fontSize:"30px"}}>
          
           Sign Up
      
          </Header>

          <Header as="h1" icon color="black" textAlign="center">
        
    <Button
     color="black"
    fluid
    className="google"
     >
  <i class="fab fa-google"></i> {"    "} {" "}
      continue with google
      </Button>
         </Header>
      
   
          
            <Segment>
              <Form.Input
                fluid
                name="email"
                icon="user"
                iconPosition="left"
                placeholder="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                
              />
          <Message success>
          <Icon name="info circle" color="black" />
           <span style={{fontWeight:"500" ,fontSize:"16px"}}> Please check your mail.</span>
      
           We've sent a temporary authorization code to rajabisek@hotmail.com.
           It may take few minute to arrive.
          </Message>
          <Form.Input
                fluid
                placeholder="please paste authorization code"
                required
                focus
                 />
                <Button
                color="transparent"
                fluid
                size="large"
                style={{marginTop : "10px"}}
              >
                Log In
              </Button>
              </Segment>
      
        </Grid.Column>
      </Grid>
    
    )
}

export default Signin
