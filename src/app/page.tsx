import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Zack</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Zack, software engineer based in NYC.</p>

        <br />

        <p>
          This is the neobrutalism portfolio template. Check the{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href=""
          >
            github repo
          </a>{' '}
          for more info.
        </p>
      </div>

      <Links />
    </div>
  )
}
