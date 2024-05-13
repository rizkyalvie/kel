export default async function fetchBook(bookId: string | null) {

    try {
        const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
    
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }
    
        const data = await res.json()

        return data
    } catch (error) {
        return error
    }

}