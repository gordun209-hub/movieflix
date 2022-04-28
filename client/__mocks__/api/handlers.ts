import { rest } from 'msw'
const apiKey = '123'
const id = '1'
export const handlers = [
	rest.get(`/Title/${apiKey}/${id}/FullActor,Posters,Trailer`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: {
					Title: {
						Title: 'test',
						Year: '2020',
						Rated: 'PG',
						Released: '2020-01-01',
						Runtime: '120 min',
						Genre: 'test',
						Director: 'test',
						Writer: 'test',
						Actors: 'test',
						Plot: 'test',
						Language: 'test',
						Country: 'test',
						Awards: 'test',
						Poster: 'test'
					}
				}
			}),
			ctx.delay(1000)
		)
	})
]
