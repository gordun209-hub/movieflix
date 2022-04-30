export type ActorInfoWithImageProps = {
	data:
		| {
				name: string
				image: string
		  }
		| undefined
}

export type ActorInfoTextProps = {
	data:
		| {
				awards: string
				birthDate: string
				deathDate: string | null
				summary: string
				role: string
				height: string
		  }
		| undefined
}
