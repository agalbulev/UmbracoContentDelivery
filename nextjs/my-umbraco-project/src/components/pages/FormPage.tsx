import getCulture from "@/src/helpers/getCulture";
import IUmbracoContent from "@/src/interfaces/IUmbracoContent";
import Navigation from "../content/navigtion/Navigation";

interface IContentPage {
    formTitle: string;
}

const FormPage = ({ properties, route, cultures }: IUmbracoContent<IContentPage>) => {
    const culture = getCulture(route.path, cultures);

    return <div>
        <Navigation startItem={route} culture={culture} />
        <h1>{properties.formTitle}</h1>
    </div>

}

export default FormPage;