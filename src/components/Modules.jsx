import React from 'react'
import {useNavigate} from 'react-router-dom'

const Modules = () => {
    const navigate=useNavigate();
  return (
   <div className="modules">
     <ul className='modulesList'>
      <li onClick={()=>navigate('/ModuleOne')}>DONATION FORM</li>
      <li onClick={()=>navigate('/ModuleTwo')}>DONATION LIST</li>
      <li onClick={()=>navigate('/ModuleThree')}>Module3</li>
    </ul>
   </div>
  )
}

export default Modules
