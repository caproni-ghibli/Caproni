import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function About() {
  return (
    <div className="font-base w-[--page-width] max-w-full  px-5">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>
      <RoughNotationGroup show={true}>
        
        <div className="mb-10 text-base sm:text-lg">
            <span>
              {"Hey everyone, I'm Zakaria, proactive and creative "}
            </span>
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
        </div>
        <div className="my-10 text-base sm:text-lg">
          <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Future Plans</h1>
            <span>{"In the future, I aim to establish myself as a "}</span>
            <RoughNotation type="highlight" order={6} color="#a3e636"  multiline={false}  >
              <span className='dark:text-text'>
                {" software architect "}
              </span>
            </RoughNotation>
            <span>
              {" specializing in crafting "}
            </span>
            <RoughNotation type="underline" order={7} color="red"  multiline={false}  >
              robust,
            </RoughNotation>
            <span>{"  "}</span>
            <RoughNotation type="underline" order={8} color="red"  multiline={false}  >
              scalable,
            </RoughNotation>
            <span>
              {"  and  "}
            </span>
            <RoughNotation type="underline" order={9} color="red"  multiline={false}  >
              efficient
            </RoughNotation>
            <span>
              {" software solutions that address complex challenges and drive technological innovation."}
            </span>   
        </div>

      </RoughNotationGroup>

    </div>
  )
}



//! [ ] add future plans like i plan to be a software architect in the future