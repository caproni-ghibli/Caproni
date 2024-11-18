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
    <div>

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
      
      <div className='w-[calc(100dvw-16px)] -ml-[calc(50dvw-375px+15px)]'>
      
        {!!skill.skills && <Marquee items={ skill.skills } />}
      
      </div>

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
  );
}

export default WorkPage;