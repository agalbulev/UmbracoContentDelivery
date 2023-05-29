import IUmbracoRoute from "./IUmbracoRoute";

export default interface IUmbracoContent<T> {
    name: string;
    route: IUmbracoRoute;
    id: string;
    contentType: string;
    properties: T;
    cultures: { [key: string]: IUmbracoRoute }
}

