import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5 mb-5">
            <h1 className="fs-2">
                To create a ticket, select a relevant topic
            </h1>
        <div className="col-4 p-5 mt-5 mb-5">
            <h4 className=""><i class="fa fa-plus-circle" aria-hidden="true"></i>
                Account Opening
            </h4>
            <a href=''>Online Account Opening
            </a> <br></br>
            <a href=''>Account Opening Form</a>
            </div>
        </div>
        </div>
     );
}

export default CreateTicket;