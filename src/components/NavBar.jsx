export default function NavBar() {
  return (
    <>

      <div className="absolute top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="w-6 h-6 cursor-pointer fixed" />
          </div>

          <nav className="hidden items-center gap-1 text-sm font-medium text-gray-900 lg:flex ">
            <a className="cursor-pointer relative group hover:bg-gray-200 px-3 py-2 rounded-md">Products <img className="w-3 h-3 inline group-hover:rotate-180 transition-all" src="/down-arrow.png" alt=">" />
              <ul className="h-[400px] w-[600px] bg-white shadow-black pr-10 rounded-md text-[13px] p-3 flex flex-col gap-3 top-10 left-[-40px] opacity-0 absolute whitespace-nowrap translate-y-10 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              </ul>
            </a>
            <a className="cursor-pointer relative group hover:bg-gray-200 px-3 py-2 rounded-md">Community <img className="w-3 h-3 inline group-hover:rotate-180 transition-all" src="/down-arrow.png" alt=">" />
              <ul className="bg-white shadow-black pr-10 rounded-md text-[13px] p-3 flex flex-col gap-3 top-10 left-0 opacity-0 absolute whitespace-nowrap translate-y-5 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <li>Community Roadmap</li>
                <li>Community Love</li>
                <li>Showcase</li>
                <li>Inspiration Feed</li>
                <li>Slack</li>
                <li>Hire an Expert</li>
              </ul>

            </a>

            <a className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md">Pricing</a>
            <a className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md">Learn</a>
            <a className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md">Contact sales</a>
          </nav>

          <div className="lg:flex hidden items-center gap-4 text-sm">
            <a className="text-gray-900 cursor-pointer">Log in</a>
            <a className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer">Start For Free</a>
          </div>
        </div>
      </div>
    </>
  )
}

