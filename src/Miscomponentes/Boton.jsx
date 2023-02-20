const Boton = ({ children, color ='green',sx}) => {
    return (
        <button style={{color, ... sx}}>
            {children}</button>
    )
}
 
export default Boton