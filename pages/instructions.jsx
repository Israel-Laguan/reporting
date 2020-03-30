import React from 'react';
import Header from "../components/Header";
import { Jumbotron, Container, Button } from 'reactstrap'

const style = {
    subr:{
        marginTop:'2em',
        textDecoration:'underline'
    },
    bold:{
        fontWeight:'bold',
        margin: '0 .2em'
    },
    justify:{
        textAlign:'justify'
    }
}

const instructions = ()=>{
    return (
        <>
            <Header/>      
            <Jumbotron>
                <Container>
                    <div className="d-flex justify-content-around">
                        <div>
                            <h2>Instruciones de uso</h2>
                            <h5>Bienvenido al apartado de instrucciones</h5>
                        </div>
                        <div className="">
                            <Button 
                                onClick={()=>window.print()}
                                color="info"
                        >
                            Imprimir
                        </Button>
                        </div>
                    </div>

                    <p style={style.subr}>El siguiente texto tiene como finalidad guiar al usuario en el uso cotidinao del sistema</p>
                    <p>
                        Este sistema tiene como finalidad el poder almacenar de forma digital una serie de 
                        <span style={style.bold}>Repontes</span> 
                        y<span style={style.bold}>Facturas</span> 
                    </p>
                    <p style={style.justify}>
                        Consideramos que este tipos de sistema es utiles para profesionales (y entre otros) que necesitan llevar un registro intimo de su trabajo (u otros),
                        no solo de reportes sino también un sistema donde puedan almacenar posibles cobros ó pagos que deban llevar a cabo o que ya se hicieron efectivos,
                        para el cumplimiento de este objetivo describimos una documentación exacta de las capacidades del sistema, entiendiendo que cada vez
                        que el sistema lleve a cabo alguna actualización este documento sera actualizado.
                    </p>
                    <ol>
                        <li>
                            <span style={{...style.bol,...style.subr}}>Sistema de autenticación y seguridad:</span>
                            <ul style={style.justify}>
                                <li>
                                    <p>EL sistema tiene un protocolo de autenticación protejido por correo y contraseña, este es un método de autenticación típico y bastante 
                                        conocido para la mayoría de usuario 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        El sistema de autenticación basa su seguridad en una metodología de sesiones por tokens, más especificamente <span style={style.bold}>JWT</span> (JSON Web Tokes) 
                                        las cuales son asignados por el servidor que administra el sistema y que verifica constantemente que el usuario ingresado
                                        tenga los debidos permisos que requiere, también verifica que el token no sea modificado de lo contrario automáticamente cerrara
                                        la sesión protegiendo así las rutas de acceso y los datos ingresados al sistema.
                                    </p>
                                </li>
                                <li>
                                    El sistema esta basado también en un <span style={style.bold}>ReactJS</span> framework que contiene una lógica que se encarga de vigilar constantemente los roles de 
                                    usuario y de mostrar correctamente información correspondiente, permitiendo así que multiples usuarios de diversos niveles puedan acceder de manera
                                    discriminida a ciertas partes del sistema.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style={{...style.bol,...style.subr}}>Sistema de registro:</span>
                            <ul style={style.justify}>
                                <li>
                                    Para registrar un usuario primero debe ingresar al sistema como usuario "Administrador" o "Jefe", luego dirijase a la sección de 
                                    <span style={style.bold}>Lista de usuarios</span> y a continuación se le habilitara en el navegador (barra superior) la opción 
                                    <span style={style.bold}>Crear Usuarios</span> donde podrá llevar a cabo dicha acción.
                                </li>
                                <li>
                                    Este sistema de usuario solo es accesible para los usuarios de roles "Administradore" y "Jefe" del sistema, debido a que es un sistema de uso privado (generalmente), entendemos 
                                    que solamente el dueño en uso querra darle permisos a ciertas personas (por ejemplo un asistente) para que le ayude con la administración del mismo.
                                </li>
                                <li>
                                    El sistema posee un sistema de registro típico de muchos sistemas con la finalidad de que el usuario pueda sentirse rápidamente identificado con el 
                                    y lo comprenda rápidamente y con comodidad.
                                </li>
                                <li>
                                    En este apartado es donde el administrador que registra usuarios es capas de asignar un rol a nuevos usuario cuando lo registra, la importantencia del 
                                    rol viene dada a que otorga acceso a ciertas partes del sistema que pueden o no manejar información sensible para el dueño del sistema, de esta forma
                                    podrá controlar que usuarios podran ver y manejar (o no) las anteriores funciones mencionadas.
                                </li>
                                <li>
                                    El sistema ofrece tres niveles de roles:
                                    <ul>
                                        <li>Administrador</li>
                                        <li>Jefe</li>
                                        <li>Empleado</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li style={style.justify}>
                            <span style={{...style.bol,...style.subr}}>La barra de navegación</span>
                            <p>
                                En la parte superior de la pantalla, el sistema siempre se mantendrá mostrando una franja de color naranja la cual 
                                es conocida como <span style={style.bold}>Barra de navegación</span>, esta le estara mostrando en todo momento 
                                distintas opcines consecuentes a la sección donde ud. se encuentre.
                            </p>
                            <ul>
                                <li>
                                    <span style={style.bold}>Reportes:</span> Esta opción se mantiene mostrandose en todo momento, si presiona click sobre 
                                    ella siempre lo redirigirá a la pantalla principal o dashaboard.
                                </li>
                                <li>
                                    <span style={style.bold}>Crear reporte:</span> Esta opción se mantiene mostrandose en la pantalla principal, si presiona click sobre 
                                    ella siempre lo redirigirá a la pantalla que le permitira crear reportes o facturas.
                                </li>
                                <li>
                                <span style={style.bold}>Lista de usuarios:</span> Esta opción se mantiene mostrandose en la pantalla principal, si presiona click sobre 
                                    ella siempre lo redirigirá a la pantalla que le permitirá ver quienes son los usuarios registrados en el sistema, esta opción solo esta
                                    habilitada para el rol usuario "Jefe" o el rol usuario "Administrador".
                                </li>
                                <li>
                                    <span style={style.bold}>Bienvenido!:</span> Esta opción se mantiene mostrandose en la pantalla principal, si presiona click sobre 
                                    ella le mostrará una ventana modal que le dara la bienvenida al sistema.
                                </li>
                                <li>
                                    <span style={style.bold}>Salir:</span> Esta opción se mantiene mostrandose en todo momento, si presiona click sobre 
                                    ella se termina (cierra) su sesión de usuario y lo redirige a la pantalla de login.
                                </li>
                                <li>
                                    <span style={style.bold}>Crear usuario:</span> Esta opción se mantiene mostrandose la pantalla de <span style={style.bold}>Lista de usuarios</span>, si presiona click sobre 
                                    ella lo redirigira a la pantalla donde puede registrar algun nuevo usuario.
                                </li>
                            </ul>
                        </li>
                        <li style={style.justify}>
                            <span style={{...style.bol,...style.subr}}>Dashboard o pantalla principal</span>
                            <p>
                                Cuando ud. ingreso al sistema lo primero que observó es el <span style={style.bold}>Dashboard o Pantalla principal del sistema</span>,
                                en esta pantalla el sistema le da la Bienvenida al usuario además de habilitar las opciones para 
                                <span style={style.bold}>Leer las instrucciones</span>, <span style={style.bold}>Ver reportes</span> y 
                                <span style={style.bold}>Ver facturas</span>, cada una de las unidades mostradas, sin distingir entre reportes
                                o factura, ofrece las opciones de <span style={style.bold}>Ver</span>, <span style={style.bold}>Editar</span> 
                                y <span style={style.bold}>Eliminar</span>, cuando presiona en cada una de ellas obtendrá una función consecuente
                                a su nombre, la opción ver lo llevara a una nueva pantalla donde podrá observar los detalles unicamente de/la 
                                reporte/factura seleccionado, para la pantalla de editar se conseguirá un formulario donde podrá editar los datos
                                que desee y para la opción eliminar le permite borrar completamnete de la base de datos la unidad seleccionada.
                            </p>
                        </li>                        
                        <li>
                            <span style={{...style.bol,...style.subr}}>Lista de usuarios</span>
                            <p>
                                Esta pantalla habilita en la barra de navegación la opción de <span style={style.bold}>Crear usuarios</span>                            
                            </p>
                            <p>
                                El objetivo de esta pantalla es mostrar una lista con los items que representan los usuarios registrados en el sistema,
                                del mismo modo habilita para cada item las opciones para editar y eliminar a dicho usuario, estas opciones solo estan
                                disponibles para usuarios con el rol de "adminsitrador" y "Jefe".
                            </p>
                        </li>
                    </ol>
                </Container>

            </Jumbotron>
        </>
    )
}

export default instructions;