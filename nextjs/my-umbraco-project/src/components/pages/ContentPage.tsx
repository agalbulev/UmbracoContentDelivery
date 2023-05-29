import Navigation from "../content/Navigation";

const ContentPage = ({ properties, contentType, route }: any) => {
    return <div>
        <Navigation startItem={route}/>
        <h1>{properties.title}</h1>
        <h1>{contentType}</h1>
    </div>
}

export default ContentPage;