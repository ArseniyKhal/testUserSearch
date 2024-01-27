const baseHost = 'https://api.github.com/search/users'

// Поиск пользователя по логину
export async function findUsers({ searchText, prop, page, sort }) {
  //   const df = `${baseHost}?q=${searchText}${prop && `; rel=${prop}`}`
  const bh = `${baseHost}?q=${searchText}&per_page=15${page && `&page=${page}`}${sort && `&sort=repositories&order=${sort}`}`
  console.log(bh)
  const response = await fetch(bh, {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error(response.detail ?? 'ошибка сервера')
  }
  return response.json()
}
