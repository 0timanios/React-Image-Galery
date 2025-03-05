import GalleryCard from "./GalleryCard";


// logic will map through the array passed to the function and create card compoenents to populate with each entry of the array
export default function GalleryList(imgList) {
    const list = imgList.imgList
    return (
    <ul className="grid grid-cols-2 gap-1 ">
        {list && list.length>0? (list.map(img=>(
            <GalleryCard key={img.id} image={img} />
        ))) : (<div>No Images Found in here</div>)}
    </ul>
  )
}
