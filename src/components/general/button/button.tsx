import classNames from 'classnames'

interface Props {
  className?: string
  onClick?: VoidFunction
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({ className, onClick, children, type }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(className, 'button')}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
