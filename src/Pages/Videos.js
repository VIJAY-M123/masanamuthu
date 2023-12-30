import { Card, Grid } from '@mui/material'
import React from 'react'

import Melam from "../Video/Chandamelam.mp4"
import Editting from "../Video/Editting.mp4"
import Sakthi from "../Video/Sakthi.mp4";
import SerialLight from "../Video/Seriallight.mp4";

function Videos() {
  return (
    <div className='pt-24 pr-5 pl-5'>
       <Grid container spacing={3}>
       <Grid item xs={12} md={3}>
         <Card >
         <video width="100%" controls >
            <source src={Editting} type="video/mp4" />
          </video>
         </Card>
        </Grid>
        <Grid item xs={12} lg={3}>
         <Card>
         <video width="100%" controls >
            <source src={Melam} type="video/mp4" />
          </video>
         </Card>
        </Grid>      
        <Grid item xs={12} md={3}>
         <Card>
         <video width="100%" controls >
            <source src={Sakthi} type="video/mp4" />
            {/* Add fallback content for browsers that do not support HTML5 video */}
           
          </video>
         </Card>
        </Grid>
        <Grid item xs={12} md={3}>
         <Card>
         <video width="100%" controls >
            <source src={SerialLight} type="video/mp4" />
            {/* Add fallback content for browsers that do not support HTML5 video */}
           
          </video>
         </Card>
        </Grid>
       </Grid>
        </div>
  )
}

export default Videos