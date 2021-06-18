import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ersin Can",
    email: "ersincan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ersin",
    email: "ersin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
