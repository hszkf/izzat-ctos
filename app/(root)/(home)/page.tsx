import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

import React from "react";
import { getAllUsers } from "@/lib/action/employee.action";

const Home = async () => {
  const result = await getAllUsers();
  // console.log(result);
  return (
    // <div>
    //   {result.employees.map((employee) => (
    //     <div key={employee.id}>{employee.last_name}</div>
    //   ))}
    // </div>
    <>
      <div className="mt-6">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/employee"
        >
          + Add employee
        </Link>
      </div>

      <div className="flex flex-col mt-4 gap-4">
        {result.employees.map((employee: any) => (
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      {/* <Button variant="destructive">Show Dialog</Button> */}
                      <Button className="bg-red-600 hover:bg-red-400">
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <span className="">Are you absolutely sure?</span>
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600 hover:bg-red-400">
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardFooter>
            </Card>
          </>
        ))}
      </div>
      {/* <div>{employees}</div> */}
    </>
  );
};

export default Home;
