import { motion } from 'framer-motion'
import { useState } from 'react'

interface IProps {
  text: string
  active: boolean
  link?: string
  barProps?: Record<string, any>
  [key: string]: any
}

const Link: React.FC<IProps> = ({
  text,
  active,
  link,
  barProps = {},
  ...rest
}) => {
  const [hover, setHover] = useState(false)

  return (
    <motion.a
      {...rest}
      initial={{ fontSize: `1.125rem` }}
      animate={{
        fontSize: active ? `1.5rem` : hover ? `1.2rem` : `1.125rem`,
        fontWeight: active ? 600 : 500,
      }}
      transition={{ ease: `easeInOut`, duration: 0.3 }}
      href={link}
      className={`cursor-pointer capitalize flex items-center mt-1 tracking-tight transition-colors duration-500 ease-in-out ${
        active ? `text-primary` : `text-subtle`
      }`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}

      <motion.div
        {...barProps}
        animate={{
          height: active ? `2.2rem` : hover ? `1.2rem` : `1rem`,
        }}
        transition={{ ease: `easeInOut`, duration: 0.3 }}
        className={`ml-4 border-2 rounded-full transition-colors duration-500 ease-in-out ${
          active ? `border-primary` : `border-subtle`
        }`}
      />
    </motion.a>
  )
}

export default Link
