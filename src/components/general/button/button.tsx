import classNames from 'classnames'

interface Props {
  className?: string
  disabled?: boolean
  onClick?: VoidFunction
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<Props> = ({
  className,
  disabled,
  onClick,
  children,
  type
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, 'button')}
      type={type}
    >
      {children}
    </button>
  )
}
