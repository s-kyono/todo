import { useEffect, useState } from 'react'
import { ToDo, getToDos } from '@/firebase/utils/todo';

export type useToDosOutput = {
  isLoading: boolean
  toDos: ToDo[]
}

const DEFAULT_OUTPUT: useToDosOutput = {
  isLoading: true,
  toDos: [],
}

export function useToDos(): useToDosOutput {
  const [output, setOutput] = useState(DEFAULT_OUTPUT)

  useEffect(() => {
    void (async () => {
      const toDos = await getToDos()
      setOutput({ isLoading: false, toDos })
    })()
  }, [])

  return output
}
