// Nomenclatura de variáveis
const users = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserData(request, response) {
  const githubUsername = String(request.query.username)

  if (!githubUsername) {
    return response.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const userResponse = await fetch(`https://api.github.com/users/${github}`);

  if (userResponse.status === 404) {
    return response.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const userData = await response.json()
  const userOrderList = users.sort((a, b) =>  b.followers - a.followers); 
  const userCategory = userOrderList.find(user => userData.followers > user.followers)
  const userResult = {
    github: githubUsername,
    category: userCategory.title
  }

  return userResult
}

getUserData({ query: {
  username: 'josepholiveira'
}}, {})