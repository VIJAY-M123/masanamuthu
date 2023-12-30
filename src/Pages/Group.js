import { Grid } from '@mui/material'
import React from 'react'
import logo from "../Image/shape-avatar.svg"
import Masanamuthu from "../Image/Masanamuthu.jpg"
import Vijayaraj from "../Image/Profile.png"
import Pandi from "../Image/Pandi.jpg"
import Gowtham from "../Image/Gowtham.jpg"
import styled from "styled-components";
import Senthil from "../Image/Senthil.jpg";
import Srinivasan from "../Image/srinivasan.jpg";
import Kodi from "../Image/Kodi.jpeg";
import Bala from "../Image/Balasingh.jpg"
import Vignesh from "../Image/vignesh.jpg"
import Sivanesh from "../Image/Sivanesh.jpeg"
import Bala2 from "../Image/Bala.jpg";
import Saravanan from "../Image/Saravanan.jpeg";
import Lingesh from "../Image/Lingesh.jpeg";
import Muthuraja from "../Image/Muthuraja.jpeg";

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
//height: auto;
width: 100%;
flex-direction:column;
border-radius:18px;
// margin: 0 15px;

             `;

const card = [
    {
        icon:Srinivasan,
        logo:logo,
        title:"Srinivasan M",
        father:"",
        age:"",
        phone:""
      },
      {
        icon:Kodi,
        logo:logo,
        title:"Kodiyarasan M",
        father:"Manthiram",
        age:"",
        phone:""
      },
      {
        icon:Senthil,
        logo:logo,
        title:"Senthil P",
        father:"Ponpandi",
        age:"",
        phone:""
      },
      {
        icon:"",
        logo:logo,
        title:"Nagaraj S",
        father:"",
        age:"",
        phone:""
      },
      {
        icon:"",
        logo:logo,
        title:"Ramkumar K",
        father:"",
        age:"",
        phone:""
      },
      {
        icon:Muthuraja,
        logo:logo,
        title:"Muthuraja P",
        father:"Paul",
        age:"31",
        phone:""
      },
      {
        icon:Lingesh,
        logo:logo,
        title:"Lingeshwaran P",
        father:"Paul",
        age:"29",
        phone:""
      },
      
      {
        icon:Saravanan,
        logo:logo,
        title:"Saravanan P",
        father:"Paul",
        age:"27",
        phone:""
      },
      {
  
        logo:logo,
        icon:Pandi,
        title:"Poologapandi J",
        father:"Jayaramachandran P",
        age:"27",
        phone:"790405589"
      },
    {
    icon:Vijayaraj,
    logo:logo,
    title:"Vijayaraj M",
    father:"Muthuraman P",
    age:"21",
    phone:"790405589"
  },
  {
    icon:Vijayaraj,
    logo:logo,
    title:"Vinoth Kumar J",
    father:"Jayaraman P",
    age:"21",
    phone:"790405589"
  },
  
  {
    
    logo:logo,
    icon:Gowtham,
    title:"Gowtham R",
    father:"Ramar M",
    age:"23",
    phone:"790405589"
  },
  {
    icon:"",
    logo:logo,
    title:"Masanamuthu M",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Rajesh K",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Masanamuthu P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:Sivanesh,
    logo:logo,
    title:"Shivanesh M",
    father:"",
    age:"20",
    phone:"8508886010"
  },
  {
    icon:"",
    logo:logo,
    title:"Dhanasekar P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Sivabalanan T",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Hari Vignesh A",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Karthick T",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Kumar S",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Sathis R",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Nagamuthu E",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Ramalingam S",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:Vignesh,
    logo:logo,
    title:"Vignesh D",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Lakshmanan D",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Muthu Vijay P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Nagaraj P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Selvan P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Rajakumar P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Muthukuamr P",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:Bala2,
    logo:logo,
    title:"Bala S",
    father:"SELVAKUMAR S",
    age:"20",
    phone:""
  },
  {
    icon:"",
    logo:logo,
    title:"Masanamuthu S",
    father:"",
    age:"",
    phone:""
  },
  {
    icon:Bala,
    logo:logo,
    title:"Balasingh C",
    father:"Chandra Kumar T",
    age:"23",
    phone:"8870710205"
  },
  ]

function Group() {
  return (
    <div className='pt-24 w-full bg-slate-300 p-8'>
    <Grid container spacing={3}>
        
        {card.map((item, index)=>(
            <Grid item xs={12} lg={3}>
        <Item key={index}>
 <div
              className="h-[200px] w-full rounded-t-2xl"
              style={{
                backgroundImage: `url(${Masanamuthu})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div className="h-[250px] w-full rounded-b-2xl bg-white">
              <div className="mt-[-36px] absolute">
                <img alt="ima" src={item.logo} style={{fontSize:"30px"}} />
              </div>
              <div className="mt-[-30px] ml-[37px] h-[70px] w-[70px] rounded-full bg-gray-200 absolute flex items-center justify-center">
                <img src={item.icon} alt="logo" className='rounded-full h-16 w-16'/>
              </div>
              <div className='w-full mt-5 p-5'>
                <h3 className='text-2xl font-bold'>
                  {item.title}
                </h3>
              </div>
              <div className='w-full p-5 mt-[-14px]'>
                
                <h4 className='mt-2 font-bold'>Father Name: {item.father}</h4>
                <h4 className='mt-2 font-bold'>Age: {item.age}</h4>
                <h4 className='mt-2 font-bold'>Ph: {item.phone}</h4>
              </div>
            </div>
        </Item>
          

           
        </Grid>
          ))}
        </Grid>
    
    </div>
  )
}

export default Group