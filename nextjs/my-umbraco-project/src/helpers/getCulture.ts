import IUmbracoRoute from "../interfaces/IUmbracoRoute";

const getCulture = (path: string, cultures: { [key: string]: IUmbracoRoute }) => {
    const keys = Object.keys(cultures);
    let culture = 'en-us';

    const currentCultures =  keys.filter(key => {
        return cultures[key].path === path;
    })

    if (currentCultures.length !== 0) {
        culture = currentCultures[0];
    } 

    return culture;
}

export default getCulture;