import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function About() {
  return (
    <div className="font-base w-[750px] max-w-full  px-5">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
          <span>
            {"Hey everyone, I'm Zakaria, proactive and creative "}
          </span>
          <RoughNotationGroup show={true}>
            <RoughNotation type="highlight" order={1} color="#a3e636"  multiline={false}  >
              <span className='dark:text-text'>
                software developer
              </span>
            </RoughNotation>
            <span>
              {" with 4 years of experience designing, building, and maintaining scalable web applications. Specializing in both"}
            </span>
            <RoughNotation type="underline" order={3} multiline={false} >
              {" Frontend"}
            </RoughNotation>
            <span>{" and"}</span>
            <RoughNotation type="underline" order={4}  multiline={false} >
              {" Backend."}
            </RoughNotation>
            <br />
            <br />
            <RoughNotation type="circle" iterations={5} color='red' order={2} multiline={false} >
              <a target="_blank" href={'https://www.linkedin.com/in/zakariabj/'}>              
                {" Hire me?"}
              </a>
            </RoughNotation>
          </RoughNotationGroup>
      </div>
    </div>
  )
}
