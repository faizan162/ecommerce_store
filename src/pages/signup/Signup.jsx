import React, { useState } from "react";
import { auth, firestore } from "../../Config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, Heading, Input, Text } from "@chakra-ui/react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: name,
      });

      const userData = {
        name: name,
        email: email,
        userId: user.uid,
      };

      const useRef = collection(firestore, "users");
      await addDoc(useRef, userData);
      toast.success("Signed up successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-6/12 flex flex-col gap-4 mx-auto my-32">
      <Heading className="border-b pb-4 border-gray-200">Sign Up</Heading>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            Login
          </Link>
        </Text>
        <Button type="submit" colorScheme="blue">
          Sign up
        </Button>
      </form>
    </div>
  );
}
