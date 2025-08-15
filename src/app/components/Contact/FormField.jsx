
import { motion } from "framer-motion"
export function FormField({ id, name, type = "text", label, value, onChange, placeholder, required = false }) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={id}>
        <span className="label-text text-sm font-medium">{label}</span>
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="input input-bordered bg-base-100/50 focus:input-warning transition-all duration-200"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}