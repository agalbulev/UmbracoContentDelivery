'use client'
import { TestStore } from "@/src/helpers/testStore";

interface PropsType {
    title: string;
}

const Output = ({ title }: PropsType) => {
    return <div>
        <h2>{title}</h2>
        {TestStore.Value || 'empty'}
    </div>
}

export default Output;