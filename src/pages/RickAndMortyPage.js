// import {useCallback, useEffect, useState} from "react";
// import {Grid, styled} from "@mui/material";
// import { useDispatch,useSelector } from "react-redux";
// import { fetchRicky, SET_CHARACTERS, SET_CHARACTERS_INFO_PAGE, characters } from "../store/actions/fetchRicky";
// const Avatar = styled('img')`
//   width: 80px;
//   height: 130px;
//   object-fit: cover;
// `
// export function RickAndMortyPage(){
//     const characters = useSelector((state) => state.ricky.characters)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(fetchRicky())
//     },[dispatch])



//     const setCharacters = useCallback((payload) => {
//         dispatch({type: SET_CHARACTERS, payload})
//     }, [dispatch])

// const DEFAULT_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'
// const DEFAULT_EPISODES_URL = 'https://rickandmortyapi.com/api/episode'

// export function RickAndMortyPage() {
//     const [characters, setCharacters] = useState([])
//     const [episodes, setEpisodes] = useState([])

//     const loadCharacters = useCallback((url = DEFAULT_CHARACTERS_URL) => {
//         fetch(url)
//             .then((data) => data.json())
//             .then(({ info, results }) => {
//                 setCharacters((current) => [...current, ...results])
//                 if (info.next) {
//                     loadCharacters(info.next)
//                 }
//             })
//     }, [])


//     const loadEpisodes = useCallback((url = DEFAULT_EPISODES_URL) => {
//         fetch(url)
//             .then((data) => data.json())
//             .then(({ info, results }) => {
//                 setEpisodes((current) => [...current, ...results])
//                 if (info.next) {
//                     loadEpisodes(info.next)
//                 }
//             })
//     }, [])

// useEffect(() => {
//         loadCharacters()
//         loadEpisodes()
//     }, [loadCharacters, loadEpisodes])

  
//     return (
//         <div>
//             <Grid container spacing={3}>
//                 {characters.map((character) => (
//                     <Grid item xs={4} key={character.id}>
//                         <Avatar src={character.image} />
//                         <a href={character.url} target="_blank">{character.name}</a>
//                     </Grid>
//                 ))}
//             </Grid>
//             <Pagination count={pageInfo.total_pages} page={pageInfo.page} onChange={(e, value) => searchCharcters({ page: value })}/>
//         </div>
//     )
// }
// }