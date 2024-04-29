import { Button, Heading, Input, Text } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      toast.success("Signed in successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.code);
    }
  };

  return (
    <div className="w-6/12 flex flex-col gap-4 mx-auto my-32">
      <Heading className="border-b pb-4 border-gray-200">Login</Heading>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text>
          Don't have an account?{" "}
          <Link className="text-blue-500" to={"/signup"}>
            Create Account
          </Link>
        </Text>
        <Button type="submit" colorScheme="blue">
          Log in
        </Button>
      </form>
    </div>
  );
}
