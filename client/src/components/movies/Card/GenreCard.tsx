import Image from 'next/image'
import { FC } from 'react'

type props = {
  img: string
}

const GenreCard: FC<props> = ({ img }) => {
  return (
    <div>
      <div>
        <div>
          <Image src={img} width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default GenreCard
