import PAST_ROLES from '@/data/experience'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Marquee from '@/components/ui/marquee'

interface Params {
  id: number;  
}

function WorkPage({ params }: { params: Params }) {
  const skill = PAST_ROLES[params.id];
  return (
    <div className='w-full place-items-center'>

      <div className=' px-5 w-[750px] max-w-full'>

        <h2 className="text-xl font-heading sm:text-2xl">
          {skill.role}
        </h2>

        <div className='flex items-center gap-1'>

          <FontAwesomeIcon className='h-3' icon={faCalendar} />
          
          <span>{skill.startDate}</span>
          
          {!!skill.endDate && "-"}
          
          <span>{skill.endDate}</span>

        </div>

        <p className="mt-2 mr-auto">{skill.company}</p>

        <br />
                    
        <p>{skill.description}</p>
        
        <br />
        
      </div>

      <div className='md:w-[calc(100vw-16px)]  w-[100vw]'>
      
        {!!skill.skills && <Marquee items={ skill.skills } />}
      
      </div>


      <div className='px-5 w-[750px] max-w-full'>

        <br />

        <ul className='list-disc'>
          {skill.keyResponsibilities.map((keyResponsibility, id) => (
            <li className='m-3' key={id}>{keyResponsibility}</li>
          ))}
        </ul>

        <br />

        <p>
          {!!skill.closingStatement && skill.closingStatement}
        </p>

      </div>
    </div>
  
  );
}

export default WorkPage;