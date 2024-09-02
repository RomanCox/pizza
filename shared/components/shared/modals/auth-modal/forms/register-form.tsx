"use client";

import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { registerUser } from "@/app/api/actions";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "../../../form";
import { Button } from "@/shared/components/ui";

import { formRegisterSchema, TFormRegisterValues } from "./schemas";

interface RegisterFormProps {
    onClose?: VoidFunction;
    onClickLogin?: VoidFunction;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onClose , onClickLogin}) => {
    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await registerUser({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            });

            toast.error("Регистрация успешна 📝. Подтвердите свою почту", {
                icon: "✅",
            });

            onClose?.();
        } catch (error) {
            return toast.error("Неверный E-Mail или пароль", {
                icon: "❌",
            });
        } finally {
            onClickLogin?.();
        }
    };

    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormInput name="email" label="E-Mail" required/>
                <FormInput name="fullName" label="Полное имя" required/>
                <FormInput name="password" label="Пароль" type="password" required/>
                <FormInput name="confirmPassword" label="Подтвердите пароль" type="password" required/>

                <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
                    Зарегистрироваться
                </Button>
            </form>
        </FormProvider>
    );
};
