import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div >
        <div 
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        //  style={{backgroundColor:props.alert==='setalert'?'green':"white"}}
        >
          <strong>{props.alert.type} : </strong> {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      </div>
    )
  );
}

export default Alert;
