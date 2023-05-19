import ContentPage from "./ContentPage"

const pages: { [key: string]: (object: any) => JSX.Element } = {
    'homePage': ContentPage,
    'contentPage': ContentPage
}

const MainPage = (props: any) => {
    const Page = pages[props.contentType];
    return <Page {...props}/>
}

export default MainPage;