const UserPerRequest = 50
const MaxUsers = 1000 // users limit, api support up to 5000
const LastPage = MaxUsers / UserPerRequest

export const fetchUsers = async (
  nat: string,
  page: number
): Promise<User[]> => {
  // const paramsObject =

  if (page > LastPage) {
    return new Promise((resolve, reject) => {
      resolve([] as User[])
    })
  }

  const params = new URLSearchParams({
    page: String(page),
    results: String(UserPerRequest),
    inc: ["picture", "name", "email", "location", "phone", "cell"].join(","), // download only required fields
    seed: "Sherpany",
  })

  if (nat) {
    params.append("nat", nat)
  }

  console.log("Api call", nat, page)

  // This could by typed better, but there is not point to do that here
  // usually there would be a way of generating types from API - like from swagger or graphql
  const data: any = await fetch(
    `https://randomuser.me/api/?${params.toString()}`
  ).then((data) => data.json())
  const users = data.results.map(
    ({
      picture: { thumbnail: picture },
      name,
      email,
      phone,
      cell,
      location: { street, city, state, postcode },
    }: any) => ({
      picture,
      name,
      email,
      phone,
      cell,
      location: { street, city, state, postcode },
    })
  )

  return users
}

export type User = {
  picture: string // thumbnail
  name: { title: string; first: string; last: string } // Code test have error, the field username doesn't exist - I assume title instead
  email: string
  location: {
    street: {
      name: string
      number: number
    }
    city: string
    state: string
    postcode: number
  }
  phone: string
  cell: string
}
