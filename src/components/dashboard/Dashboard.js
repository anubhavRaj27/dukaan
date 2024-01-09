import React from 'react'
import Outercontainer from '../sidebar/Outercontainer'
import Searchsection from '../searchSection/Searchsection'
import Overview from '../overview/Overview'

function Dashboard() {
  return (
    <div className="relative bg-black-98 w-full h-[882px] text-left text-xl text-black-12 font-body-2-medium">
      <Searchsection />
      <div className="absolute top-[96px] left-[250px] w-[1152px] flex flex-col items-start justify-start gap-[32px]">
        <Overview />
      </div>
      <Outercontainer />
    </div>
  )
}

export default Dashboard