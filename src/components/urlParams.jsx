import React from 'react'

const urlParams = () => {

    // useEffect(() => {
    //     const searchParams = new URLSearchParams(location.search)
    //     const newQueryParams = {
    //       search: searchParams.get('search') || '',
    //       page: parseInt(searchParams.get('page')) || 1,
    //       limit: parseInt(searchParams.get('limit')) || 10,
    //     }
    //     setParams(newQueryParams)
    //     dispatch(getCricketTours({params: newQueryParams}))
    //   }, [])
    
    //   useEffect(() => {
    //     dispatch(getAllSeriesTours())
    //     const queryString = new URLSearchParams(params).toString()
    //     dispatch(getCricketTours({params}))
    //     navigate(`?${queryString}`)
    //   }, [dispatch, params])

      
  return (
    <div>urlParams</div>
  )
}

export default urlParams