import { Button } from "@/components/ui/button"
import {
  Card,

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface userComents{
    username: string;
    comment: string;
}

interface Card{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleUser: (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => void,
  user:userComents,
}





export const Mailmme=({ onSubmit, handleUser, user }:Card )=> {
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
   console.log(e.key)
  }


  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Report bugs</CardTitle>
        <CardDescription>
          Enter your information down there
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input
                              id="username"
                              name="username"
                type="text"
                placeholder="Username"
                required
                              value={user.username}
                              onChange={(e)=>handleUser(e)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Comment</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
                          <textarea
                              className="border bg-black rounded p-2"
                              id="comment"
                              name="comment"
                              value={user.comment}
                              onChange={(e)=>handleUser(e)}
                              required >
                              
                              </textarea>
            </div>
          </div>
           <CardFooter className="flex-col gap-2 pt-3">
       
           <Button type="submit" onKeyDown={(e)=>handleKey(e)}  className="cursor-pointer w-full bg-black text-white">
          Send
        </Button>
      </CardFooter>
             
        </form>
      </CardContent>
     
    </Card>
  )
}
