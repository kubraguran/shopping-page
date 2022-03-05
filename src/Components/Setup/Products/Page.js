import { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function Page({pageItems}) {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const lastIndex = pageItems.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, pageItems]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000);
        return () => clearInterval(slider)
    }, [index])

    return (
        <div className='pages'>
            {
                pageItems.map((item, itemIndex) => {
                    const { id, name, image, category, price } = item;
                    console.log(image)
                    let position = 'nextSlide'
                    if (itemIndex === index) {
                        position = 'activeSlide'
                    }
                    if (itemIndex === index - 1 || (index === 0 && itemIndex === pageItems.length - 1)) {
                        position = 'lastSlide'
                    }

                    return <article key={id} className={position}>

                        <img src={image} alt={name} className='item-image' />
                    </article>
                })}
                 <button className='prev' onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                 </button>
                     <button className='next' onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
                </button>
        </div>
    )
}

export default Page
