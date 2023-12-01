"use server"

import { revalidatePath } from 'next/cache';
import { CreateEmployeeParams, IdEmployeeParams } from "./shared.types";
import prisma from '../prisma';

export async function getAllUsers() {
    try {

        const employees = await prisma.employee.findMany({})

        return { employees }

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createEmployee(params: CreateEmployeeParams) {
    try {

        const { email, first_name, last_name, avatar, role, salary, path } = params;

        // Create the employee
        await prisma.employee.create({
            data: {
                email,
                first_name,
                last_name,
                avatar,
                role,
                salary
            }
        })

        revalidatePath(path)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteEmployee(params: IdEmployeeParams) {
    try {

        const { id, path } = params;

        await prisma.employee.delete({
            where: {
                id
            }
        })

        revalidatePath(path)

    } catch (error) {
        console.log(error);
        throw error;
    }
}