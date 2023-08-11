import useApiProjectsDetail from "../../../hooks/useApiProjectsDetail";
import { useParams } from 'react-router-dom';

const Proyecto = () => {
  const { slug } = useParams();
  const { dataProject, loadingProject, errorProject } = useApiProjectsDetail(slug);

  if (loadingProject) {
    return  <div>Loading...</div>
  }
  if (errorProject) {
    return <div>Error: {errorProject}</div>;
  }

  return (
    <div className="container col-10">
      {/* Boton volver y breadcrumbs */}
      <div className="d-flex align-items-center">
        <button className="volver-btn d-none d-lg-block"> &lt; volver</button>
        <p className="m-0 d-none d-lg-block">|</p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item"><a href="/" >Inicio</a></li>
            <li className="breadcrumb-item"><a href="/bancodeproyectos" >Banco de Proyectos</a></li>
            <li className="breadcrumb-item active d-none d-lg-block border border-danger" aria-current="page">Como hacer dinamico esto?</li>
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
      <div className=" border border-danger">carrusel de fotos</div>

      <div className=" p-0 d-md-flex justify-content-between my-4">
        <div className="col-md-6">
          <h3 className="text-sans-h3">Antes del proyecto</h3>
            <img src={dataProject.beforeimage} className="img-fluid p-1" alt='fotografía de antes del proyecto'/>
        </div>
        <div className="col-md-6">
          <h3 className="text-sans-h3">Después del proyecto</h3>
          <img src={dataProject.afterimage} className="img-fluid p-1" alt='fotografía de después del proyecto'/>
        </div>
      </div>

      <h3 className="text-sans-h3">Video del proyecto</h3>
      <div className="d-flex justify-content-center mb-md-5">
        <img src={dataProject.video} className="img-fluid p-1" alt='Video del proyecto'/>
      </div>

      <h2 className="text-sans-h2 my-4">Documentos del proyecto</h2>
      <div className=" d-flex justify-content-between my-4 font-weight-bold">
        <div>#</div>
        <div>Documento</div>
        <div>Formato</div>
        <div>Acción</div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>1</div>
        <div>Planimetría</div>
        <div>PDF</div>
        <a href="#">Descargar</a>
      </div>

      <h2 className="text-sans-h2 my-4">Documentos con normativa de uso general</h2>
      <div className="d-flex justify-content-between my-4 font-weight-bold">
        <div>#</div>
        <div>Documento</div>
        <div>Formato</div>
        <div>Acción</div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>1</div>
        <div>Guía Operativa PMU</div>
        <div>PDF</div>
        <a href="#">Descargar</a>
      </div>

      <h2 className="text-sans-h2 my-4">Proyectos relacionados</h2>
      <div className=" border border-warning">componente?</div>
    </div>

  );
};
  
export default Proyecto;