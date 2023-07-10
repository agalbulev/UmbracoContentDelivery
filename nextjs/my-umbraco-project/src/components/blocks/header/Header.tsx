import Image from "next/image";

interface PropsType {
    title: string;
    image: any[]
}

const Header = ({ title, image }: PropsType) => {
    return <div>
        <h1>{title}</h1>
        {
            image && image.length !== 0 &&
            <Image 
                src={`http://localhost:19938${image[0].url}`}
                alt={image[0].name}
                width={860}
                height={320}
                />
        }
    </div>
}

export default Header;