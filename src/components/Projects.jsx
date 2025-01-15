import styles from './Projects.module.css'
import Project from './project/ProjectSection';

export default function Projects() {

  const projects = [
    {
      title1: "OffReal",
      title2: "Spaces.",
      src: "offreal.jpg"
    },
    {
      title1: "HerbChick",
      title2: "Foods.",
      src: "herbchick.jpg"
    }
  ]

  return (
    <main className={styles.main}>
        <h1 className='text-2xl md:text-5xl mt-32 mb-10 mb:-mt-32  md:mb-24 font-poppins font-semibold text-[#d3d3d3] '>My Past Projects<span className='text-[#CFFF00]'>.</span></h1>
      <div className={styles.gallery}>
          {
            projects.map( (project,idx) => {
              return <Project key={idx} project={project}/>
            })
          }
      </div>
    </main>
  )
}