export default function Hero() {
  return (
    <>
      <div className="group pt-[-30px] w-screen flex justify-center items-center flex-col h-[450px] mb-20 relative top-15 ">
        <div className=" opacity-50 bg-amber-500 w-[250px] h-[110px] m-10 rounded-md absolute top-[50px] left-[-180px] group-hover:translate-x-[30px] transition-all duration-700"></div>
        <div className=" opacity-50 bg-amber-500 w-[250px] h-[110px] m-10 rounded-md absolute top-[180px] left-[-230px] group-hover:translate-x-[30px] transition-all duration-900"></div>
        <div className=" opacity-50 bg-amber-500 w-[250px] h-[110px] m-10 rounded-md absolute top-[310px] left-[-180px] group-hover:translate-x-[30px] transition-all duration-500"></div>
        <div className=" opacity-50 bg-amber-500 w-[250px] h-[110px] m-10 rounded-md absolute top-[50px] right-[-180px] group-hover:translate-x-[-30px] transition-all duration-700"></div>
        <div className=" opacity-50 bg-amber-500 w-[250px] h-[110px] m-10 rounded-md absolute top-[180px] right-[-230px] group-hover:translate-x-[-30px] transition-all duration-900"></div>
        <div className=" opacity-50 bg-amber-500 w-[250px] h-[110px] m-10 rounded-md absolute top-[310px] right-[-180px] group-hover:translate-x-[-30px] transition-all duration-500"></div>
        <h1 className="lg:text-7xl text-6xl font-[470] font-inter text-center w-[70%] mb-10 z-10">Websites designed & built faster with AL</h1>
        <p className="lg:text-xl text-lg font-inter text-center w-[60%] z-10">Use Al as your design ally, not a replacement. Instantly generate Sitemaps, Wireframes and Style Guides for marketing websites—all in minutes</p>
      </div>
    </>
  )

}
