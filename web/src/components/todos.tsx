import React, { FC } from 'react'
import { useToDos } from '../hooks/useTodo'

export const ToDoTable: FC = () => {
  const { isLoading, toDos } = useToDos()
  if (isLoading) return (<p>Loading...</p>)
  return (
    <div>
      {
        toDos.map((toDo, index) => {
        return (
        <ul key={`todo_${index}`}>
          <li>{toDo.title}</li>
          <li>{toDo.description}</li>
        </ul>
        )})
      }
    </div>
  )
}
