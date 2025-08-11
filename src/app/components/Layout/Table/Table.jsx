'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../Titles/SectionTitle'

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function ComparisonTable({ title, planData }) {
  const [activePlanIndex, setActivePlanIndex] = useState(0)

  const renderCell = (cell) => {
    if (cell && typeof cell === 'object' && 'icon' in cell && 'text' in cell) {
      return (
        <div className="flex items-center justify-center gap-2">
          {cell.icon}
          <span>{cell.text}</span>
        </div>
      )
    }
    return cell
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {title && <SectionTitle title={title} />}

        {/* Desktop Table */}
        <motion.div {...animationProps} className="hidden lg:block text-primary overflow-x-auto">
          <table className="w-full border-collapse border border-base-content">
            <thead>
              <tr>
                <th className="w-48 p-4 text-left border border-base-content"></th>
                {planData.plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className="p-4 text-center font-semibold text-base-content border border-base-content"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planData.features.map((feature, idx) => (
                <tr key={idx} className="border border-base-content">
                  <td className="p-4 font-medium text-base-content border border-base-content">
                    {feature}
                  </td>
                  {planData.matrix.map((planRow, planIdx) => (
                    <td
                      key={planIdx}
                      className="p-4 text-center whitespace-nowrap border border-base-content"
                    >
                      {renderCell(planRow[idx])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Table */}
        <motion.div {...animationProps} className="lg:hidden">
          <div className="overflow-hidden rounded-lg border border-base-content text-primary">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-1/2 p-3 font-medium text-left text-base-content border-r border-base-content">
                    Feature
                  </th>
                  <th className="w-1/2 p-3 font-semibold text-center text-base-content">
                    {planData.plans[activePlanIndex]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {planData.features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-base-content last:border-b-0">
                    <td className="p-3 font-medium text-left text-base-content border-r border-base-content">
                      {feature}
                    </td>
                    <td className="p-3 text-center whitespace-nowrap">
                      {renderCell(planData.matrix[activePlanIndex][idx])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {planData.plans.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show ${planData.plans[idx]} plan`}
                onClick={() => setActivePlanIndex(idx)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 focus:outline-none ${
                  activePlanIndex === idx ? 'bg-base-content' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
