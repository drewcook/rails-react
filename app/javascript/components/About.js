import React from 'react'

const About = () => (
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
			<h1>About</h1>
			<p>Here is some about text.</p>
		</main>
	</div>
)

export default About
