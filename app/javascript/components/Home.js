import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => (
	<div>
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<h1>Welcome</h1>
			<p>Here is the home page.</p>
		</main>
	</div>
)

export default Home
