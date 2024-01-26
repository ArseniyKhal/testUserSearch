const baseHost = 'https://api.github.com/search/users'

// Поиск пользователя по логину
export async function findUsers({ searchText, prop, page }) {
  //   const df = `${baseHost}?q=${searchText}${prop && `; rel=${prop}`}`
  const bh = `${baseHost}?q=${searchText}&per_page=15${page && `&page=${page}`}`
  console.log(bh)
  const response = await fetch(bh, {
    method: 'GET',
    'X-GitHub-Api-Version': '2022-11-28',
  })
  return response.json()
}
