import ImageCard from '@/components/ui/imageCard'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  return (
    <div className="font-base ">
      <h1 className="text-2xl font-heading sm:text-4xl">Zakaria</h1>
      <p className="mt-2 text-lg mb-10 sm:text-xl">Software Developer</p>
      <div className='flex gap-8'>
        <div className="w-1/4 self-center">
          <ImageCard imageUrl="/ME.jpg">
              Zack
          </ImageCard>
        </div>
        <div className="w-3/4 text-base sm:text-lg self-center">
          <Card className="w-auto">
            <CardHeader>
              <CardTitle>Tech Enthusiast, Adventurer, and Culinary Experimente</CardTitle>
            </CardHeader>
            <CardContent>
              <span>{"When I'm not coding, you'll find me experimenting in the kitchen, hitting the trails on my bike, or exploring new tech. Always making time to unwind and enjoy life outside of work."}</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
