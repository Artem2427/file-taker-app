import { useEffect, useState } from "react"

const useDebounce = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>()

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
