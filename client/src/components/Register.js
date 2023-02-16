import React from 'react'
import { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom'

function Register() {
    const history =useHistory();
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
    

const addinpdata = async (e) => {
    e.preventDefault();


    const { name, email, age, mobile, work, address, description } = inpval;

    const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, email, age, mobile, work, address, description
        })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");
        alert("error");

    } else {

           alert("data added");
           history.push("/")
            console.log("data added");
    }
}
    
            
            return (
                <div className='container'>
                    <NavLink to='/'>Home</NavLink>
                    <form className='mt-2'>
                        <div className='row'>
                            <div class="mb-3 col-log-6 col-md-6 col-12" >
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3 col-log-6 col-md-6 col-12">
                                <label for="exampleInputPassword1" class="form-label">E-mail</label>
                                <input type="text" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 col-log-6 col-md-6 col-12">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="number" value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 col-log-6 col-md-6 col-12">
                                <label for="exampleInputPassword1" class="form-label">age</label>
                                <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
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
                                <textarea name='description' value={inpval.desc} onChange={setdata} className="form-control" id='' cols="" rows=""></textarea>
                            </div>
                            <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            )
            }  

        export default Register