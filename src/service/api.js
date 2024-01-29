const baseHost = 'https://api.github.com/'
export const pageLimit = 20

// Поиск пользователя по логину
export async function findUsers({ searchText, sortBy, url }) {
  if (!url) {
    url = `${baseHost}search/users?q=${searchText}&per_page=${pageLimit}${sortBy && `&sort=repositories&order=${sortBy}`}`
  }
  const response = await fetch(url)
  if (response.status !== 200) {
    if (response.status === 403) {
      throw new Error('Превышен лимит запросов. Повторите запрос позже')
    } else if (response.status === 500) {
      throw new Error('Нет подключения к интернету')
    } else if (response.status === 422) {
      throw new Error('Only the first 1000 search results are available')
    } else {
      throw new Error(response.message ?? 'ошибка сервера')
    }
  }
  return response
}

// Запрос на количество подписчиков
export async function findFollowers(login) {
  const urlFollowers = `${baseHost}users/${login}/followers?per_page=100`
  const urlFollowing = `${baseHost}users/${login}/following?per_page=100`
  const [followers, following] = await Promise.all([
    fetch(urlFollowers),
    fetch(urlFollowing),
  ])
  const followersData = await followers.json()
  const followingData = await following.json()
  return { followersData, followingData }
}
