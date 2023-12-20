import AnimeCard from "@/components/AnimeCard"

const fetchData = async(page) => {

    const res = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await res.json()
    
    return data.map((item, index) => (
        <AnimeCard key={item.id} anime={item} index={index} />
    ))
}

export default fetchData