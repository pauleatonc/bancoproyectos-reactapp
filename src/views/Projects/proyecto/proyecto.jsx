import { useParams } from "react-router-dom";
import useApiProjectsDetail from "../../../hooks/useApiProjectsDetail";
import Carrusel from "../../../components/Proyecto/carrusel";
import ProyectosRelacionados from "../../../components/Proyecto/proyectosRelacionados";

const Proyecto = () => {
const { slug } = useParams();
const { dataProject, loadingProject, errorProject } = useApiProjectsDetail(slug);

if (loadingProject) {
  return <div>CARGANDO DATOS...</div>
}
if (errorProject) {
  return <div>Error de conexión: {errorProject}</div>
}

  return (
    <div className="container col-10">
      {/* Boton volver y breadcrumbs */}
      <div className="d-flex align-items-center">
        <button className="volver-btn d-none d-lg-block"> &lt; volver</button>
        <p className="m-0 d-none d-lg-block me-3 opacity-50">|</p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item "><a className="breadcrumbs" href="/" >Inicio</a></li>
            <li className="breadcrumb-item"><a className="breadcrumbs" href="/bancodeproyectos" >Banco de Proyectos</a></li>
            <li className="breadcrumb-item active d-none d-lg-block" aria-current="page">{dataProject.name}</li>
          </ol>
        </nav>
      </div>

      <h1 className="text-sans-h1 my-md-5">{dataProject.name}</h1>

      {/* Descripcion del proyecto */}
      <div className="descripcion-container py-3 px-3">
        <h2 className="text-sans-h2 my-2">Descripción del proyecto</h2>
        <p className="text-sans-p">{dataProject.description}</p>
      </div>
      
      {/* Tabla detalles del proyecto */}
      <div className="detalles-del-proyecto my-4 mt-5">
        <h2 className="text-sans-h2-white ms-3 ">Detalles del proyecto</h2>
      </div>
      <div className="ms-3">
        <div className="row">
          <div className="col">
            <p className="text-sans-p"><strong>Nombre del proyecto</strong></p>
            <p className="text-sans-p">{dataProject.name}</p>
          </div>

          <div className="col">
            <p className="text-sans-p"><strong>Programa</strong></p>
            <p className="text-sans-p">{dataProject.program.name}</p>
          </div>

          <div className="col">
            <p className="text-sans-p"><strong>Tipo de proyecto</strong></p>
            <p className="text-sans-p">{dataProject.type.name}</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="text-sans-p"><strong>Región</strong></p>
            <p className="text-sans-p">{dataProject.comuna.region}</p>
          </div>

          <div className="col">
            <p className="text-sans-p"><strong>Comuna</strong></p>
            <p className="text-sans-p">{dataProject.comuna.comuna}</p>
          </div>

          <div className="col">
            <p className="text-sans-p"><strong>Año de construcción</strong></p>
            <p className="text-sans-p">{dataProject.year.number}</p>
          </div>
        </div>
        
        <div className="row">
          <p className="text-sans-p"><strong>Código de identificación SUBDERE</strong></p>
          <p className="text-sans-p">{dataProject.id_subdere}</p>
        </div>
      </div>
      
      {/* Imágenes del proyecto */}
      <h2 className="text-sans-h2 my-5">Imágenes del proyecto</h2>
      
      <Carrusel imgPortada={dataProject.portada} imgGeneral={dataProject.images}/>

      
      {/* Imágenes antes y después */}
      { (dataProject.beforeimage && dataProject.afterimage) && 
        <>
          <div className=" p-0 d-md-flex justify-content-between my-4">
            <div className="col-md-6">
              <h3 className="text-sans-h3">Antes del proyecto</h3>
              <img src={dataProject.beforeimage} className="img-proyecto"/>
            </div>
            <div className="col-md-6">
              <h3 className="text-sans-h3">Después del proyecto</h3>
              <img src={dataProject.afterimage} className="img-proyecto"/>
            </div>
          </div>
        </>
      }

      {/* Video del proyecto */}
      { dataProject.video && 
        <>
          <h3 className="text-sans-h3">Video del proyecto</h3>
          <div className="d-flex justify-content-center mb-md-5">
            <div className="col-md-7 img-proyecto" src={dataProject.video} />
          </div>
        </>
      }

      {/* Tabla documentos del proyecto */}
      <h2 className="text-sans-h2 my-4">Documentos del proyecto</h2>
        <div className="row my-4 fw-bold border-top">
            <div className="col-1 mt-3">#</div>
            <div className="col mt-3">Documento</div>
            <div className="col mt-3">Formato</div>
            <div className="col mt-3">Acción</div>
        </div>

        {/* Especificaciones Técnicas */}
        <div className="row border-top grey-table-line">
            <div className="col-1 p-3">1</div>
            <div className="col p-3">Especificaciones Técnicas</div>
            <div className="col p-3">PDF</div>
            <a className="col p-3 text-sans-p-blue" href={dataProject.eett} target="_blank" rel="noopener noreferrer">Descargar</a>
        </div>

        {/* Presupuesto */}
        <div className="row border-top">
            <div className="col-1 p-3">2</div>
            <div className="col p-3">Presupuesto</div>
            <div className="col p-3">PDF</div>
            <a className="col p-3 text-sans-p-blue" href={dataProject.presupuesto} target="_blank" rel="noopener noreferrer">Descargar</a>
        </div>

          {
            dataProject.files.map((file, index) => (
                <div key={index} className={`row border-top ${index % 2 === 0 ? 'grey-table-line' : 'white-table-line'}`}>
                    <div className="col-1 p-3">{index + 3}</div>  {/* Comenzamos desde el índice 3 porque ya mostramos 2 documentos anteriormente */}
                    <div className="col p-3">{file.name}</div>
                    <div className="col p-3">{file.file_format}</div>
                    <a  className="col p-3 text-sans-p-blue" href={file.file} target="_blank" rel="noopener noreferrer">Descargar</a>
                </div>
            ))
          }

      {/* Normativa por tipo de proyecto */}
      { dataProject.type && dataProject.type.guides && dataProject.type.guides.length > 0 &&
        <>
        <h2 className="text-sans-h2 my-4 mt-5">Documentos con normativa de uso general</h2>
        <div className="row my-4 fw-bold border-top">
          <div className="col-1 mt-3">#</div>
          <div className="col mt-3">Documento</div>
          <div className="col mt-3">Formato</div>
          <div className="col mt-3">Acción</div>
        </div>
          {
            dataProject.type.guides.map((guide, index) => (
                <div key={index} className={`row border-top ${index % 2 === 0 ? 'grey-table-line' : 'white-table-line'}`}>
                    <div className="col-1 p-3">{index + 1}</div>
                    <div className="col p-3">{guide.name}</div>
                    <div className="col p-3">{guide.guide_format}</div>
                    <a className="col p-3 text-sans-p-blue" href={guide.guide} target="_blank" rel="noopener noreferrer">Descargar</a>
                </div>
            ))
          }
        </>
      }


      <h2 className="text-sans-h2 my-4 mt-5">Proyectos relacionados</h2>
      <ProyectosRelacionados currentSlug={ dataProject.slug } />
    </div>

  );
}; 
export default Proyecto;