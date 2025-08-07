import CallToAction from "./call-to-action";
import Myhero from "./Myhero";


import Navigation from "./navigation";
import Partners from "./partners";
import ProblemSolution from "./problem-solution";
import Testimonials from "./testimonials";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {/* <Myhero    /> */}
      <ProblemSolution />
      <Testimonials />
      <Partners />
      <CallToAction />
    </div>
  )
}
