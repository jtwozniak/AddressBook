const UserPerRequest = 50
const MaxUsers = 1000
const LastPage = MaxUsers / UserPerRequest

export const fetchUsers = async (nat: string, page: number) => {
  // const paramsObject =

  if (page > LastPage) {
    return []
  }

  const params = new URLSearchParams({
    results: String(UserPerRequest),
    inc: ["picture", "name", "email", "location", "phone", "cell"].join(","), // download only required fields
    seed: "Sherpany",
  })

  if (nat) {
    params.append("nat", nat)
  }

  console.log("params", params.toString())

  // This could by typed better, but there is not point to do that here
  // usually there would be a way of generating types from API - like from swagger or graphql
  const data: any = await fetch(
    `https://randomuser.me/api/?${params.toString()}`
  ).then((data) => data.json())
  console.log("Data", data)
  const users = data.results.map(
    ({
      picture: { thumbnail: picture },
      name,
      email,
      phone,
      cell,
      location: { street, city, state, postcode },
    }: any) => ({})
  )

  console.log("Usrs", users)
  return users
}

export type User = {
  picture: string // thumbnail
  name: { title: string; first: string; last: string } // Code test have error, the field username doesn't exist - I assume title instead
  email: string
  location: {
    street: string
    city: string
    state: string
    postcode: number
  }
  phone: string
  cell: string
}
