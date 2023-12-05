import { Grid,Card} from '@mui/material'
import React from 'react'
import GroupPhoto from "../Image/Groupphoto.jpg";
import GroupPhoto2 from "../Image/GroupPhoto2.jpg";


const Images = [
  {
    img:GroupPhoto
  },
  {
    img:GroupPhoto2
  },
 
]

function Image() {
  return (
    <div className='pt-24 pr-5 pl-5'>
      <Grid container spacing={2}>
        {
          Images.map((item, index)=>(
            <Grid item xs={12} lg={3} key={index}>
            <Card
            className='h-[300px] w-full' style={{
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

export default Image