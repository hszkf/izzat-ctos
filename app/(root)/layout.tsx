import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="bg-gray-50">
        {/* Navbar  */}
        <div>
          {/* <div>LeftSidebar </div> */}
          <section className="mx-auto w-full max-w-3xl flex min-h-screen flex-1 flex-col px-6 pb-6 pt-12 max-md:pb-14 sm:px-14">
            <div className="flex justify-between items-center">
              {/* <Link href="/" className={buttonVariants({ variant: "link" })}> */}
              <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                Employee Management App
              </h1>
              {/* </Link> */}

              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MH</AvatarFallback>
                </Avatar>
                {/* <Button>Sign Out</Button> */}
              </div>
            </div>
            <div>{children}</div>
          </section>
          {/* <div>RightSidebar </div> */}
        </div>
        {/* Toaster  */}
      </main>
    </div>
  );
};

export default Layout;
