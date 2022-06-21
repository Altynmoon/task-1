export const SET_CHARACTERS = 'ricky/set'
export const SET_CHARACTERS_PAGE_INFO = 'ricky/setPageInfo' 

export const fetchRicky = ({} = {}) => dispatch => {  

fetch(`https://rickandmortyapi.com/api/character`)
.then((res) => res.json())
.then((data) => {
    dispatch({
        type: SET_CHARACTERS,
        payload: data.results
    })
    dispatch({
        type: SET_CHARACTERS_PAGE_INFO,
        payload: {
            page: data.page,
            total_pages: Math.min(data.total_pages, 500)
        }
    })
})

}

