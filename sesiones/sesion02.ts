



// Alias type
export type UserT = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    role: "admin" | "standard";
};

  // Utility Types 
  // Pick https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
  export type UserTPayload = Pick<UserT, "name" | "email" | "password">;
  
  export default function createUser(payload: UserTPayload): UserT {
    const {name, email, password} = payload

     const user: UserT = {
      name, 
      email,
      password,
      id: "asd123",
      createdAt: new Date(),
      role: "standard"
    }; 
    return user;
  }
  const userProps:UserTPayload = {
      name: "Carlos",
      email: "cmarchena@gmail.com",
      password: "8188919"
  }
  const newUser = createUser(userProps)
  newUser