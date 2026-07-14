import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddLog = () => {

    const [input, changeInput] = useState(


        {
            name: "",
            dept: "",
            sem: "",
            course: "",
            systemNumber: "",
            loginTime: "",
            logoutTime: "",
            date: ""

        }



    )
    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {


        console.log(input)
        axios.post("http://localhost:3000/lab-entry", input).then(

            (response) => {

                console.log(response.data)
                alert("Log added suceessfully")
            }

        ).catch((error) => {
            console.log(error.response)
            alert("Failed to add Log")
        })


    }

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">
                        <h2 style={{ color: "#1565C0", textAlign: "center", fontFamily: "Montserrat" }}>
                            LOG ENTRY</h2>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Department</label>
                               <select id="" className="form-control" name="dept" value={input.dept} onChange={inputHandler}>
                                <option value="Btech">Btech</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="Mtech">Mtech</option>
                               </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Sem</label>
                                <input type="text" className="form-control" name="sem" value={input.sem} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name="course" value={input.course} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">System Number</label>
                                <input type="text" className="form-control" name="systemNumber" value={input.systemNumber} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Login Time</label>
                                <input type="text" className="form-control" name="loginTime" value={input.loginTime} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Logout Time</label>
                                <input type="text" className="form-control" name="logoutTime" value={input.logoutTime} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date</label>
                                <input type="text" className="form-control" name="date" value={input.date} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary" onClick={readValue}>SUBMIT</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default AddLog