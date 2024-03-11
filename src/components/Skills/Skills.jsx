import { useState } from 'react'
import './skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'


const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };


  return (
    <section className="skills" id="skills">
        <div className='skills__container'>

            {/* CONTENT */}
            <div className="skills__title title-name-section">Skills
            
                {/* NUMBERPAGE */}
                <div className="number__page">
                    <span className='text__page'>002</span>
                </div>
            </div>

            <div className="skills__content">
                <div className="skills__item">
                    {SKILLS.map((item) => (
                        <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                            handleSelectSkill(item);
                        }}
                        />    
                    ))}
                </div>

                <div className="skills__info">
                    <SkillsInfoCard 
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>

            
        {/* BORDER LINE ======================================================================*/}
            <div className='shapes'>
                <i class="ri-add-line shape add3"></i>
                <i class="ri-add-line shape add4"></i>
            </div>
        </div>
    </section>
  )
}

export default Skills