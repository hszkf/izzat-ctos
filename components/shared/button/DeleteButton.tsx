"use client";

import { Button } from "@/components/ui/button";
import { deleteEmployee } from "@/lib/action/employee.action";
import { IdEmployeeSchema } from "@/lib/validations";
import { usePathname } from "next/navigation";
import React from "react";
import { z } from "zod";

interface Props {
  id: number;
  path: string;
}

const DeleteButton = ({ id }: Props) => {
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
  return (
    <Button
      className="bg-red-600 hover:bg-red-400"
      type="submit"
      onClick={() => deleteEmployeeHandler({ id, path })}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
