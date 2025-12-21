import React, { useState } from 'react'
interface userComents{
    username: string;
    comment: string;
}
export const UsePost = () => {
    const [allUser, setAllUser] = useState<userComents[]>([]); 
const [user, setUser] = useState<userComents>({
  username: "",
  comment: ""
});

const handleUser = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setUser(prev => ({
    ...prev,
    [name]: value
  }));
};

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setAllUser(prev => [...prev, user]);
console.log(allUser)
  setUser({
    username: "",
    comment: ""
  });
};
  return {allUser,handleUser,onSubmit,user}
}
