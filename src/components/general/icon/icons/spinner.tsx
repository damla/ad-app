const Spinner = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    style={{
      margin: 'auto',
      background: 'none',
      display: 'block',
      shapeRendering: 'auto',
      animationPlayState: 'running',
      animationDelay: '0s'
    }}
    width='1em'
    height='1em'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
  >
    <circle
      cx='50'
      cy='50'
      fill='none'
      stroke='currentColor'
      strokeWidth='10'
      r='35'
      strokeDasharray='164.93361431346415 56.97787143782138'
      style={{ animationPlayState: 'running', animationDelay: '0s' }}
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        repeatCount='indefinite'
        dur='1.1764705882352942s'
        values='0 50 50;360 50 50'
        keyTimes='0;1'
        style={{ animationPlayState: 'running', animationDelay: '0s' }}
      ></animateTransform>
    </circle>
  </svg>
)

export default Spinner
