import React from 'react';
import HeadInfo from '../components/HeadInfo';
import Image from 'next/image';
import photosStyles from '../styles/photos.module.css';

const photos = ({photos}) => {
    console.log(photos);
    return (
        <>
            <HeadInfo title="my blog photos" />
            <h1>my photos</h1>
            <ul className={photosStyles.photos}>
                {photos.map(photo=>(
                    <li key={photo.id}>
                        <Image
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                            width={100} 
                            height={100}
                        />
                        <span>{photo.title}</span>
                    </li>
                ))}     
            </ul>
        </>
    )
};

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
    const photos = await res.json();

    return {
        props: {
            photos
        }
    }
}

export default photos;