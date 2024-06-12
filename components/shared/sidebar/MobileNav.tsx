"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useConversation } from "@/hooks/useConversation";
import { useNavigation } from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

type Props = {};

const MobileNav = (props: Props) => {
  const paths = useNavigation();
  const { isActive } = useConversation();

  if (isActive) return null;
  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
      <nav className="w-full">
        <ul className="flex items-center justify-evenly">
          {paths.map((path, id) => (
            <li key={id} className="relative">
              <Link href={path.href}>
                <Tooltip>
                  <Button
                    size="icon"
                    variant={path.active ? "default" : "outline"}
                  >
                    <TooltipTrigger asChild>{path.icon}</TooltipTrigger>
                  </Button>

                  <TooltipContent>
                    <p>{path.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
          <li>
            <div>
              <UserButton />
            </div>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
