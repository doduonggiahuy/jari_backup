import StatusManagementUI from "@screens/StatusManagementUI";
import MainTest from "@screens/MainTest";
import SignInUI from "@screens/SignInUI";
import SignUpUI from "@screens/SignUpUI";
import AccountManegamnet from "@screens/AccountManegamentUI";
import MembersManagement from "@screens/MembersManagementUI";

export const routes = [
  {
    path: "/signin",
    component: <SignInUI />,
  },
  {
    path: "/signUp",
    component: <SignUpUI />,
  },
  {
    path: "/mainTest",
    component: <MainTest />,
  },
  {
    path: "/issueTicket",
    component: <StatusManagementUI />,
  },
  {
    path: "/accountManagement",
    component: <AccountManegamnet />,
  },
  {
    path: "/membersManagement",
    component: <MembersManagement />,
  },
];
