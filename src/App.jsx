import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
	return (
		<div className=" bg-zinc-950">
			<Banner/>
			{/* <Nav/> */}
			<div className="lg:hidden ">
				<NavMobile />
			</div>
			<Header />
			<About />
			<Services />
			<Work />
			<Contact />
			<Footer/>
		</div>
	);
}

export default App;
