import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children}) => {

  const [element] = useState(document.getElementById('modal'));

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () =>{
      document.body.style.overflowY = 'unset';
    }
  });

  return (
     ReactDOM.createPortal(
         <div className="modal">
           <div className="modal modal-background"/>
           {children}
         </div>, element)
  );
};

export default Modal;