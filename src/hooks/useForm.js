import { useState } from 'react'

export default function useForm(initial){
  const [state, setState] = useState(initial)
  function onChange(e){ setState(prev => ({ ...prev, [e.target.name]: e.target.value })) }
  return [state, onChange, setState]
}
