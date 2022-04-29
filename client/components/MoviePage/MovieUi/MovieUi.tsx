import { useAppSelector } from '@/app/hooks'
import {
	ActorList,
	BoxOffice,
	Header,
	ImageWithPlot,
	InfoButtons,
	MovieInfo,
	MoviePosters
} from '@/components/MoviePage'
import { selectShowActors, selectShowBoxOffice, selectShowPosters } from '@/features/ContentToShow/contentToShowSlice'
import type { Movie } from '@/types/movieType'

const MovieUi = ({ data }: { data: Movie }) => {
	const isShowPosters = useAppSelector(selectShowPosters)
	const isShowActors = useAppSelector(selectShowActors)
	const isShowBoxOffice = useAppSelector(selectShowBoxOffice)
	return (
		<>
			<Header props={data} />
			<ImageWithPlot genreList={data.genreList} image={data.image} plot={data.plot} />
			<MovieInfo
				directorList={data?.directorList}
				writerList={data.writerList}
				starList={data.starList}
				awards={data.awards}
				companies={data.companies}
				countries={data.countries}
				languages={data.languages}
			/>
			<InfoButtons />
			{isShowBoxOffice && (
				<BoxOffice
					budget={data.boxOffice.budget}
					cumulativeWorldWideGross={data.boxOffice.cumulativeWorldwideGross}
					grossUSA={data.boxOffice.grossUSA}
					openingWeekendUSA={data.boxOffice.openingWeekendUSA}
				/>
			)}
			{isShowActors && <ActorList actorList={data.actorList} />}
			{isShowPosters && <MoviePosters posters={data.posters} />}
		</>
	)
}
export default MovieUi
