
import React from "react";


type TalbumCard = {
    albumPic?: string;
    albumTitle: string;
    albumName: string;
}

const AlbumCard = ({albumPic, albumTitle, albumName}: TalbumCard)=>{
    return (
        <div className="w-210 h-64 flex flex-col" style={{width:"210px"}}>
            <div className="w-11/12 h-60 m-auto flex items-center justify-center">
                <img className="w-48 h-48 bg-center bg-cover rounded-lg" src={`/spotify_imgs/${albumPic}`} alt="" />
            </div>
           

            <p className="pl-4 font-bold text-white font-sans ">{albumTitle}</p>
            <p className="pl-4 text-gray-100">{albumName}</p>
        </div>
    )
}

export default AlbumCard;


