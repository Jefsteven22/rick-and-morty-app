import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  
  const [infoApi, setInfoApi] = useState()
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  const getApi = () => {
    setIsLoading(true)
    axios.get(url)
      .then( res => {
        setInfoApi(res.data)
        setHasError(true)
      })
      .catch( err => {
        console.error(err)
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }
  
  return [ infoApi, getApi, hasError, isLoading ]
}

export default useFetch