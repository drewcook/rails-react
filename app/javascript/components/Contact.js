import React from 'react'

const Contact = () => (
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
			<h1>Contact</h1>
			<p>Here is some contact text.</p>
		</main>
	</div>
)

export default Contact
