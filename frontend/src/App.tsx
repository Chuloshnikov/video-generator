
function App() {

  return (
    <>
      <main className='max-w-2xl mx-auto flex px-4'>
        <div className='py-8 flex flex-col items-center'>
          <h1 className='text-4xl font-bold uppercase mb-8'>
            <span className='text-5xl'>URL to Video</span>
            <br/>with power of AI
          </h1>
            <form className='grid gap-2'>
              <input 
              className='border-2 rounded-full bg-transparent text-white px-4 py-2 grow' 
              type="url" 
              placeholder="https://..."/>
              <button 
              className='bg-emerald-500 text-white font-semibold px-4 py-2 rounded-full'
              type="submit">
                Create&nbsp;video
              </button>
            </form>
        </div>
        <div className='p-8'>
          <div className='bg-gray-200 w-[240px] h-[380px]'>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
