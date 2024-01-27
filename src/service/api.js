const baseHost = 'https://api.github.com/'

// Поиск пользователя по логину
export async function findUsers({ searchText, prop, page, sort }) {
  //   const df = `${baseHost}?q=${searchText}${prop && `; rel=${prop}`}`
  const url = `${baseHost}search/users?q=${searchText}&per_page=15${page && `&page=${page}`}${sort && `&sort=repositories&order=${sort}`}`
  //   console.log(url)
  const response = await fetch(url, {
    method: 'GET',
  })
  if (response.status !== 200) {
    if (response.status === 403) {
      throw new Error('Превышен лимит запросов. Повторите запрос позже')
    } else if (response.status === 500) {
      throw new Error('Нет подключения к интернету')
    } else {
      throw new Error(response.detail ?? 'ошибка сервера')
    }
  }
  return response.json()
}

// Запрос на количество подписчиков
export async function findFollowers(login) {
  const urlFollowers = `${baseHost}users/${login}/followers?per_page=100`
  const urlFollowing = `${baseHost}users/${login}/following?per_page=100`
  const [followers, following] = await Promise.all([
    fetch(urlFollowers, {
      method: 'GET',
    }),
    fetch(urlFollowing, {
      method: 'GET',
    }),
  ])
  const followersData = await followers.json()
  const followingData = await following.json()
  return { followersData, followingData }
}
