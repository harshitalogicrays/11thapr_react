import React from 'react'

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
      <div>
        {empid}
        {children}  
      </div>
    )
  }
  
  export default Childrenpropsdemo