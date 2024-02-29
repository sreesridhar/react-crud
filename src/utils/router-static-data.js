import * as Pages from "./../pages";

export const unAuthPages = [
  { id: 1, key: "1", path: "/", element: <Pages.Login /> },
  { id: 2, key: "2", path: "/Login", element: <Pages.Login /> },
  {
    id: 3,
    key: "3",
    path: "/forget-password",
    element: <Pages.ForgetPassword />,
  },
  {
    id: 4,
    key: "4",
    path: "/reset-password",
    element: <Pages.ResetPassword />,
  },
];

export const privatePages = (state) => [
  {
    id: 1,
    key: "1",
    path: "/dashboard",
    element: <Pages.Dashboard />,
  },
  {
    id: 2,
    key: "2",
    path: "/profile",
    element: <Pages.Profile />,
  },
];
