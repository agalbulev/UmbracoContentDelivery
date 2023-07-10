'use client'

import { TestStore } from "@/src/helpers/testStore";
import { FormEvent, useState } from "react";

interface PropsType {
    title: string;
}


const Input = ({ title }: PropsType) => {
    const [value, setValue] = useState(TestStore.Value);

    const inputHandler = (event: FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        TestStore.Value = target.value;
        setValue(target.value);
    }

    return <div>
        <h2>{title}</h2>
        <form>
            <input value={value} onInput={event => inputHandler(event)} className="border-2 border-solid border-black rounded mt-1 px-2 py-1 text-xl" type="text" />
        </form>
    </div>
}

export default Input;