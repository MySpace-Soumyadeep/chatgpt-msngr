import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className=" flex flex-col text-white items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

<div className='flex space-x-2 text-center'>
  <div>
    <div className=" flex flex-col items-center mb-5">
      {/* Sun icon */}
      <SunIcon className="h-8 w-8"/>
      <h2>Examples</h2>
    </div>

    <div className="space-y-2">
      <p className="infoText">"Explain quantum computing in simple terms"</p>
      <p className="infoText"> "Got any creatiave ideas for a 10 year old’s birthday?"</p>
      <p className="infoText">"How do I make an HTTP request in Javascript?"</p>
    </div>
  </div>

  <div>
    <div className=" flex flex-col items-center mb-5">
      {/* Sun icon */}
      <BoltIcon className="h-8 w-8"/>
      <h2>Capabilities</h2>
    </div>

    <div className="space-y-2">
      <p className="infoText">"Remener what user said earlier in the conversation"</p>
      <p className="infoText"> "Allow user to provide follow up corrections"</p>
      <p className="infoText">"Trained to dcline inappropriate requests"</p>
    </div>
  </div>

  <div>
    <div className=" flex flex-col items-center mb-5">
      {/* Sun icon */}
      <ExclamationTriangleIcon className="h-8 w-8"/>
      <h2>Limitations</h2>
    </div>

    <div className="space-y-2">
      <p className="infoText">"May occasionally generate incorrect informastions"</p>
      <p className="infoText"> "May occasionally generate incorrect informastions"</p>
      <p className="infoText">T"Limited knowledge of the world and events after 2021"</p>
    </div>
  </div>
</div>


    </div>
  )
}

export default HomePage