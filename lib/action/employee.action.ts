"use server"

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';
import { CreateEmployeeParams } from "./shared.types";

const prisma = new PrismaClient()


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
        // console.log('SERVER')
        // console.log({ params })

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