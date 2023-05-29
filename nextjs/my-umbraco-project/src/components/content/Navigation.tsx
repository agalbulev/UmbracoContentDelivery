import IUmbracoFatchContent from "@/src/interfaces/IUmbracoFatchContent";
import IUmbracoRoute from "@/src/interfaces/IUmbracoRoute";
import IUmbracoUrl from "@/src/interfaces/IUmbracoUrl";
import Link from "next/link";

interface PropsType {
    startItem: IUmbracoRoute;
}

interface IContent {
    links: IUmbracoUrl[];
}

const getNavigation = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/content?fetch=descendants:${id}&filter=contentType:navigation`, {
        headers: {
            'Accept-Language': 'en-US'
        },
        next: { tags: ['umbraco'] }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Navigation = async ({ startItem }: PropsType) => {
    const item = await getNavigation(startItem.startItem.id) as IUmbracoFatchContent<IContent>;

    if (item.total === 0) {
        return <></>;
    }
    
    const navigation = item.items[0];

    return <div>
        {
            navigation.properties.links.map(link => (
                <Link title={link.title} href={link.route.path}>{link.title}</Link>
            ))
        }
    </div>
}

export default Navigation as unknown as (props: PropsType) => JSX.Element;