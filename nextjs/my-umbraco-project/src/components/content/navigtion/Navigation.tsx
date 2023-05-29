import IUmbracoFatchContent from "@/src/interfaces/IUmbracoFatchContent";
import IUmbracoRoute from "@/src/interfaces/IUmbracoRoute";
import IUmbracoUrl from "@/src/interfaces/IUmbracoUrl";
import Link from "next/link";

interface PropsType {
    startItem: IUmbracoRoute;
    culture: string;
}

interface IContent {
    links: IUmbracoUrl[];
}

const getNavigation = async (id: string, culture: string) => {
    const res = await fetch(`${process.env.API_URL}/content?fetch=descendants:${id}&filter=contentType:navigation`, {
        headers: {
            'Accept-Language': culture
        },
        next: { tags: ['umbraco'] }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Navigation = async ({ startItem, culture }: PropsType) => {
    const item = await getNavigation(startItem.startItem.id, culture) as IUmbracoFatchContent<IContent>;

    if (item.total === 0) {
        return <></>;
    }

    const navigation = item.items[0];

    return <div className="flex justify-center py-8">
        {
            navigation.properties.links.map(link => (
                <Link className="rounded-lg mx-4 px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" title={link.title} href={link.route.path}>{link.title}</Link>
            ))
        }
    </div>
}

export default Navigation as unknown as (props: PropsType) => JSX.Element;