

type Data = {
    title: string;
    username: string;
    password: string;
    success: boolean;
    expectedMessage?: string;
};

export const Logindata: Data[] = [
    {
        title: "valid",
        username: process.env.APP_EMAIL ?? "",
        password: process.env.APP_PASSWORD ?? "",
        success: true,
    },
    {
        title: "wrong Password",
        username: process.env.APP_EMAIL ?? "",
        password: process.env.WRONG_PASSWORD ?? "",
        success: false,
        expectedMessage: "Oops! The credentials are incorrect."
    },
    {
        title: "Wrong User",
        username: process.env.WRONG_EMAIL ?? "",
        password: process.env.APP_PASSWORD ?? "",
        success: false,
        expectedMessage: "Oops! The credentials are incorrect."
    },
    {
        title: "empty username",
        username: "",
        password: process.env.APP_PASSWORD ?? "",
        success: false,
        expectedMessage: "Oops! The credentials are incorrect."
    },
    {
        title: "empty password",
        username: process.env.APP_EMAIL ?? "",
        password: "",
        success: false,
        expectedMessage: "Oops! The credentials are incorrect."
    },
    {
        title: "empty credentials",
        username:  "",
        password:  "",
        success: false,
        expectedMessage: "Oops! The credentials are incorrect."
    }
];