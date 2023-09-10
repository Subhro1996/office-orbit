const inputClass = 'w-3/4 rounded shadow py-3 m-4 text-left px-2 hover:ring-1 focus:ring-2 focus:ring-indigo-600'
function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-12 px-6 bg-slate-200">
      <h2 className="text-center text-2xl font-semibold">Sign in to your account</h2>
      <div className="m-6 w-full lg:w-1/2 sm:w-3/4 bg-gray-100 shadow-md rounded hover:shadow-lg">
        <form className="item-center">
          <div className="m-4">
            <label className="px-4 font-semibold text-gray-600" >Email Address :</label>
            <div className="">
              <input type="email" placeholder="enter email" name="email" 
               className={inputClass}
              />
            </div>
          </div>
          <div className="m-4">
            <label className="px-4 font-semibold text-gray-600">Password :</label>
            <div className="">
            <input type="password" placeholder="enter password" name="password"
              className={inputClass}
            />
            </div>
          </div>
          <div className="px-4 m-4 float-right">
            <button type="button" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:shadow-lg" >Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
