"use client";
import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import Requests from "./_components/Requests";

type Props = {};

const FriendsPage = (props: Props) => {
  const requests = useQuery(api.requests.get);
  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />}>
        {requests ? (
          requests.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No Friend Requests
            </p>
          ) : (
            requests.map((request) => (
              <Requests
                key={request.request._id}
                id={request.request._id}
                imageUrl={request.sender.imageUrl}
                userName={request.sender.username}
                email={request.sender.email}
              />
            ))
          )
        ) : (
          <Loader2 className="h-8 w-8" />
        )}
      </ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
