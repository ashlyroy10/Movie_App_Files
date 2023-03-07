import  { useState } from 'react'

const useForm = (movie) => {
  
  var[val,setVal] = useState(movie);
  return [val,(event) => {
    setVal(
        {
            ...val,[event.target.name]:event.target.value
        }
    )
  }]
}

export default useForm
