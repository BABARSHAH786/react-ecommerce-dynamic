const Nav = () => {
      
    return(
        <div className="navbar">
            <h1 className="bg-red-500 text-xl font-bold ">logo</h1>
            <a className="font-[44px] " href="/"><li> Home</li></a>
            <a href="/SecMid"><li> SecMid</li></a>
            <a href="/About"><li> About</li></a>

            <div className="bg-gray-100 p-4 rounded-lg">
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind!
      </h1>
      <p className="text-gray-700">This is a test.</p>
    </div>
        </div>
    )
}
export default Nav