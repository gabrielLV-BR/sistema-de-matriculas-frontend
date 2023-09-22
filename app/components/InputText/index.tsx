"use client"

import React, { useState } from "react";
import styles from "./styles.module.scss"
import { ReactState } from "@/app/config/types";

export type InputProps = {
    label: string;
    state?: ReactState<string>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputText<T>(props: InputProps) {

    const [innerValue, setInnerValue] = props.state ?? useState<string>();

    const name = props.label.toLowerCase().replaceAll(" ", "");
    const id = name;

    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value)
    }

    return (
        <span className={styles.container}>
            <input
                type="text"
                placeholder={props.label}
                name={name}
                id={id}
                value={innerValue as string}
                onChange={setValue}
            />
            <label htmlFor={id}>
                {props.label}
            </label>
        </span>
    )

}