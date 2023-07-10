import ContentPage from "./ContentPage"
import LoginPage from "./LoginPage";

const pages: { [key: string]: (object: any) => JSX.Element } = {
    'homePage': ContentPage,
    'contentPage': ContentPage,
    'loginPage': LoginPage
}

const MainPage = (props: any) => {
    const Page = pages[props.contentType];
    return <Page {...props}/>
}

export default MainPage;