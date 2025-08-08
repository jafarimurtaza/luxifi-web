'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../Layout/Titles/SectionTitle'
import { planData } from '../../../lib/data/planData'

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Table() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle title="The Luxifi Difference" />

        {/* Desktop Table */}
        <motion.div {...animationProps} className="hidden lg:block text-primary overflow-x-auto">
          <table className="w-full border-collapse border border-base-content">
            <thead>
              <tr>
                <th className="text-left p-4 border border-base-content w-48"></th>
                {planData.plans.map((plan, i) => (
                  <th
                    key={i}
                    className="text-center p-4 border border-base-content font-semibold"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planData.features.map((feature, i) => (
                <tr key={i} className="border border-base-content">
                  <td className="p-4 font-medium border border-base-content">{feature}</td>
                  {planData.matrix.map((planRow, planIdx) => (
                    <td
                      key={planIdx}
                      className="p-4 text-center border border-base-content whitespace-nowrap"
                    >
                      {planRow[i]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Table */}
        <motion.div {...animationProps} className="lg:hidden">
          <div className="border border-base-content rounded-lg overflow-hidden text-primary">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 border-r border-base-content w-1/2 font-medium">
                    Feature
                  </th>
                  <th className="text-center p-3 w-1/2 font-semibold">{planData.plans[currentPage]}</th>
                </tr>
              </thead>
              <tbody>
                {planData.features.map((feature, i) => (
                  <tr key={i} className="border-b border-base-content last:border-b-0">
                    <td className="p-3 text-left font-medium border-r border-base-content">{feature}</td>
                    <td className="p-3 text-center whitespace-nowrap">{planData.matrix[currentPage][i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-6 gap-3">
            {planData.plans.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show ${planData.plans[i]} plan`}
                onClick={() => setCurrentPage(i)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 focus:outline-none ${
                  currentPage === i ? 'bg-base-content' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
