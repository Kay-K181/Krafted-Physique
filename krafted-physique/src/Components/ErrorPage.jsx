import React from 'react'

function ErrorPage() {
  return (
    <div className="pagesContainer">
        <div className={`titleContainer center`}>
            <h1>An error occured! 🙁 </h1>
            <h2 style={{marginTop: '2rem'}}>Could not find this page!</h2>
        </div>    
    </div>
    )
}

export default ErrorPage