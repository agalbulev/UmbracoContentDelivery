import IUmbracoContent from "./IUmbracoContent";

export default interface IUmbracoFatchContent<T> {
    total: number;
    items: IUmbracoContent<T>[]
}