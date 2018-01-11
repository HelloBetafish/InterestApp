import React from "react";

export const PostItem = props =>
<p id="text3" data-senderid={props.senderId}>
  {props.children}
</p>;