import IUmbracoContent from "@/src/interfaces/IUmbracoContent";
import Navigation from "../content/navigtion/Navigation";
import getCulture from "@/src/helpers/getCulture";

const ContentPage = ({ properties, contentType, route, cultures }: IUmbracoContent<any>) => {
    const culture = getCulture(route.path, cultures);

    return <div>
        <Navigation startItem={route} culture={culture}/>
        <h1>{properties.title}</h1>
        <h1>{contentType}</h1>
    </div>
}

export default ContentPage;