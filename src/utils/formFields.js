const signinFields = [
    {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address",
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "pass_word",
        name: "pass_word",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    }
]

const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username"
    },
    {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "pass_word",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirmPassword",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Confirm Password"
    },
    {
        labelText: "Phone number",
        labelFor: "Phone number",
        id: "phone",
        name: "Phone number",
        type: "number",
        autoComplete: "Phone number",
        isRequired: true,
        placeholder: "Phone number"
    }
]
const createUserFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username"
    },
    {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Password",
        labelFor: "pass_word",
        id: "pass_word",
        name: "pass_word",
        type: "password",
        autoComplete: "pass_word",
        isRequired: true,
        placeholder: "Password"
    },
    {
        labelText: "Phone number",
        labelFor: "phone",
        id: "phone",
        name: "phone",
        type: "number",
        autoComplete: "phone",
        isRequired: true,
        placeholder: "Phone number"
    },
    {
        labelText: "Birth day",
        labelFor: "birth_day",
        id: "birth_day",
        name: "birth_day",
        type: "text",
        autoComplete: "birth_day",
        isRequired: true,
        placeholder: "Birth day"
    },
    {
        labelText: "Role",
        labelFor: "role",
        id: "role",
        name: "role",
        type: "text",
        autoComplete: "role",
        isRequired: true,
        placeholder: "Role"
    }
];

export { signinFields, signupFields, createUserFields }