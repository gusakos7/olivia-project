import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const PostForm = () => {
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Create post</CardTitle>
        <CardDescription>Write your next post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Title of your post" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Content</Label>
              <Textarea placeholder="Type your next post" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Deploy</Button>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
};
