// Build a component that fetches data from a public API (e.g., ⁠ https://jsonplaceholder.typicode.com/posts ⁠).
// •⁠  ⁠Use *⁠ useEffect ⁠* to fetch the data.
// •⁠  ⁠Display a *loading* indicator while fetching.
// •⁠  ⁠Show the list of posts.
// •⁠  ⁠Implement a *“Refresh” button* that re-fetches the posts.

import { useEffect, useState } from "react"
type Post = {
  userId: number
  id: number 
  title: string 
  body: string
}
const Fetch = () => {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)

    const fetchPosts = () => {
      setLoading(true)
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setData(data)
            setLoading(false)
          })
          .catch((err) => {
            console.error('Error fetching', err)
            setLoading(false)
          })
    }

    useEffect(() => {
      fetchPosts()
    }, [])
  return (
    <div className="text-xl font-bold mb-4">
      <h1>Posts</h1>
        {loading ? (
          <p>Loading ...</p>
        ) : (
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.id} className="border rounded p-2 bg-gray-50 shadow-sm">
              <h2>{item.title}</h2>
              <p className="text-sm text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={fetchPosts} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Refresh</button>
    </div>
  )
}

export default Fetch