import Image from "next/image"
// interface Props {
//     id: number,
//     title: string,
//     thumbnail: string,
//     price: number,
//     content: string,
// }
const Book = ({book}: any) => {
  return (
    <div className="shadow-2xl rounded-sm">
      <Image src={book.thumbnail} alt={""} width={300} height={200} className="rounded-t-sm"/>
      <div className="p-5">
        <p>{book.title}</p>
        <p>この本は</p>
        <p>値段：3,000円</p>
      </div>
    </div>
  )
}

export default Book
