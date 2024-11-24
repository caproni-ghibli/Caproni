import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Marquee from '@/components/ui/marquee'
import PAST_ROLES from '@/data/experience'

interface Params {
  id: number;  
}





function WorkPage({ params }: { params: Params }) {
  const skill = PAST_ROLES[params.id];
  return (
    <div className='w-full place-items-center'>


        <div className=' px-5 w-[--page-width] max-w-full'>

          <h2 className="text-xl font-heading sm:text-2xl">
            {skill.role}
          </h2>

          <div className='flex items-center gap-1'>

            <FontAwesomeIcon className='h-3' icon={faCalendar} />
            
            <span>{skill.startDate}</span>
            
            {!!skill.endDate && "-"}
            
            <span>{skill.endDate}</span>

          </div>

          <div className='w-[--page-width] max-w-full'>

            <h3 className='text-lg font-heading'>
              <span className='mr-2'>
               {"Role and impact at "}{skill.company}
              </span>
            </h3>
          
          </div>
                      
          <p>{skill.description}</p>
          
          <br />
          
        </div>

        <div className='md:w-[calc(100vw-16px)]  w-[100vw]'>
        
          {!!skill.skills && <Marquee items={ skill.skills } /> }
          {!!skill.skills && <br /> }
        
        </div>

        <div className='px-5 w-[--page-width] max-w-full'>

          <h3 className='text-lg font-heading'>
            <span className='mr-2'> 
              {"Key Contributions at "}{skill.company}
            </span>
            
            <RoughNotation type="highlight" order={2} color="#a3e636"  multiline={false}  >
              <span className='dark:text-text'>
              </span>
            </RoughNotation>
          </h3>

          <ul className='list-disc'>
            {skill.keyResponsibilities.map((keyResponsibility, id) => (
              <li className='m-3' key={id}>{keyResponsibility}</li>
            ))}
          </ul>

          
          {!!skill.skills && (<hr className="w-auto h-1 -mx-6 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />)}
          
          {!!skill.skills && <h3 className='text-lg font-heading'>
            <span className='mr-2'>
             { "Technologies I used at "}  {skill.company}
            </span>
          </h3>}

          <span>
            {!!skill.skills && skill.skills.map((oneSkill, id) => (
              <span key={id} className='m-3'>
                 {oneSkill.skill}{ !!skill.skills && id < skill.skills.length - 1 && ', '}
              </span>
            ))}
          </span>

          {!!skill.closingStatement && (<hr className="w-auto h-1 -mx-6 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />)}

          <p>
            {!!skill.closingStatement && skill.closingStatement}
          </p>

        </div>

      <br />

    </div>
  
  );
}

export default WorkPage;