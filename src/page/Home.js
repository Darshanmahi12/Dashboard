import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../App.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash';
import { BarChart } from '../Charts/BarChart';

import CountUp from 'react-countup';


export default function Home() {
  return (
  <>
  <div className='bgcolor'>

  <Navbar/>  
   <Box height={70} />    
   <Box sx={{ display: 'flex' }}>
     <Sidenav/>
     <Box component="main" sx={{flexGrow: 1, p: 3}} >
     <Grid container spacing={2}>
  <Grid item xs={8}>
  <Stack spacing={2} direction="row">
  <Card sx={{ minWidth: 49 + "%", height:150 }} className='gradient'>
            <CardContent>
           <div className='iconstyle'>
            <CreditCardIcon/>
            </div> 
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        $ <CountUp delay={0.3} end={500}  duration={0.3}/>
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
         Total Earnings
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ minWidth: 49 + "%", height:150 }} className='gradientlight'>
            <CardContent>
            <div className='iconstyle'> 
            <ShoppingBagIcon/>
            </div>  
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        $ <CountUp delay={0.6} end={600}  duration={0.6}/>
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
         Total Orders
        </Typography>
          
      </CardContent>
      
    </Card>
    </Stack>
  </Grid>
  <Grid item xs={4}>
  <Stack spacing={2}>
  <Card sx={{ maxWidth: 450 }} className='gradientlight'>
          
            <Stack spacing={2} direction="row" sx={{color:"#ffffff"}}>
              <div className='iconstyleblack'>
              <StorefrontIcon/>
              </div>
              <div className='Paddingall' >
              <span className="pricetitle">$230k</span>
              <br/>
              <span className="pricesubtitle">Total Income</span>
              </div>
              </Stack>
     
      
    </Card>
  </Stack><br/>
  <Card sx={{ maxWidth: 450 }}>
            
            <Stack spacing={2} direction="row">
              <div className='iconstyle'>
              <StorefrontIcon/>
              </div>
              <div className='Paddingall'>
              <span className="pricetitle">$230k</span>
              <br/>
              <span className="pricesubtitle">Total Income</span>
              </div>
              </Stack>
        
    
      
    </Card>
 
  </Grid>

</Grid>
<Box height={20} /> 
<Grid container spacing={2}>
  <Grid item xs={8}>
  <Card sx={{ height:60 + "vh" }}>
            <CardContent>
              <BarChart/>
            </CardContent>
      
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ height:60 + "vh" }}>
            <CardContent>
            <div className='Paddingall'>
              <span className="pricetitle"> Popular Products</span>
              </div>
              <AccordionDash/>
            </CardContent>
      
    </Card>
 
  </Grid>

</Grid>
     </Box>
     </Box>
     
  </div>
   
  
     
    
      
      
    </>
  )
}
