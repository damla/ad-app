import classNames from 'classnames'

interface Props {
  className?: string
  disabled?: boolean
  onClick?: VoidFunction
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  className,
  disabled,
  onClick,
  children,
  type
}: Props) => {
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
