import { type IconType } from '@icons-pack/react-simple-icons'

export default function Marquee({ items }: { items: { skill: string; icon: IconType }[] }) {

  let itemsToLoopOver: { skill: string; icon: IconType }[];
  itemsToLoopOver = items
  while (itemsToLoopOver.length < 22) {
    itemsToLoopOver = itemsToLoopOver.concat(items).slice(0, 22);
  }

  return (
    <div className="relative flex  overflow-x-hidden border-b-2 border-t-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-text dark:text-darkText font-base">
      <div className="flex animate-marquee whitespace-nowrap py-8">
        {itemsToLoopOver.map((item) => {
          return (
            <span key={item.skill} className="mx-4 text-4xl">
              <item.icon className="h-8 w-8" title="" />
            </span>
          )
        })}
      </div>

      <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-8">
        {itemsToLoopOver.map((item) => {
          return (
            <span key={item.skill} className="mx-4 text-4xl">
              <item.icon className="h-8 w-8" title="" />
            </span>
          )
        })}
      </div>

    </div>
  )
}