
const ContentPage = ({ properties, contentType }: any) => {
    return <div>
        <h1>{properties.title}</h1>
        <h1>{contentType}</h1>
    </div>
}

export default ContentPage;