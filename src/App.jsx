import React from 'react'
import Navbar1 from './Component/Header'
import Navbar from './Component/Header'
import Table, { SelectColumnFilter, StatusPill } from './Table'  // new

const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'Not Assigned Role',
      role: 'Admin',
      age: 27,
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Assigned Role',
      role: 'Owner',
      age: 43,
      imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
   
   
  ]
  return [...data, ...data, ...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "utilisateurs",
      accessor: 'name',
      emailAccessor: "email",
    },
    {
      Header: "Roles",
      accessor: 'role',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
    {
      Header: "Action",
      accessor: 'title',
    },
    
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <Navbar/>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
         
          <h1 className="text-xl font-semibold text-center">Gestion des utilisateurs </h1>
        </div>
        <div className="mt-6">

          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
