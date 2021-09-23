import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const index = (props) => {
    const router = useRouter();
    const {title, url} = photo
    return (
        <div>
            <h2>{router.query.id}</h2>
            <Image
                src={url}
                width={500}
                height={500}
            />
            <Link href="/photos">
                <a>go back</a>
            </Link>
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/2');
}

export default index;