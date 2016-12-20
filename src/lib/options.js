
const allowedOptions = [
  'src',
  // 'partition'
]

export const options = (other = {}) => (
  Object.keys(other).filter(key => allowedOptions.includes(key)).reduce(
    (prev, next) => (
      (prev[next] = other[next], prev)
    ), {}
  )
)
