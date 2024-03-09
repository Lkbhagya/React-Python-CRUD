import React, { } from "react";

const View = () => {
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                    <h1>User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

        <div className="container d-flex justify-content-center">
            <div><button className="btn btn-primary">Back</button></div>
        </div>
    </div>
};

export default View;