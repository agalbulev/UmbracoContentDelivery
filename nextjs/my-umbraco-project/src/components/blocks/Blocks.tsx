import { IUmbracoBlock } from "@/src/interfaces/IUmbracoBlock";
import Header from "./header/Header";
import Input from "./input/Input";
import Output from "./output/Output";

const components: { [key: string]: (object: any) => JSX.Element } = {
    'header': Header,
    'testBlock1': Input,
    'testBlock2': Output
}

const Blocks = (props: IUmbracoBlock) => {
    const Block = components[props.content.contentType];
    return <Block {...props.content.properties}/>;
}

export default Blocks;