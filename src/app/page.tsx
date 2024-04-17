import Image from "next/image";
import CircularSingerCard from "./components/circularSingerCard";
import AlbumCard from "./components/albumCard";

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
    <main className="fixed bg-black w-full h-screen flex flex-col font-sans" style={{padding:"8px"}}>

      <div className="flex" style={{height:"calc(100% - 78px)", gap:"8px"}}>
        <aside className="min-w-40 flex flex-col gap-2" style={{width:"320px"}}>
          <header className="w-full h-40 bg-primary m-auto rounded-xl">
            <div className="w-5/6 flex m-auto mt-5">
              <Image 
              src="/spotify.svg" 
              alt= ""
              width={25} 
              height={25} 
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
                width={25} 
                height={25} 
                />
                <span className="pl-4 text-gray-400">Inicio</span>
                              
                </li>
                <br />
                <li className="flex">
                <Image 
                src="/search.svg" 
                alt= ""
                width={25} 
                height={25} 
                />
                <span className="pl-4 text-gray-400">Procurar</span>
                </li>
              </ul>
            </nav>
            
          </header>

          <div className="w-full flex flex-col flex-1 m-auto pt-3 bg-primary rounded-xl">
            <div className="w-11/12 flex justify-between ml-auto mr-auto">
              <Image 
                  src="/search.svg" 
                  alt= ""
                  width={30} 
                  height={30} 
                  />
              <p className="text-textColor font-semibold">Your Library</p>
              <Image 
                  src="/plus.svg" 
                  alt= ""
                  width={30} 
                  height={30} 
                  />
            </div>

            <div className="w-11/12 h-36 ml-auto mr-auto mt-8 rounded-md rounded-tr-md" style={{background:"#242424"}}>
              <h2 className="font-bold p-4 pb-2 text-white font-sans">Create your first playlist</h2>
              <p className="font-mb text-white pl-4 text-sm">It's easy, we'll help you</p>
              <button className="bg-white w-36 h-8 rounded-2xl font-semibold text-center ml-5 mt-5 text-sm">Create playlist</button>
            </div>

            <div className="w-11/12 h-44 ml-auto mr-auto mt-8 rounded-md rounded-tr-md" style={{background:"#242424"}}>
              <h2 className="font-bold p-4 pb-2 text-white font-sans">Let's find some podcasts to follow</h2>
              <p className="font-mb text-white pl-4 text-sm">We'll keep you updated on new episodes</p>
              <button className="bg-white w-36 h-8 rounded-2xl font-semibold text-center ml-5 mt-5 text-sm">Browse podcasts</button>
            </div>

            <div className="font-sm text-textColor mt-16 font-semibold flex flex-col gap-2" style={{fontSize:"11px"}}>

                <ul className="flex pl-5 gap-4 ">
                  <li className="">Legal</li>
                  <li>Safety & Privancy Center</li>
                </ul>

                <ul className="flex pl-5 gap-4">
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                  <li>About Ads</li>
                </ul>

                <ul className="flex pl-5 gap-4"> <li>Accessibility</li> </ul>
                <ul className="flex pl-5 gap-4"> <li>Cookies</li> </ul>
         
            </div>

            {/* <div className=""></div> */}

            <button className="w-24 h-9 rounded-3xl flex items-center justify-center gap-1 border border-gray-500 ml-6 mt-11">
                <Image 
                  src="/globe.svg" 
                  alt= ""
                  width={20} 
                  height={20} 
                />
                <span className="text-center font-bold text-white">English</span>
            </button>

          </div>

        </aside>


        <main className="w-full bg-secondary overflow-y-auto" id="mainDiv">

          <div className="w-full h-16 flex justify-between rounded-tr-2xl" style={{backgroundColor: "#101010"}}>
            <div className="w-24 flex items-center justify-around">
                <button className="bg-cover bg-center w-7 h-7 rounded-full bg-no-repeat" style={{backgroundImage:"url('chevron-left.svg')", backgroundSize:"18px", backgroundColor:"#090909"}}></button>
                <button className="bg-cover bg-center w-7 h-7 rounded-full bg-no-repeat" style={{backgroundImage:"url('chevron-right.svg')", backgroundSize:"18px", backgroundColor:"#090909"}}></button>
            </div>

            <div className="w-56 flex justify-around items-center mr-3">
              <button className="w-24 h-10 text-textColor font-bold hover:text-white hover:text-lg">Sign up</button>
              <button className="w-24 h-12 bg-white rounded-3xl text-primary font-bold hover:scale-105">Log in</button>
            </div>

          </div>

          <div className="w-full bg-secondary flex flex-col">
            <p className="text-white font-extrabold w-full pl-8 text-2xl font-sans">Popular artists</p>
            <br/>
            <div className="w-full  flex overflow-hidden">
                <CircularSingerCard singerName="Drake" singerPic="drake.jpg"/>
                <CircularSingerCard singerName="Taylor Swift"singerPic="taylor_swift.jpg" />
                <CircularSingerCard singerName="The Weeknd" singerPic="the_weeknd.jpg"/>
                <CircularSingerCard singerName="Kanye West" singerPic="kanye_west.jpg" />
                <CircularSingerCard singerName="Beyoncé" singerPic="beyoce.jpg"/>
                <CircularSingerCard singerName="Rihanna" singerPic="rihanna.jpg"/>
            </div>
          </div>
          <br />
          <div className="w-full">
            <p className="text-white font-extrabold w-full pl-8 text-2xl font-sans">Popular albums</p>
              <div className="w-full  flex overflow-hidden">

                <AlbumCard albumTitle="WE DON'T TRUST YOU" albumName="Future, Metro, Boomin" albumPic="future.jpg"/>
                <AlbumCard albumTitle="COWBOW CARTER" albumName="Beyocé" albumPic="beyoce.jpg"/>
                
                <AlbumCard albumTitle="One Thing At A Time" albumName="Morgan Wallen" albumPic="one_thing_at_a_time.jpg"/>

                <AlbumCard albumTitle="eternal sunshine" albumName="Ariana Grande" albumPic="eternal_sunshine.jpg"/>
                {/* <AlbumCard albumTitle="we don´t trust you" albumName="Future, Metro, Boomin" albumPic="drake.jpg"/> */}
  
              </div>
          </div>
          <br />
          {/* <div className="w-full bg-secondary">
            <p className="text-white font-extrabold w-full pl-8 font-sans text-2xl">Popular radio</p>
              <div className="w-full  flex overflow-hidden">

                <AlbumCard albumTitle="Morgan Wallen Radio" albumName="Wt, Metro, Boomin" albumPic="morgan_wallen.jpg"/>

                <AlbumCard albumTitle="COWBOW CARTER" albumName="Beyocé" albumPic="zach_bryan.jpg"/>
                
                <AlbumCard albumTitle="One Thing At A Time" albumName="Morgan Wallen" albumPic="noah_kahan.jpg"/>

                <AlbumCard albumTitle="eternal sunshine" albumName="Ariana Grande" albumPic="hozier_radio.jpg"/>
                <AlbumCard albumTitle="eternal sunshine" albumName="Ariana Grande" albumPic="taylor_swift.jpg"/>
  
              </div>
          </div> */}
          <br />
          <div className="w-full bg-secondary">
            <p className="text-white font-extrabold w-full pl-8 font-sans text-2xl">Featured Charts</p>
              <div className="w-full  flex overflow-hidden">

                <AlbumCard albumTitle="Top Songs - Global" albumName="Your weekly update" albumPic="top_songs_global.jpg"/>

                <AlbumCard albumTitle="Top Songs - USA" albumName="Your weekly update" albumPic="top_songs_usa.jpg"/>
                
                <AlbumCard albumTitle="Top 50 - Global" albumName="Your dialy update of the" albumPic="viral_50.jpg"/>

  
              </div>
          </div>
          <br />

        <br />



          <div className="flex justify-around text-white pt-5 pb-5 ">

            <div>
              <h2 className="font-bold font-sans">Company</h2>
              <p className="font-sans text-textColor pt-2">About</p>
              <p className="font-sans text-textColor pt-1">Jobs</p>
              <p className="font-sans text-textColor pt-1">For the</p>
              <p className="font-sans text-textColor pt-1">Record</p>
            </div>

            <div>
              <h2 className="font-bold font-sans">Communities</h2>
              <p className="font-sans text-textColor pt-2">For Artists</p>
              <p className="font-sans text-textColor pt-1">Developers</p>
              <p className="font-sans text-textColor pt-1">Advertising</p>
              <p className="font-sanstext-textColor text-textColor pt-1">Investors</p>
              <p className="font-sans text-textColor pt-1">Vendors</p>
            </div>

            <div>
              <h2 className="font-bold font-sans text-white">Useful links</h2>
              <p className="font-sans text-textColor pt-2">Support</p>
              <p className="font-sans text-textColor pt-1">Free Mobile App</p>
            </div>

            <div>
              <h2 className="font-bold text-white font-sans">Spotify Plans</h2>
              <p className="font-sans text-textColor pt-2">Premium Individual</p>
              <p className="font-sans text-textColor pt-1">Premium Duo</p>
              <p className="font-sans text-textColor pt-1">Premium Family</p>
              <p className="font-sans text-textColor pt-1">Premium Student</p>
              <p className="font-sans text-textColor pt-1">Spotify Free</p>
            </div>

            <div className="flex gap-5">
              <button className="bg-cover bg-center w-12 h-12 rounded-full bg-no-repeat" style={{backgroundImage:"url('instagram.svg')", backgroundSize:"18px", backgroundColor:"#292929"}}></button>

              <button className="bg-cover bg-center w-12 h-12 rounded-full bg-no-repeat" style={{backgroundImage:"url('twitter.svg')", backgroundSize:"18px", backgroundColor:"#292929"}}></button>

              <button className="bg-cover bg-center w-12 h-12 rounded-full bg-no-repeat" style={{backgroundImage:"url('facebook.svg')", backgroundSize:"18px", backgroundColor:"#292929"}}></button>
            </div>

          </div>

          <footer>
            <hr />
            <br />
            <p className="pl-5 text-textColor font-sans">@ 2024 Spotify AB</p>
            <br />
          </footer>
        </main>

      </div>



      
      <div className="w-full mt-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold pl-4 flex justify-between items-center" style={{height: "65px"}}>
        <div>
          <p>Preview of Spotify</p>
          <p>Sign up to get inlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>

        <div className="mr-7">
          <button className="bg-white w-36 h-11 rounded-3xl text-black">Sign up free</button>
        </div>
        
      </div>



     

    </main>
  

  );
}

