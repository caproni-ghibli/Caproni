import Links from '@/components/links'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Zack</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Developer</p>
      <div className="mt-8 text-base sm:text-lg">
        <span>
          Hey everyone, I am Zakaria proactive and creative{" "}
        </span>
        <RoughNotationGroup show={true}>
          <RoughNotation type="highlight" color="#a3e636" show={true} multiline={false} >
            <span className='dark:text-text'>
              software developer
            </span>
          </RoughNotation>
          <span>
            {" with 4 years of experience designing, building, and maintaining scalable web applications. Specializing in both"}
          </span>
          <RoughNotation type="underline" show={true} multiline={false} >
            {" Frontend"}
          </RoughNotation>
          <span>{" and"}</span>
          <RoughNotation type="underline" show={true} multiline={false} >
            {" Backend."}
          </RoughNotation>
          <br /><br />
          <span>{"When I'm not coding, you'll find me experimenting in the kitchen, hitting the trails on my bike, or exploring new tech. Always making time to unwind and enjoy life outside of work."}</span>
          <br /><br />
          <RoughNotation type="circle" show={true} multiline={false} >
            {" Hire me?"}
          </RoughNotation>
        </RoughNotationGroup>
      </div>
      <Links />
    </div>
  )
}
