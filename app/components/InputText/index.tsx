"client";

import React, { useState } from "react";
import styles from "./styles.module.scss"
import { ReactState } from "@/app/config/types";

export type InputProps = {
    label: string;
    state: ReactState<string>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputText<T>(props : InputProps) {
    
    const [ innerValue, setInnerValue ] = props.state ?? useState<T>(); 

    const name = props.label.toLowerCase().replaceAll(" ", "");
    const id = name;

    const setValue = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value as T)
    }

    return (
        <span className={styles.container}>
            <label htmlFor={id}>
                {props.label}
            </label>
            <input 
                type="text" 
                name={name} 
                id={id} 
                value={innerValue as string} 
                onChange={setValue}
            />
        </span>
    )

}