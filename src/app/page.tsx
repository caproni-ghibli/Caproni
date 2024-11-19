import ImageCard from '@/components/ui/imageCard'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  return (
    <div className="font-base w-[750px] max-w-full px-5">
      <h1 className="text-2xl font-heading sm:text-4xl">Zakaria</h1>
      <p className="mt-2 text-lg mb-10 sm:text-xl">Software Developer</p>
      <div className='flex flex-col sm:flex-row gap-8'>
        <div className="md:w-1/4 sm:w-full self-center">
          <ImageCard imageUrl="/ME.jpg">
            Zack
          </ImageCard>
        </div>
        <div className="w-full sm:w-3/4 text-base sm:text-lg self-center">
          <Card className="w-auto">
            <CardHeader>
              <CardTitle>Tech Enthusiast, Adventurer, and Culinary Experimenter</CardTitle>
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
