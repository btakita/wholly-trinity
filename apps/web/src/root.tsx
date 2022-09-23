// @refresh reload
import { useMemo } from '@ctx-core/solid-nanostores'
import { use_Context_ctx } from '@ctx-core/ui-solid'
import { Modal__contact__set__showing__ } from '@wholly-trinity/domain'
import { Suspense } from 'solid-js'
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts } from 'solid-start'
import './index.css'
export default function Root() {
	const ctx = use_Context_ctx()
	const Modal__contact__set__showing_ = useMemo(Modal__contact__set__showing__(ctx))
	return (
		<Html lang="en">
			<Head>
				<Meta charset="utf-8"/>
				<Meta name="viewport" content="width=device-width, initial-scale=1"/>
				<Link rel="canonical" href="https://www.stargateevent.com"/>
				<Link rel="icon" type="image/png" href="/favicon.ico"/>
				<Link rel="preconnect" href="https://fonts.googleapis.com"/>
				<Link rel="preconnect" href="https://fonts.gstatic.com"/>
				<Link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap" rel="stylesheet"/>
			</Head>
			<Body class="antialiased" classList={{ 'overflow-hidden': Modal__contact__set__showing_() }}>
				<ErrorBoundary>
					<Suspense>
						<Routes>
							<FileRoutes/>
						</Routes>
					</Suspense>
				</ErrorBoundary>
				<Scripts/>
			</Body>
		</Html>
	)
}
