import PAST_ROLES from '@/data/experience'

interface Params {
  id: number;  
}

function WorkPage({ params }: { params: Params }) {

  return (
    <div>
      <h1>Work Page: {PAST_ROLES[params.id].role}</h1>
      {/* You can add additional logic here to fetch data based on the `id` */}
    </div>
  );
}

export default WorkPage;