import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Layout() {
  //states
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //useEffects and other hooks

  //handlers for states
  const handleLoginForm = (e) => {
    const { name, value } = e.target;
    setLoginData((loginData) => ({
      ...loginData,
      [name]: value,
    }));
  };
  const handleRegisterForm = (e) => {
    const { name, value } = e.target;
    setRegisterData((registerData) => ({
      ...registerData,
      [name]: value,
    }));
  };
  return (
    <Tabs defaultValue="signUp" className="w-3/5">
      <TabsList className=" flex justify-center items-center ">
        <TabsTrigger
          value="signUp"
          className="data-[state=active]:bg-transparent text-opacity-90 border-b-2 border-violet-300 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-violet-600 p-3 transition-all duration-200"
        >
          SignUp
        </TabsTrigger>
        <TabsTrigger
          value="login"
          className="data-[state=active]:bg-transparent text-opacity-90 border-b-2 border-violet-300 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-violet-600 p-3 transition-all duration-200"
        >
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="signUp">
      <Input
          type="text"
          value={registerData.username}
          name="username"
          onChange={handleRegisterForm}
          placeholder="username"
          className="h-6 w-1/2 mb-5  rounded-full p-5 text-xl placeholder:font-semibold font-bold"
        />
        <Input
          type="email"
          value={registerData.email}
          name="email"
          onChange={handleRegisterForm}
          placeholder="password"
          className="h-6 w-1/2 mb-5 rounded-full p-5 text-xl placeholder:font-semibold font-bold"
        />
         <Input
          type="password"
          value={registerData.password}
          name="password"
          onChange={handleRegisterForm}
          placeholder="password"
          className="h-6 w-1/2 mb-5 rounded-full p-5 text-xl placeholder:font-semibold font-bold"
        />
         <Input
          type="password"
          value={registerData.confirmPassword}
          name="confirmPassword"
          onChange={handleRegisterForm}
          placeholder="password"
          className="h-6 w-1/2 mb-5 rounded-full p-5 text-xl placeholder:font-semibold font-bold"
        />
       
        <Button className="h- w-1/2 mb-5  rounded-full p-6">Login</Button>
      </TabsContent>
      <TabsContent
        value="login"
        className="flex flex-col justify-start items-center pt-5 "
      >
        <Input
          type="text"
          value={loginData.username}
          name="username"
          onChange={handleLoginForm}
          placeholder="username"
          className="h-6 w-1/2 mb-5  rounded-full p-5 text-xl placeholder:font-semibold font-bold"
        />
        <Input
          type="password"
          value={loginData.password}
          name="password"
          onChange={handleLoginForm}
          placeholder="password"
          className="h-6 w-1/2 mb-5 rounded-full p-5 text-xl placeholder:font-semibold font-bold"
        />
       
        <Button className="h- w-1/2 mb-5  rounded-full p-6">Login</Button>
      </TabsContent>
    </Tabs>
  );
}
