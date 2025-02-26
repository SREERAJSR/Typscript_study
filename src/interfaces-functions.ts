interface PlaySong {
    (song:string) :void
}

interface PauseSong{
    (song:string):void
}

interface getSongName{
    ():string
}


const playMusic:PlaySong =(song)=>{
    console.log(`playing ${song} music....`);
}

const pauseMusic:PauseSong =(song)=>{
    console.log(`pausing ${song} music ...`);
}

const getMusic:getSongName =()=> `Vizhiyil un vizhil `


playMusic('nilavil ellame')
pauseMusic('En kanavil ')

console.log(getMusic());