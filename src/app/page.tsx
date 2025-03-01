import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">YouSummarize</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Get quick, accurate summaries of any YouTube video
          </p>
        </div>

        {/* Video Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Enter YouTube Video</CardTitle>
            <CardDescription>
              Paste a YouTube video URL to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1"
              />
              <Button>Summarize</Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Section - Initially Hidden */}
        <Card className="hidden">
          <CardHeader>
            <CardTitle>Video Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Summary will be displayed here */}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
