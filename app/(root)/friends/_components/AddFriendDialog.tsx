"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {};

const AddFriendDialogSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Must be valid email"),
});

const AddFriendDialog = (props: Props) => {
  const form = useForm<z.infer<typeof AddFriendDialogSchema>>({
    resolver: zodResolver(AddFriendDialogSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = () => console.log("nicela");
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger>
          <Button size={"icon"} variant={"outline"}>
            <DialogTrigger asChild>
              <UserPlus />
            </DialogTrigger>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add Friend</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Friend</DialogTitle>
          <DialogDescription>
            Send request to connect with your friends
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={(item) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...item} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <DialogFooter>
              <Button disabled={false} type="submit">
                Send
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFriendDialog;
