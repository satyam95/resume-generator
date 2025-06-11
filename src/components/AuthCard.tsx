"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const AuthCard = () => {
  const { data: session } = useSession();
  const fallbackInitial = session?.user.name?.charAt(0)?.toUpperCase() ?? "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <div className="flex items-center gap-1">
          <Avatar className="rounded-lg w-10 h-10">
            <AvatarImage
              src={session?.user.image ?? undefined}
              alt={session?.user.name ?? "User profile picture"}
            />
            <AvatarFallback className="rounded-lg w-10 h-10 bg-gray-400 text-white text-lg font-semibold">{fallbackInitial}</AvatarFallback>
          </Avatar>
          <ChevronDown className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="p-2">
          <div className="flex flex-col space-y-1">
            <div className="text-sm leading-none font-medium">
              {session?.user.name}
            </div>
            <div className="text-muted-foreground text-xs leading-none">
              {session?.user.email}
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthCard;
