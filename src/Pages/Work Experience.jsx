import { Grid,Card } from '@mui/material'
import React from 'react'
//import EmailCampaign from "../Image/EmailCampaign.png"

import img1 from "../Image/work1.png"
import img2 from "../Image/work2.png"
import img3 from "../Image/work3.png"
import img4 from "../Image/work4.png"
//import img5 from "../Image/work5.png"
//import img6 from "../Image/work6.png"

const Works = [
  {
    img:img1,
  },
  {
    img:img2,
  },
  {
    img:img3,
  },
  {
    img:img4,
  },
  // {
  //   img:img5,
  // },
  // {
  //   img:img6,
  // }
]

function WorkExperience() {
  return (
    <div className='pt-24 pl-6 pr-6'>
        <Grid container spacing={2}>
          {
            Works.map((item, index)=>(
              <Grid item xs={12} md={4} key={index}>
              <Card className='h-[300px] w-full' style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                }}/>
            </Grid>
            ))
          }
         
        </Grid>
        </div>
  )
}

export default WorkExperience