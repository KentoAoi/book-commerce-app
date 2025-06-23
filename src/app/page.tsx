import Book from "./components/Book";


export default function Home() {
  const books = [
    {
      id: 1,
      title: "Book01",
      thumbnail: "/thumbnails/01.png",
      price: 3000,
      author: {
        id: 1,
        name: "Author01",
        description: "Author01 description",
        profile_icon: "https://source.unsplash.com/random/2",
      },
      content: "Content01",
      created_at: new Date().toString(),
      update_at: new Date().toString(),
    },
    {
      id: 2,
      title: "Book02",
      thumbnail: "/thumbnails/02.png",
      price: 4000,
      author: {
        id: 1,
        name: "Author01",
        description: "Author01 description",
        profile_icon: "https://source.unsplash.com/random/2",
      },
      content: "Content02",
      created_at: new Date().toString(),
      update_at: new Date().toString(),
    },
    {
      id: 3,
      title: "Book03",
      thumbnail: "/thumbnails/03.png",
      price: 5000,
      author: {
        id: 2,
        name: "Author02",
        description: "Author02 description",
        profile_icon: "https://source.unsplash.com/random/1",
      },
      content: "Content03",
      created_at: new Date().toString(),
      update_at: new Date().toString(),
    }
  ]
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mt-20">Book Commerce</h2>
      <div className="flex grid-cols-3 gap-10 mt-15">
        {books.map((book)=>(<Book key={book.id} book={book}/>))}
      </div>
    </div>
  );
}
