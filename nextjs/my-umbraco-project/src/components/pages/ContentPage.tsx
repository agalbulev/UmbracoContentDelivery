import IUmbracoContent from "@/src/interfaces/IUmbracoContent";
import Navigation from "../content/navigtion/Navigation";
import IUmbracoRoute from "@/src/interfaces/IUmbracoRoute";

const getCulture = (path: string, cultures: { [key: string]: IUmbracoRoute } ) => {
    const keys = Object.keys(cultures);
    let culture = 'en-us';

    const currentCultures =  keys.filter(key => {
        return cultures[key].path === path;
    })

    if (currentCultures.length !== 0) {
        culture = currentCultures[0];
    } 

    return culture;
}

const ContentPage = ({ properties, contentType, route, cultures }: IUmbracoContent<any>) => {
    const culture = getCulture(route.path, cultures);

    return <div>
        <Navigation startItem={route} culture={culture}/>
        <h1>{properties.title}</h1>
        <h1>{contentType}</h1>
    </div>
}

export default ContentPage;