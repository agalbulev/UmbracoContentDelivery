import IUmbracoRoute from "./IUmbracoRoute";

export default interface IUmbracoUrl {
    url?: string;
    title: string;
    target?: string;
    destinationId: string;
    destinationType: string;
    route: IUmbracoRoute;
    linkType: string;
}