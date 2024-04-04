import Image from "next/image";

export default function Home() {
//   <Image
//   src="/vercel.svg"
//   alt="Vercel Logo"
//   className="dark:invert"
//   width={100}
//   height={24}
//   priority
// />
  return (
    <main className="w-full h-screen flex">
      <aside className="w-96 h-full bg-slate-50 flex flex-col gap-3">
        <header className="w-11/12 bg-slate-800 h-48 m-auto rounded-md mt-2">
          <div className="w-5/6 flex m-auto mt-5">
            <Image 
            src="/spotify.svg" 
            alt= ""
            width={30} 
            height={30} 
            />
            <p className="text-white font-bold"><span className="pl-2">Spotify</span></p>
          </div>
          <br />
          <nav className="w-5/6 m-auto">

            <ul>
              <li className="flex">
                <Image 
              src="/house-door.svg" 
              alt= ""
              width={30} 
              height={30} 
              />
              <span className="pl-4 text-gray-400">Inicio</span>
                            
              </li>
              <br />
              <li className="flex">
              <Image 
              src="/search.svg" 
              alt= ""
              width={30} 
              height={30} 
              />
              <span className="pl-4 text-gray-400">Procurar</span>
              </li>
            </ul>
          </nav>
          

        </header>

        <div className="w-11/12 flex flex-col flex-1 m-auto pt-3 bg-gray-900 rounded-md mb-2">
          <div className="w-11/12 flex justify-between ml-auto mr-auto">
            <Image 
                src="/search.svg" 
                alt= ""
                width={30} 
                height={30} 
                />
            <p>a tua biblioteca</p>
            <Image 
                src="/plus.svg" 
                alt= ""
                width={30} 
                height={30} 
                />
          </div>

          <div className="w-11/12 h-24 bg-gray-700 ml-auto mr-auto mt-4 rounded-tl-md rounded-tr-md">
            <h3 className="text-center font-bold">Create your first playlist</h3>
          </div>
        </div>

        

      </aside>


      <main className=" bg-red-500">

      </main>

    </main>
  );
}

