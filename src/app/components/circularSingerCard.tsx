import React from "react";
import Image from "next/image";


type singerCard = {
    singerPic?: string;
    singerName: string;
}

const CircularSingerCard = ({singerPic, singerName}: singerCard)=>{
    return (
        <div className="w-56 h-64 flex flex-col hover:rounded-lg hover:bg-hovercard ">
            <div className="w-52 h-52 m-auto flex items-center justify-center">
                <img className="w-48 h-48 bg-center bg-cover rounded-full" src={`/spotify_imgs/${singerPic}`} alt="" />
            </div>
            
            <p className="pl-4 font-bold text-white">{singerName}</p>
            <p className="pl-4 text-gray-100">Artist</p>
        </div>
    )
}

export default CircularSingerCard;


