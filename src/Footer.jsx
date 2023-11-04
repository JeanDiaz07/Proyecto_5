import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer>
      <div className="logo"><h3>MySneaker</h3></div>
      
      <div className="info">
      
        <section>
        <h5>Informaciones </h5>
      
      <ul>
       <li> <a href="src/Pages/Contacto.jsx">Contacto</a></li>
       <li><a href="">Preguntas Frecuentes</a></li> 
       <li> <a href="">Políticas de Privacidad</a> </li>
       <li> <a href="">Términos y Condiciones</a>  </li> 
       <li><a href=""> Trabaja con nosotros</a></li> 

      </ul>
     
      </section>
      
      <section>
      <h5>Ayuda</h5>
      
      <ul>
      <li><a href="">Seguimiento de pedido</a></li>  
      <li><a href=""> </a></li>
      </ul>
      
      </section>
      
      <section>
      <h5>Opciones</h5>
      

      <li><a href="">Home</a></li>
      <li><a href="">Lista</a></li>
      </section>
      </div>
    
    
      </footer>
      </>    
  )
  
}
