const baseHost = 'https://api.github.com/search/users'

// Поиск юзера по логину
export async function findUsers(searchText) {
  const response = await fetch(`${baseHost}?q=${searchText}`, { method: 'GET' })
  return response.json()
}
