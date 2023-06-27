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
import { GeoChart } from '../Charts/GeoChart';
import { PieChart } from '../Charts/PieChart';
import { SideBar } from '../Charts/SideBar';

import CountUp from 'react-countup';


export default function Analytics() {
  return (
  <>
  <div className='bgcolor'>

  <Navbar/>  
   <Box height={70} />    
   <Box sx={{ display: 'flex' }}>
     <Sidenav/>
     <Box component="main" sx={{flexGrow: 1, p: 3}} >
     <Grid container spacing={2}>
  <Grid item xs={5}>
  <Stack spacing={2} direction="row">
    <Box sx={{ width:"50%"}}>
  <Card sx={{ height:19 +"vh"}} className='gradient'>
            <CardContent>
          
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
          Visitors
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
       $ <CountUp delay={0.3} end={22000}  duration={0.3}/>
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
         Since Last Week
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ height:19 +"vh", marginTop:"16px"}} className='gradient'>
            <CardContent>
          
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
          Visitors
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        > 
        <CountUp delay={0.4} end={32000}  duration={0.6}/>

        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
         Since Last Week
        </Typography>
      </CardContent>
       
   


    </Card>
    </Box>
    <Box sx={{width:"50%", height:"50%"}}>
    <Card sx={{ height:19 +"vh"}} className='gradientlight'>
            <CardContent>
          
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
          Visitors
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
      <CountUp delay={0.4} end={12000}  duration={0.6}/>

        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
         Since Last Week
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ height:19 +"vh", marginTop:"16px"}} className='gradientlight'>
            <CardContent>
          
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
          Visitors
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
        $35000
        </Typography>
        <Typography
        gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1"}}
        >
         Since Last Week
        </Typography>
      </CardContent>
       
   


    </Card>
    </Box>
    </Stack>
  </Grid>
  <Grid item xs={2}>
  <Card sx={{ height:"300px", width:"680px" }}>
          <CardContent>
          <SideBar/>
            </CardContent> 
    
      
    </Card>
 
  </Grid>

</Grid>
<Box height={20} /> 
<Grid container spacing={2}>
  <Grid item xs={8}>
  <Card sx={{ height:50 + "vh" }}>
            <CardContent>
<GeoChart/>
            </CardContent>
      
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ height:50+ "vh" }}>
            <CardContent>
            <PieChart/>
          
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
