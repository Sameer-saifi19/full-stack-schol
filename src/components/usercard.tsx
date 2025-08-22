import { Ellipsis } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SessionYear from "./ui/sessionyear";

export default function UserCard({ type }: { type: string }) {
  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <SessionYear session="2025/26" />
        <CardAction>
          <Ellipsis />
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardTitle>1234</CardTitle>
      </CardContent>
      <CardFooter>
        <CardDescription>{type}</CardDescription>
      </CardFooter>
    </Card>
  );
}
