
const transformData =(data: any)=>{

return {
  id: data.id,
  category: data.volumeInfo.categories,
  authors: data.volumeInfo.authors,
  title : data.volumeInfo.title,
  description: data.volumeInfo.description,
  link: data.volumeInfo.previewLink,
  bigImage: data.volumeInfo.imageLinks?.thumbnail,
}
}
export default transformData;
