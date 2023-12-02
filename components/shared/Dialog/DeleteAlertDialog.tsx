"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { deleteEmployee } from "@/lib/action/employee.action";
import { IdEmployeeSchema } from "@/lib/validations";
import { Toaster, toast } from "sonner";

interface Props {
  id: number;
  first_name: string;
  last_name: string;
}

interface DeleteProps {
  id: number;
  path: string;
}

const DeleteAlertDialog = ({ id, first_name, last_name }: Props) => {
  const path = usePathname();
  async function deleteEmployeeHandler(
    values: z.infer<typeof IdEmployeeSchema>
  ) {
    // setIsSubmitting(true);
    try {
      await deleteEmployee({
        id: values.id,
        path: path,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const handleDelete = ({ id, path }: DeleteProps) => {
    const promiseDelete = () =>
      new Promise((resolve) => setTimeout(resolve, 2000));
    toast.promise(promiseDelete, {
      loading: "Loading...",
      success: (data) => {
        deleteEmployeeHandler({ id, path });
        return `Employee ID of ${id} has been deleted`;
      },
    });
  };
  return (
    <>
      {/* <Toaster position="top-center" /> */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-red-600 hover:bg-red-400">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              {first_name} {last_name} account and remove his/her data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              // onClick={() => deleteEmployeeHandler({ id, path })}
              onClick={() => handleDelete({ id, path })}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteAlertDialog;
