import IUmbracoContent from "@/src/interfaces/IUmbracoContent";
import Navigation from "../content/navigtion/Navigation";
import getCulture from "@/src/helpers/getCulture";
import Blocks from "../blocks/Blocks";
import { IUmbracoBlock, IUmbracoBlocks } from "@/src/interfaces/IUmbracoBlock";

interface IContentPage {
    title: string;
    blocks: IUmbracoBlocks
}

const ContentPage = ({ properties, route, cultures }: IUmbracoContent<IContentPage>) => {
    const culture = getCulture(route.path, cultures);
    let blocks: IUmbracoBlock[] = [];

    if (properties.blocks && properties.blocks.items) {
        blocks = properties.blocks.items;
    }

    return <div>
        <Navigation startItem={route} culture={culture} />
        {
            blocks.length !== 0 &&
            <div>
                {
                    blocks.map((block) => <Blocks {...block} />)
                }
            </div>
        }
    </div>
}

export default ContentPage;