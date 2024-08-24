// eslint-disable-next-line no-unused-vars
import { fetchBooks } from '../apis/apiClient'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function BookList() {
  const {
    data: books,
    isPending,
    isError,
  } = useQuery({ queryKey: ['books'], queryFn: () => fetchBooks() })
  const queryClient = useQueryClient()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <>
      <h2>Books</h2>
    </>
  )
}

export default BookList
