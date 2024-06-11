import React from "react";

type Props = {
  children: React.ReactNode;
};

const ConversationLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ConversationLayout;
