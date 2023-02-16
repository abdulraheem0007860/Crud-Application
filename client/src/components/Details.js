import React from 'react'
import { useState ,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useParams } from 'react-router-dom';

function Details() {
  const [getUserdata, setUserdata] = useState([]);
  console.log(getUserdata);
  
  const {id} = useParams("");
  console.log(id);






  

  const getdata = async () => {
    const res = await fetch(`http://localhost:4000/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data)
      console.log("get Data");

    }
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div className='container mt-3' >
      <h1 style={{ fontWeight: 400 }}> Welcome to Abdul</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent >
        <div className="add_btn">
                         <button className="btn btn-primary mx-2"/>
                        <button className="btn btn-danger" ></button>
                        
                    </div>
          <div className="row">
          <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png " style={{ width: 50 }} alt=" profile" />
              <h3 className='mt-3'>Name:<span >{getUserdata.name}</span></h3>
              <h3 className='mt-3'>Age:<span >{getUserdata.age}</span></h3>
              <p><EmailIcon />Email:<span>{getUserdata.email}</span></p>
              <p><WorkIcon />Occupation:<span>{getUserdata.work}</span></p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p><MobileFriendlyIcon />Mobile:<span>{getUserdata.mobile}</span></p>
              <p><LocationOnIcon />location:<span>{getUserdata.address}</span></p>
              <p>Description:<spn>{getUserdata.description}</spn></p>
            </div>
        </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default Details
