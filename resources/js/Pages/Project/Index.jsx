import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function index({projects}){
  console.log(projects)

  return (

    <>

    <AuthenticatedLayout
       header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Projects
        </h2>
    }
    >

<Head title="Projects" />

<div className="py-12">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              Projects
            </div>
        </div>
    </div>
</div>

{projects.map((project)=> (
<div key={project.id}>
  <h2>{project.name}</h2>
  <p>{project.description}</p>
</div>
))}
{/* <div>
  {projects.map((project) => (
    <div key={project.id}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  ))}
</div> */}


    </AuthenticatedLayout>



    </>
  )
}
