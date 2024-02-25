
import {useRouteError} from 'react-router-dom'


const ErrorPage=()=>{


const error=useRouteError()

    console.log(error)
    return (
        <div>

            <h1>You are in error page </h1>
     
          <h2>{error.status} {error.statusText}</h2>


        </div>
    )
}

 

export default ErrorPage;