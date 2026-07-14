import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewLog = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-logs").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">
                            <h2 style={{ color: "#1565C0", textAlign: "center", fontFamily: "Montserrat" }}>
                                VIEW LOG ENTRIES</h2>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Sem</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">System Number</th>
                                        <th scope="col">Login Time</th>
                                        <th scope="col">Logout Time</th>
                                        <th scope="col">Date</th>



                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map(

                                        (data, index) => {
                                            return (
                                                <tr>
                                                    <td>{data.name}</td>
                                                    <td>{data.dept}</td>
                                                    <td>{data.sem}</td>
                                                    <td>{data.course}</td>
                                                    <td>{data.systemNumber}</td>
                                                    <td>{data.loginTime}</td>
                                                    <td>{data.logoutTime}</td>
                                                    <td>{data.date}</td>

                                                </tr>
                                            )
                                        }

                                    )}

                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ViewLog