
function JobFooter() {
  return (
    <div className='w-[1438px] bg-white pt-8 pb-10 h-[350px] pl-28 border border-[#E7E7E7]'>
        <span className="flex gap-4 items-center">
        <img src="/icons/Rectangle 5.svg" alt="" className="w-10 h-10" />
        <h1 className="text-[#4F4F4F] text-xl font-medium">Atlassian</h1>
        </span>
        <div className="flex items-center justify-start gap-40">
           <div className="mt-10 flex flex-col gap-6">
              <div>
                <h1 className="text-[#6E6D6D] text-sm font-medium">Company Size</h1>
                <h1 className="text-[#3D3D3D] text-base mt-2 font-medium">1k - 2k Employees</h1>
              </div>
              <div>
                <h1 className="text-[#6E6D6D] text-sm font-medium">Sector</h1>
                <h1 className="text-[#3D3D3D] text-base mt-2 font-medium">Information Technology, Infrastructure</h1>
              </div>
              <div>
                <h1 className="text-[#6E6D6D] text-sm font-medium">Founded In</h1>
                <h1 className="text-[#3D3D3D] text-base mt-2 font-medium">2019</h1>
              </div>
           </div>
           <div className="mt-10 flex flex-col gap-6">
              <div>
                <h1 className="text-[#6E6D6D] text-sm font-medium">Type</h1>
                <h1 className="text-[#3D3D3D] text-base mt-2 font-medium">Private</h1>
              </div>
              <div>
                <h1 className="text-[#6E6D6D] text-sm font-medium">Funding</h1>
                <h1 className="text-[#3D3D3D] text-base mt-2 font-medium">Bootstrapped</h1>
              </div>
              <div>
                <h1 className="text-[#6E6D6D] text-sm font-medium">Founded By</h1>
                <h1 className="text-[#3D3D3D] text-base mt-2 font-medium">Scott Faruhar, Mike Cannon-Brookes</h1>
              </div>
           </div>
        </div>
    </div>
  )
}

export default JobFooter


//Atlassian row