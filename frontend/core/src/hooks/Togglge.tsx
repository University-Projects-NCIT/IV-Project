import React, { useState } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [toggled, setToggle] = useState<boolean>(initialValue)
  
  const toggle = () => {
   setToggle(!toggled)
  }

  return [toggled, toggle] as [boolean, () => void];
}

