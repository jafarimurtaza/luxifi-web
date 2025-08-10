export function SolutionDetails({ solution, isTransitioning }) {

  return (
    <div
      className={` p-3 transition-all duration-700 ease-in-out ${
        isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4  text-primary transition-colors duration-500">
        {solution.title}
      </h3>
      <p className=" leading-relaxed text-base-content transition-all duration-500">{solution.description}</p>
    </div>
  )
}
