import GalleryCard from "./GalleryCard";


// logic will map through the array passed to the function and create card compoenents to populate with each entry of the array
export default function GalleryList(imgList) {
    const list = imgList.imgList
    return (
    <ul className="grid grid-cols-3 w-fit my-20 justify-self-center gap-16 h-[55rem]">
        {list && list.length>0? (list.map(img=>(
            <GalleryCard key={img.id} image={img} />
        ))) : (<div>No Images Found in here</div>)}
    </ul>
  )
}
