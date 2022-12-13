import React from "react";

interface IUserDashboard {
  displayName?: string;
  children: any
}

export const UserDashboard: React.FC<IUserDashboard> = ({
  displayName,
  children
}) => (
  <>
   Hello {displayName}
   {children}
  </>
);