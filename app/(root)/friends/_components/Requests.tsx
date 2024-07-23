import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Id } from "@/convex/_generated/dataModel";
import { Check, User, X } from "lucide-react";
import React from "react";

type Props = {
  id: Id<"request">;
  imageUrl: string;
  userName: string;
  email: string;
};

const Requests = ({ id, imageUrl, userName, email }: Props) => {
  return (
    <Card className="w-full p-2 flex align-middle justify-center gap-2">
      <div className="flex item-center truncate gap-4">
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col truncate">
          <h4 className="truncate">{userName}</h4>
          <p className="text-xs text-mutated-foreground truncate">{email}</p>
        </div>
        <div className="flex item-center gap-2">
          <Button size={"icon"} onClick={() => console.log("clicked")}>
            <Check />
          </Button>
          <Button
            size={"icon"}
            variant={"destructive"}
            onClick={() => console.log("clicked")}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Requests;
