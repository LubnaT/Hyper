import React from 'react'

function Tweet(props) {
  return (
    <div className='w-[360px] h-[530px] rounded-3xl bg-white relative top-0 mt-[20px] ml-[20px]'>

<div className='flex h-[150px] w-[360px]'>
                <img className='h-[150px] w-[360px] rounded-t-3xl' src={props.showImg}/> 
            </div>
            {/* <!-- image middle --> */}
            <div className='absolute top-[100px] left-[120px]'>
                <img  className='h-[90px] w-[100px] rounded-full' src={props.middleImg}/> 
                        
            </div>
            {/* <!-- menu dot --> */}
            <div className="absolute top-[160px] left-[300px]">
                <img className="h-[30px] w-[30px]" src={props.menuDot}/>            
            </div>
            {/* <!-- heading --> */}
            <div className="mt-[60px] text-center flex flex-col">
                <span className="text-2xl font-semibold shadow-sm">{props.name}</span>
                <span className="text-md text-zinc-400">{props.ant}</span>
            </div>

            {/* <!-- followers --> */}
            <div className="mt-[20px] text-center flex flex-row">
                <div className="flex flex-col ml-[80px] ">
                    <span className="text-3xl text-cyan-500 font-bold">12</span>
                <span className="text-md text-zinc-400"> Followers</span>
                </div>
                <div className="flex flex-col ml-[60px]">
                    <span className="text-3xl font-bold text-cyan-500">1000</span>
                <span className="text-md  text-zinc-400">Following</span>
                </div>
            </div>

            {/* <!-- button --> */}
            <div className="mt-[20px] ml-[50px]">
                <button className="w-[250px] h-[40px] self-center bg-yellow-400 rounded-full"> Follow </button>

            </div>
            {/* <!-- para --> */}
            <div className="mt-[20px] mx-[40px] w-[300px]">
                <p  className="text-zinc-700 font-mono"> Morgan has collected ants since they were six years old and now has many dozens ants but none in there pants</p>

            </div>
    
    </div>
  )
}

export default Tweet