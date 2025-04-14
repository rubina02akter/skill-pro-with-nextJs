

export default function FAQ() {
  return (
    <div>
      <div className="mb-12 px-4 text-white font-serif">
  <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us??</h2>
  <div className="max-w-3xl mx-auto space-y-4">
    <div className="collapse collapse-plus  border border-base-300">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title font-semibold">Expert Instructors</div>
      <div className="collapse-content text-sm">
        Learn from industry professionals with years of hands-on experience.
      </div>
    </div>
    <div className="collapse collapse-plus  border border-base-300">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">Practical Projects</div>
      <div className="collapse-content text-sm">
        Build real-world projects to strengthen your skills and portfolio.
      </div>
    </div>
    <div className="collapse collapse-plus  border border-base-300">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">Career Support</div>
      <div className="collapse-content text-sm">
        Get access to resume reviews, mock interviews, and job preparation resources.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
