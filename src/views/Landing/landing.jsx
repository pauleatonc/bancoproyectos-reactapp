import { BuscadorProyectos } from '../../components/Bancodeproyectos'; 
import IconPMU from '../../static/img/icons/PMU.svg';
import IconPMB from '../../static/img/icons/PMB.svg'; 
import IconList from '../../static/img/icons/Blueprint.svg'; 
import '../../static/styles/bancodeproyectos.css'; 


const Home = () => {


  return (
    <>
      <BuscadorProyectos />

      {/* Categorias principales */}
      <div className="container my-4 mb-md-5">
        <h1 className="text-sans-h1 my-3 text-center">Categorías principales</h1>
        <div className="container d-flex flex-row justify-content-center">

          <div className="col-md-2 d-flex flex-column mx-md-5 align-items-center">
            <a   type="button"   id='btn-icon' className="categorias-circle  btn btn-outline-primary  border-2 rounded-circle d-flex align-items-center justify-content-center my-3">
            <img src={IconPMU} alt='iconPMU'  id='btnIcon' />
            </a>
            <p className="text-sans-p text-center">Programa Mejoramiento Urbano</p>
          </div>
          
          <div className="col-md-2 d-flex flex-column mx-md-5 align-items-center">
            <a  type="button"  id='btn-icon' className="categorias-circle btn btn-outline-primary  rounded-circle border-2 d-flex align-items-center justify-content-center my-3">
            <img src={IconPMB} alt='iconPMU' id='btnIcon' />
            </a>
            <p className="text-sans-p text-center">Programa Mejoramiento de Barrios</p>
          </div>

          <div className="col-md-2 d-flex flex-column mx-md-5 align-items-center">
            <a type="button" href="/bancodeproyectos" id='btn-icon' className="categorias-circle btn btn-outline-primary  border-2 rounded-circle d-flex align-items-center justify-content-center my-3">
            <img src={IconList} alt='iconList' id='btnIcon' />
            </a>
            <p className="text-sans-p text-center">Ver todos los proyectos</p>
          </div>

        </div>
      </div>
      

      {/* Que es el Banco de Proyectos */}
      <div className="container col-md-8 px-4 mb-4">
        <h2 className="text-sans-h2 my-4">¿Qué es el Banco de Proyectos?</h2>
        <p className="text-sans-p"> El <strong> Banco de Proyectos </strong> de la Subsecretaría de Desarrollo Regional y Administrativo es un
          <strong> repositorio de proyectos ya ejecutados por distintas municipalidades </strong>a lo largo del país, que tiene por objetivo
          <strong> poner a disposición diversas iniciativas y su documentación </strong>asociada al momento de postular a los
          <strong> Programas de Mejoramiento Urbano (PMU) y de Mejoramiento de Barrios (PMB) de esta Subsecretaría.</strong></p>
        <p className="text-sans-p my-md-4"> Toda la información en este repositorio es referencial, <strong>siendo responsabilidad de la unidad ejecutora revisar y actualizar 
          sus valores y aspectos normativos</strong>
        </p>

        <div className="container d-lg-flex my-md-5">
          <div className="col-lg-4 d-flex flex-column mx-lg-2 align-items-center">
            <div className="que-es-circle rounded-circle d-flex align-items-center justify-content-center mb-md-4 my-4" >
              <img src="src/static/img/que_es_1.png" alt="Imagen" className="que-es-img img-fluid rounded-circle h-100 " />
            </div>
            <strong className="text-sans-h4 text-center">Para personas encargadas de Programas de Mejoramiento Urbano y de Barrios</strong>
            <p className="text-sans-p text-center my-3 my-md-4">Dirigido a todo profesional municipal encargado de la formulación de proyectos que se enmarquen en los programas PMU y PMB.</p>
          </div>

          <div className="col-lg-4 d-flex flex-column mx-lg-2 align-items-center">
            <div className="que-es-circle rounded-circle d-flex align-items-center justify-content-center mb-md-4 my-4" >
              <img src="src/static/img/que_es_2.png" alt="Imagen" className="que-es-img img-fluid rounded-circle h-100" />
            </div>
            <strong className="text-sans-h4 text-center">Filtra información y encuentra el proyecto que se ajuste a tu comuna</strong>
            <p className="text-sans-p text-center my-3 my-md-4">Podrás filtrar proyectos por tipo de programa, revisar antecedentes y descargar documentación referencial para postular proyectos adecuados a la realidad de tu comuna.</p>
          </div>

          <div className="col-lg-4 d-flex flex-column mx-lg-2 align-items-center">
            <div className="que-es-circle rounded-circle d-flex align-items-center justify-content-center mb-md-4 my-4" >
              <img src="src/static/img/que_es_3.png" alt="Imagen" className="que-es-img img-fluid rounded-circle" />
            </div>
            <strong className="text-sans-h4 text-center">Entregamos información referencial para la realización de proyectos</strong>
            <p className="text-sans-p text-center my-3 my-md-4">Encontrarás información referencial detallada de proyectos como: planos, especificaciones, presupuestos, e información referencial para su elaboración. </p>
          </div>
        </div>
      </div>

      {/* Quienes somos */}
      <div className="container col-md-8 px-4">
        <h2 className="text-sans-h2 text-center my-4">¿Quiénes somos?</h2>
        <p className="text-sans-p">El Banco de Proyectos es una iniciativa directa de la  Subsecretaría de Desarrollo Regional y Administrativo, cuya información está en permanente actualización.</p>
      </div>

      {/* Banner mapa chile */}
      <div className="container col-md-10 mw-75 d-flex flex-column justify-content-center align-items-center">
        <img src="src/static/img/banner_chile.png" className="w-100 m-5 " alt="mapa de chile" />
      </div>

    </>
  );
};
  
  export default Home;
