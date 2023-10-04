import React from 'react'
import {  Result } from 'antd';

const ErrorPage = () => {
    return(
        <Result
          status="403"
          title="Sorry, We are currently not available for this screen size"
          subTitle="Try to visit this site using screen width more then '1024px', Thanks"
         
        />

    )
  
}
    
   
export default ErrorPage