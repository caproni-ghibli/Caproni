import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import PAST_ROLES from '@/data/experience'

export default function Work() {

  return (
    <div className=' w-[--page-width]  px-5 max-w-full'>

      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {PAST_ROLES.map((pastRole, id) => {
          return (
            <Link 
              href={`work/${id}`} 
              key={id}
              passHref
            >
              <div
                className="
                  border-border h-full dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5 text-text font-base flex flex-col justify-between cursor-pointer
                    transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none
                  "
              >
                
                <h2 className="text-xl font-heading sm:text-2xl">
                  {pastRole.role}
                </h2>

                <p className="mt-2">{pastRole.company}</p>

                <div className='flex items-center gap-1'>

                  <FontAwesomeIcon className='h-3' icon={faCalendar} />
                  
                  <span>{pastRole.startDate}</span>
                  
                  {!!pastRole.endDate && "-"}
                  
                  <span>{pastRole.endDate}</span>
                
                </div>
                
              </div>

            </Link>
          )
        })}
      </div>
    </div>
  )
}
