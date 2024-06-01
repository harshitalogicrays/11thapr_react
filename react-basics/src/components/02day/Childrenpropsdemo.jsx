import React, { Fragment } from 'react'

// const Childrenpropsdemo = (props) => {
//   return (
//     <div>
//       {props.empid}
//       {props.children}
//       {props.children[0]}
//     </div>
//   )
// }

// export default Childrenpropsdemo


const Childrenpropsdemo = ({empid,children}) => {
    return (
      <Fragment>
        {empid}
        {children}  
      </Fragment>
    )
  }
  
  export default Childrenpropsdemo