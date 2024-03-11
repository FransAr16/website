import Projects from './Projects'
import './project.css'

const Project = () => {
  return (
    <section className="project" id="project">
        <div className="project__container">
            <div className="project__title title-name-section">Project
              {/* NUMBERPAGE */}
              <div className="number__page">
                  <span className='text__page'>003</span>
              </div>
            </div>

            <Projects />


            {/* BORDER LINE ======================================================================*/}
            <div className='shapes'>
                <i class="ri-add-line shape add3"></i>
                <i class="ri-add-line shape add4"></i>
            </div>

            
        </div>
    </section>
  )
}

export default Project