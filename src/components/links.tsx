import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:zakaria.benjawed@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/zakariabenjaoued',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/zakariabj/',
    }
  ]

  return (
    <div className='fixed left-0 bottom-5 z-50 w-[calc(100vw-16px)] flex'>
      <div className="mx-auto flex justify-center w-[--page-width] flex-wrap items-center gap-5">
          {links.map((link, id) => {
            return (
              <a 
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-2 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
              target="_blank" key={id} href={link.href}
              >
                <link.icon title="" />
              </a>
            )
          })}
      </div>
    </div>
  )
}
