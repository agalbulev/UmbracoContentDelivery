export interface IUmbracoBlocks {
    items: IUmbracoBlock[];
}

export interface IUmbracoBlock{
    content: {
        id: string;
        contentType: string;
        properties: { [key: string]: any };
    }
}