import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
import { Toaster, toast } from "sonner";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { getAllUsers } from "@/lib/action/employee.action";

import DeleteAlertDialog from "@/components/shared/Dialog/DeleteAlertDialog";

const Home = async () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const result = await getAllUsers();

  return (
    <>
      <Toaster />
      <div className="mt-6">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/employee"
        >
          + Add employee
        </Link>
      </div>

      <div className="flex flex-col mt-4 gap-4">
        {result.employees.length > 0 ? (
          result.employees.map((employee: any) => (
            <>
              <Card key={employee.id}>
                <CardHeader key={employee.id}>
                  <CardTitle key={employee.id}>
                    <Avatar key={employee.id}>
                      <AvatarImage src={employee.avatar} key={employee.id} />
                      <AvatarFallback key={employee.id}>
                        {employee.id}
                      </AvatarFallback>
                    </Avatar>
                  </CardTitle>
                  <CardDescription key={employee.id}>
                    {employee.email}
                  </CardDescription>
                  <CardDescription key={employee.id}>
                    <span className="text-black truncate text-sm font-medium leading-none mt-4">
                      First Name :
                    </span>{" "}
                    {employee.first_name}
                  </CardDescription>
                  <CardDescription key={employee.id}>
                    <span className="text-black truncate text-sm font-medium leading-none mt-1">
                      Last Name :
                    </span>{" "}
                    {employee.last_name}
                  </CardDescription>
                  <CardDescription key={employee.id}>
                    <span className="text-black truncate text-sm font-medium leading-none mt-1">
                      Role :
                    </span>{" "}
                    {employee.role}
                  </CardDescription>
                  <CardDescription key={employee.id}>
                    <span className="text-black truncate text-sm font-medium leading-none mt-1">
                      Salary :
                    </span>{" "}
                    RM {employee.salary}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex justify-start items-center gap-3">
                    <Link
                      className={buttonVariants({ variant: "outline" })}
                      href="/employee"
                    >
                      Edit details
                    </Link>

                    <DeleteAlertDialog
                      id={employee.id}
                      first_name={employee.first_name}
                      last_name={employee.last_name}
                    />
                  </div>
                </CardFooter>
              </Card>
            </>
          ))
        ) : (
          <div>No employee here</div>
        )}
      </div>
      {/* <div>{employees}</div> */}
    </>
  );
};

export default Home;
