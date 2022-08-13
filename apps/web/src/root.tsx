// @refresh reload
import { Suspense } from 'solid-js'
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts } from 'solid-start'
import './index.css'
export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Meta charset="utf-8"/>
				<Meta name="viewport" content="width=device-width, initial-scale=1"/>
				<Link rel="icon" type="image/png" href="/favicon.ico"/>
			</Head>
			<Body class="antialiased">
				<ErrorBoundary>
					<Suspense>
						<Routes>
							<FileRoutes/>
						</Routes>
					</Suspense>
				</ErrorBoundary>
				<Scripts/>
			</Body>
		</Html>)
}
