import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGoogle, FaGithub } from "react-icons/fa"

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>with a provider of your choice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full">
              <FaGoogle className="mr-2" />
              Login with Google
            </Button>
            <Button className="w-full">
              <FaGithub className="mr-2" />
              Login with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}