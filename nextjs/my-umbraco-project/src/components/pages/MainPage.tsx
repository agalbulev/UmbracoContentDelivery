import ContentPage from "./ContentPage"
import FormPage from "./FormPage";

const pages: { [key: string]: (object: any) => JSX.Element } = {
    'homePage': ContentPage,
    'contentPage': ContentPage,
    'formPage': FormPage
}

const MainPage = (props: any) => {
    const Page = pages[props.contentType];
    return <Page {...props}/>
}

export default MainPage;