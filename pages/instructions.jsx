import React from 'react'
import Header from '../components/Header'
import { Jumbotron, Container, Button } from 'reactstrap'

const style = {
  subr: {
    marginTop: '2em',
    textDecoration: 'underline',
  },
  bold: {
    fontWeight: 'bold',
    margin: '0 .2em',
  },
  justify: {
    textAlign: 'justify',
  },
  figure: {
    border: '1px solid gray',
  },
}

const instructions = () => {
  console.log("Hello World")
  return (
    <>
      <Header />
      <Jumbotron>
        <Container>
          <div className="d-flex justify-content-around">
            <div>
              <h2>Instrucciones de uso</h2>
              <h5>Bienvenido al apartado de instrucciones</h5>
            </div>
            <div className="">
              <Button onClick={() => window.print()} color="info">
                Imprimir
              </Button>
            </div>
          </div>

          <p style={style.subr}>
            El siguiente texto tiene como finalidad guiar al usuario en el uso
            cotidiano del sistema
          </p>
          <p>
            Este sistema almacena de forma digital una serie de
            <span style={style.bold}>Reportes</span>y
            <span style={style.bold}>Facturas</span>
          </p>
          <p style={style.justify}>
            Consideramos que este tipos de sistema es útiles para profesionales
            (y entre otros) que necesitan llevar un registro intimo de su
            trabajo (u otros), no solo de reportes sino también un sistema donde
            puedan almacenar posibles cobros ó pagos que deban llevar a cabo o
            que ya se hicieron efectivos, para el cumplimiento de este objetivo
            describimos una documentación exacta de las capacidades del sistema,
            entendiendo que cada vez que el sistema lleve a cabo alguna
            actualización este documento sera actualizado.
          </p>
          <ol>
            <li>
              <span style={{ ...style.bol, ...style.subr }}>
                Sistema de autenticación y seguridad:
              </span>
              <figure style={style.figure}>
                <img src="/img/login.png" alt="Login" width="100%" />
                <figcaption>Fig.1 - Vista de Ingreso</figcaption>
              </figure>
              <ul style={style.justify}>
                <li>
                  <p>
                    EL sistema tiene un protocolo de autenticación protegido por
                    correo y contraseña, este es un método de autenticación
                    típico y bastante conocido para la mayoría de usuarios.
                  </p>
                </li>
                <li>
                  <p>
                    El sistema de autenticación basa su seguridad en una
                    metodología de sesiones por tokens, más especificamente{' '}
                    <span style={style.bold}>
                      <a
                        href="https://jwt.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        JWT
                      </a>
                    </span>{' '}
                    (JSON Web Tokens) las cuales son asignados por el servidor
                    que administra el sistema y que verifica constantemente que
                    el usuario ingresado tenga los debidos permisos que
                    requiere, también verifica que el token no sea modificado de
                    lo contrario automáticamente cerrara la sesión protegiendo
                    así las rutas de acceso y los datos ingresados al sistema.
                  </p>
                </li>
                <li>
                  El sistema esta basado también en un{' '}
                  <span style={style.bold}>
                    <a
                      href="https://es.reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ReactJS
                    </a>
                  </span>{' '}
                  framework que contiene una lógica que se encarga de vigilar
                  constantemente los roles de usuario y de mostrar correctamente
                  información correspondiente, permitiendo así que multiples
                  usuarios de diversos niveles puedan acceder de manera
                  discrimina a ciertas partes del sistema.
                </li>
              </ul>
            </li>
            <li>
              <span style={{ ...style.bol, ...style.subr }}>
                Sistema de registro:
              </span>
              <figure style={style.figure}>
                <img src="/img/register.png" alt="Register" width="100%" />
                <figcaption>Fig.2 - Vista de Registro</figcaption>
              </figure>
              <ul style={style.justify}>
                <li>
                  Para registrar un usuario primero debe ingresar al sistema
                  como usuario "Administrador" o "Jefe", luego diríjase a la
                  sección de
                  <span style={style.bold}>Lista de usuarios</span> y a
                  continuación se le habilitara en el navegador (barra superior)
                  la opción
                  <span style={style.bold}>Crear Usuarios</span> donde podrá
                  llevar a cabo dicha acción.
                </li>
                <li>
                  Este sistema de usuario solo es accesible para los usuarios de
                  roles "Administradore" y "Jefe" del sistema, debido a que es
                  un sistema de uso privado (generalmente), entendemos que
                  solamente el dueño en uso querrá darle permisos a ciertas
                  personas (por ejemplo un asistente) para que le ayude con la
                  administración del mismo.
                </li>
                <li>
                  El sistema posee un sistema de registro típico de muchos
                  sistemas con la finalidad de que el usuario pueda sentirse
                  rápidamente identificado con el y lo comprenda rápidamente y
                  con comodidad.
                </li>
                <li>
                  En este apartado es donde el administrador que registra
                  usuarios es capas de asignar un rol a nuevos usuario cuando lo
                  registra, la importancia del rol viene dada a que otorga
                  acceso a ciertas partes del sistema que pueden o no manejar
                  información sensible para el dueño del sistema, de esta forma
                  podrá controlar que usuarios podran ver y manejar (o no) las
                  anteriores funciones mencionadas.
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
              <span style={{ ...style.bol, ...style.subr }}>
                La barra de navegación
              </span>
              <figure style={style.figure}>
                <img src="/img/nav.png" alt="Navbar" width="100%" />
                <figcaption>Fig.3 - Vista de la Barra de Navegación</figcaption>
              </figure>
              <p>
                En la parte superior de la pantalla, el sistema siempre se
                mantendrá mostrando una franja de color naranja la cual es
                conocida como{' '}
                <span style={style.bold}>Barra de navegación</span>, esta le
                estara mostrando en todo momento distintas opciones consecuentes
                a la sección donde ud. se encuentre.
              </p>
              <ul>
                <li>
                  <span style={style.bold}>Reportes:</span> Esta opción se
                  mantiene mostrandose en todo momento, si presiona click sobre
                  ella siempre lo redirigirá a la pantalla principal o
                  dashaboard.
                </li>
                <li>
                  <span style={style.bold}>Crear reporte:</span> Esta opción se
                  mantiene mostrandose en la pantalla principal, si presiona
                  click sobre ella siempre lo redirigirá a la pantalla que le
                  permitira crear reportes o facturas.
                </li>
                <li>
                  <span style={style.bold}>Lista de usuarios:</span> Esta opción
                  se mantiene mostrandose en la pantalla principal, si presiona
                  click sobre ella siempre lo redirigirá a la pantalla que le
                  permitirá ver quienes son los usuarios registrados en el
                  sistema, esta opción solo esta habilitada para el rol usuario
                  "Jefe" o el rol usuario "Administrador".
                </li>
                <li>
                  <span style={style.bold}>Bienvenido!:</span> Esta opción se
                  mantiene mostrandose en la pantalla principal, si presiona
                  click sobre ella le mostrará una ventana modal que le dara la
                  bienvenida al sistema.
                </li>
                <li>
                  <span style={style.bold}>Salir:</span> Esta opción se mantiene
                  mostrandose en todo momento, si presiona click sobre ella se
                  termina (cierra) su sesión de usuario y lo redirige a la
                  pantalla de login.
                </li>
                <li>
                  <span style={style.bold}>Crear usuario:</span> Esta opción se
                  mantiene mostrandose la pantalla de{' '}
                  <span style={style.bold}>Lista de usuarios</span>, si presiona
                  click sobre ella lo redirigirá a la pantalla donde puede
                  registrar algún nuevo usuario.
                </li>
              </ul>
            </li>
            <li style={style.justify}>
              <span style={{ ...style.bol, ...style.subr }}>
                Dashboard o pantalla principal
              </span>
              <p>
                Cuando ud. ingreso al sistema lo primero que observó es el{' '}
                <span style={style.bold}>
                  Dashboard o Pantalla principal del sistema
                </span>
                , en esta pantalla el sistema le da la Bienvenida al usuario
                además de habilitar las opciones para
                <span style={style.bold}>Leer las instrucciones</span>,{' '}
                <span style={style.bold}>Ver reportes</span> y
                <span style={style.bold}>Ver facturas</span>, cada una de las
                unidades mostradas, sin distingir entre reportes o factura,
                ofrece las opciones de <span style={style.bold}>Ver</span>,{' '}
                <span style={style.bold}>Editar</span>y{' '}
                <span style={style.bold}>Eliminar</span>, cuando presiona en
                cada una de ellas obtendrá una función consecuente a su nombre,
                la opción ver lo llevara a una nueva pantalla donde podrá
                observar los detalles unicamente de/la reporte/factura
                seleccionado, para la pantalla de editar se conseguirá un
                formulario donde podrá editar los datos que desee y para la
                opción eliminar le permite borrar completamente de la base de
                datos la unidad seleccionada.
              </p>
            </li>
            <li>
              <span style={{ ...style.bol, ...style.subr }}>
                Lista de usuarios
              </span>
              <p>
                Esta pantalla habilita en la barra de navegación la opción de{' '}
                <span style={style.bold}>Crear usuarios</span>
              </p>
              <p>
                El objetivo de esta pantalla es mostrar una lista con los items
                que representan los usuarios registrados en el sistema, del
                mismo modo habilita para cada item las opciones para editar y
                eliminar a dicho usuario, estas opciones solo están disponibles
                para usuarios con el rol de "administrador" y "Jefe".
              </p>
            </li>
          </ol>

          <h1>Backend</h1>
          <p>
            Para usar este sistema en su empresa no son necesarios muchos pasos
            pero si debe invertirse un poco de tiempo. Se recomiendan
            conocimiento básico en javascript, manejo de redes, creación de
            bases de datos (PostgresQL y Mongo), ademas de manejo de servidores.
          </p>
          <ol>
            <li>
              Crear dos (o mas) bases de datos para sus datos. Se espera que una
              sea la Base de Datos y la otra un Data Warehouse. En este tutorial
              asumiremos que tiene dos bases de datos en{' '}
              <a
                href="https://www.postgresql.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgresQL
              </a>
              . La forma mas fácil es usando es el{' '}
              <a
                href="https://devcenter.heroku.com/articles/heroku-postgresql"
                target="_blank"
                rel="noopener noreferrer"
              >
                addon Postgres de Heroku
              </a>
              , pero puede ser cualquier base de datos postgres accesible
              online.
            </li>
            <li>
              <p>
                Solicite al <a href="mailto:wfloresn1@upao.edu.pe">creador</a>{' '}
                del software los archivos necesarios para el servidor, tanto de
                la aplicación web como de autenticación. Luego instale ambos en
                su servidor. Aca algunos tutoriales dependiendo el servidor que
                tenga:
              </p>
              <ul>
                <li>
                  <a
                    href="https://devcenter.heroku.com/articles/getting-started-with-nodejs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Heroku
                  </a>
                </li>
                <li>
                  <a
                    href="https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon AWS
                  </a>
                </li>
                <li>
                  <a
                    href="https://features.cpanel.net/topic/nodejs-hosting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cPanel Hosting
                  </a>
                </li>
                <li>... Para otros hará falta investigación.</li>
              </ul>
              <p>
                Adicionalmente usted querrá hacer su propio servidor para
                manejar datos de su empresa a su manera. Tal servidor lo
                llamaremos "Su Servidor" en lo sucesivo. Nosotros esperamos que
                su servidor tenga un endpoint graphql al que hacer queries.
              </p>
            </li>
            <li>
              <p>
                El código del servidor para autenticación espera que usted
                provea variables de entorno de la siguiente forma (sustituya las{' '}
                <kbd>xxxx</kbd> por sus propias credenciales):
              </p>
              <kbd>MONGODB_URI=xxxxxx</kbd>
              <br />
              <kbd>OTHER_URL=xxxxx</kbd>
              <br />
              <p>
                donde <kbd>OTHER_URL</kbd> se refiere al endpoint graphql del
                servidor donde están sus datos. Tome en cuenta que este es un
                ejemplo y puede hacer su servidor en cualquier tecnología que
                desee, de esto hablaremos mas adelante.
              </p>
              <p>
                para mas información sobre como asignar las variales de entorno
                a su servidor consulte:
              </p>
            </li>
            <li>
              <p>
                El código de la Aplicación web solo espera el link de servidor
                online de autenticacion:
              </p>
              <kbd>AUTH_URL=https://xxxxxx</kbd>
              <p>
                Aplicar esto como variable de entorno es similar al numeral
                anterior.
              </p>
            </li>
            <li>
              El ultimo paso es usar{' '}
              <a
                href="https://www.stitchdata.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stitch
              </a>
              , un servicio ETL gratuito. Para mas detalles sobre como incluir
              Stitch puede ver{' '}
              <a
                href="https://www.stitchdata.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                aca
              </a>
            </li>
          </ol>
          <h2>
            Ejemplo de Implementación con Heroku, Postgres, Mongo Atlas y Stitch
          </h2>
          <ol>
            <li>
              Primero crea una cuenta gratis en{' '}
              <a
                href="https://signup.heroku.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heroku
              </a>
              ,{' '}
              <a
                href="https://www.stitchdata.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stitch
              </a>
              , y en{' '}
              <a
                href="https://www.mongodb.com/cloud/atlas/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mongo Atlas
              </a>
              .
            </li>
            <li>
              Luego crea una app en Heroku desde tu usuario (mas información{' '}
              <a
                href="https://devcenter.heroku.com/articles/deploying-nodejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                la documentación
              </a>
              ).
            </li>
            <li>
              Crea una base de datos en MongoDB para el servidor de
              Autenticacion (
              <a
                href="https://docs.atlas.mongodb.com/getting-started/"
                target="_blank"
                rel="noopener noreferrer"
              >
                guía
              </a>
              ). También crea dos bases de datos para la app de Heroku siguiendo
              esta{' '}
              <a
                href="https://devcenter.heroku.com/articles/heroku-postgresql"
                target="_blank"
                rel="noopener noreferrer"
              >
                guía
              </a>
              <p>Videos de referencia:</p>
              <ul>
                <li>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/WhKGkF6GoSw"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </li>
                <li>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Imwk0HtEuGY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </li>
              </ul>
            </li>
            <li>
              De vuelta a Stitch, sigue esta{' '}
              <a
                href="https://www.stitchdata.com/docs/getting-started/"
                target="_blank"
                rel="noopener noreferrer"
              >
                guía
              </a>
              .
            </li>
            <li>
              Por ultimo entra a la aplicación web y crea un usuario de prueba
              si el autor te ha dado un usuario o{' '}
              <a href="mailto:wfloresn1@upao.edu.pe">solicitalo</a>.
            </li>
          </ol>
        </Container>
      </Jumbotron>
    </>
  )
}

export default instructions
