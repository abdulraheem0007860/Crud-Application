import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink ,useParams,useHistory} from 'react-router-dom'

function Edit() {
    const history = useHistory("");

    // const [getUserdata, setUserdata] = useState([]);
    // console.log(getUserdata);
    
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        adddress: "",
        description: ""
    })
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    // const {id} = useParams("");
    // console.log(id);
    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:4000/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);

    const updateuser = async(e)=>{
        e.preventDefault();
        const {name,email,address,mobile,description,age,work} =inpval;
       
        const res2 = await fetch(`http://localhost:4000/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            name,email,address,mobile,description,age,work
            })
        });
        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
          
           alert("Please Update the Correct Data")
        }
        else{

            alert("data added");
            history.push("/")
        }
    
        
    }

    // const getdata = async () => {
    //   const res = await fetch(`http://localhost:4000/getuser/${id}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //   });
  
    //   const data = await res.json();
    //   console.log(data);
  
    //   if (res.status === 422 || !data) {
    //     console.log("error ");
    //   } else {
    //     setUserdata(data)
    //     console.log("get Data");
  
    //   }
    // }
    // useEffect(() => {
    //   getdata()
    // }, []);

    return ( 
        <div className='container'>
            <NavLink to='/'>Home2</NavLink>
            <form className='mt-2'>
                <div className='row'>
                    <div class="mb-3 col-log-6 col-md-6 col-12" >
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata}   name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div class="mb-3 col-log-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">E-mail</label>
                        <input type="text" value={inpval.email} onChange={setdata} name="email"class="form-control" id="exampleInputPassword1" />
                    </div>
                  
                    <div class="mb-3 col-log-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">age</label>
                        <input type="text" value={inpval.age} onChange={setdata} name="age"class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-log-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-log-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-log-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={inpval.address} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-log-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name='description' value={inpval.description} onChange={setdata} className="form-control" id='' cols="" rows=""></textarea>
                    </div>
                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
    
  
  
export default Edit
